import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { initialData } from 'database/products';
import { FullSkeleton, ItemCounter } from '@/components/ui';
import { ShopLayout } from '@/components/layout';
import { ProductSlideshow, SizeSelector } from '@/components/products';
import { useRouter } from 'next/router';
import { useProducts } from '../../hooks/useProducts';
import { IProduct, ISize } from '../../interfaces/Products';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { dbProducts } from 'database';
import { useState } from 'react';
import { ICartProduct } from 'interfaces';

interface IProps {
  product: IProduct;
}

const ProductPage: NextPage<IProps> = ({ product }) => {
 const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
     _id: product._id,
    images: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    tags: product.tags,
    title: product.title,
    gender: product.gender,
    quantity: 1,
 });

 const selectedSize = (size: ISize) => {
  console.log('en el pradre', size);
  setTempCartProduct((currentProduct) => ({...currentProduct, size}))
 }

 const handleQuantity = (action: '+' | '-') => {
  if (action === '+') {
    setTempCartProduct((currentProduct) => ({...currentProduct, quantity: currentProduct.quantity + 1}))
    return;
  }

  setTempCartProduct((currentProduct) => ({...currentProduct, quantity: currentProduct.quantity - 1}))
 }

  return (
   <ShopLayout title='ABC' pageDescription={product?.description}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <ProductSlideshow images={product?.images}/>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box display="flex" flexDirection="column">
          {/*Titutlos*/}
          <Typography variant='h1' component="h1">
            {product.title}
          </Typography>
          <Typography variant='subtitle1' component="h2">
            $ {product.price}
          </Typography>
          {/*Cantidad*/}
          <Box sx={{ my: 2 }} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
            {/* item counter*/}
            <ItemCounter 
              currentValue={tempCartProduct.quantity}
              updateQuantity={handleQuantity}
              maxValue={5}
            />
            { /* size selector */}
            <SizeSelector
              sizes={product.sizes}
              selectedSize={tempCartProduct.size}
              onSelectedSize={selectedSize}
            />
          </Box>
          {
              product.inStock > 0 ? (
                <Button
                  color="secondary" 
                  className="circular-btn" 
                  style={{ marginTop: '50px', marginBottom: '50px' }}
                >
                  {
                    tempCartProduct.size ? 'Agregar al carrito' : 'Seleccione una talla'
                  }
                </Button>
              ) : (
                <Chip label="No hay disponibles" color="error" variant="outlined"/>
              )
          }

          {/*Descripción*/}
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2">Descripcion</Typography>
            <Typography variant="body2" >{product.description}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
   </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const slugs = await dbProducts.getAllSlugs();
  console.log({slugs});
  const slugsPaths = slugs.map((item,i) => ({params:{slug:`${item.slug}`}}));
  console.log({slugsPaths});

  return {
    paths: slugsPaths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const { slug } = params as {slug:string}
  
  // const pokemon = await getPokemonInfo(id);
  console.log({slug});
  const product = await dbProducts.getBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false //la redireccion a otra pagina ya no existe para que los boot de google la encuentren
      }
    }
  }
  
  return {
    props: {
     product
    },//seconds for Incremental Static Regeneration
    revalidate: 86400
  }
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// No usemos ssr en este caso, mejor staticpaths and static props
/* import { GetServerSideProps } from 'next'
import { dbProducts } from 'database';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //const { data } = await  // your fetch function here 
  //const { data } = await  // your fetch function here 
  const query = ctx.query as {slug: string}

  const product = await dbProducts.getBySlug(query.slug);

  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      product
    }
  }
}*/
export default ProductPage;
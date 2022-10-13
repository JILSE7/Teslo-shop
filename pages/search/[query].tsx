import { FC } from 'react';
import { GetServerSideProps } from 'next'
import { dbProducts } from '../../database';
import { Box, Typography } from '@mui/material';
import { IProduct } from '../../interfaces/Products';
import { ShopLayout } from '../../components';
import { ProductList } from '../../components/products';

interface IProps {
    products        : IProduct[];
    query           : string;
    foundedProducts : boolean; 
}

const SearchPage:FC<IProps> = ({ products: productsSSR, query, foundedProducts }) => {
  console.log(productsSSR);

  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Encuentra los mejores productos de Teslo aqui'>
      <Typography variant='h1' component='h1'>Buscar productos</Typography>
      {
        foundedProducts 
        ?  <Typography variant='h2' component='h2' sx={{ mb: 1 }} color="secondary" textTransform="capitalize">Termino: {query}</Typography>
        : <Box>
            <Box display="flex">
                <Typography variant='h2' component='h2' sx={{ my: 1 }}>No encontramos ningún producto:</Typography>
                <Typography variant='h2' component='h2' sx={{ my: 1, ml: 1 }} color="secondary">{ query }</Typography>
            </Box>
            <Typography variant='h2' component='h2' sx={{ mb: 1 }} fontWeight="bold">Pero quiza te puede interesar</Typography>
          </Box>
      }

      <ProductList products={productsSSR}/>

    </ShopLayout>
    )
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { query } = ctx.params as { query: string };
    if (query.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        }
    }

    let products = await dbProducts.getProductsByTerm(query);
    const foundedProducts = products.length > 0;

    if (!foundedProducts) {
        products = await dbProducts.getAllProducts();
    }

    return {
        props: {
           products,
           foundedProducts,
           query,
        }
    }
}

export default SearchPage;

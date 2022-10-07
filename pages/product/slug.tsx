import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { initialData } from 'database/products';
import { ItemCounter } from '@/components/ui';
import { ShopLayout } from '@/components/layout';
import { ProductSlideshow, SizeSelector } from '@/components/products';

const product = initialData.products[0];

const ProductPage = () => {
  return (
   <ShopLayout title='ABC' pageDescription={product.description}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <ProductSlideshow images={product.images}/>
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
            <ItemCounter/>
            { /* size selector */}
            <SizeSelector sizes={product.sizes} selectedSize={product.sizes[0]}/>
          </Box>
          <Button color="secondary" className="circular-btn" style={{ marginTop: '50px', marginBottom: '50px' }} >Agregar al carrito</Button>
          {/* <Chip label="No hay disponibles" color="error" variant="outlined"/> */}

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

export default ProductPage
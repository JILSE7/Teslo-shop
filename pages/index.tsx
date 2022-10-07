import { useId } from 'react';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from 'database/products';
import { ShopLayout } from '../components';
import { ProductList } from '../components/products';


export default function Home() {
  const reactId = useId();
  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Encuentra los mejores productos de Teslo aqui'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1 }}>Todos los productos</Typography>

      <ProductList products={initialData.products as any}/>
    </ShopLayout>
    )
}

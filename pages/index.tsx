import { Typography } from '@mui/material';

import { initialData } from 'database/products';
import { FullSkeleton, ShopLayout } from '../components';
import { ProductList } from '../components/products';
import { useProducts } from '../hooks';



export default function Home() {
  const {data, error, isLoading} = useProducts('products');

  const products = data?.data || [];

  return (
    <ShopLayout title='Teslo-Shop - Home' pageDescription='Encuentra los mejores productos de Teslo aqui'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      {
        isLoading ? <FullSkeleton numberIterations={12} /> : <ProductList products={products}/>
      }

    </ShopLayout>
    )
};

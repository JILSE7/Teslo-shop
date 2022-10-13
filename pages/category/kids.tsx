import React from 'react'
import { ShopLayout } from '../../components/layout/ShopLayout';
import { useProducts } from '../../hooks/useProducts';
import { Typography } from '@mui/material';
import { FullSkeleton } from '../../components/ui/FullSkeleton';
import { ProductList } from '../../components/products/ProductList';

const Kids = () => {
  const {data, error, isLoading} = useProducts('products?gender=kid');
  const products = data?.data || [];
  return (
    <ShopLayout title='Teslo Shop - Niños' pageDescription='Ultima ropa de niños' >
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' component='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      {
        isLoading ? <FullSkeleton numberIterations={12} /> : <ProductList products={products}/>
      }
    </ShopLayout>
  )
}

export default Kids;
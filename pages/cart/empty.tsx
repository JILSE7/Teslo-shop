import NextLink from 'next/link';
import { ShopLayout } from '@/components/layout';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';


const EmptyPage = () => {
  return (
    <ShopLayout title='Carrito vacio' pageDescription='No hay articulos en el carrito'>
        <Box
          display="flex" 
          justifyContent="center" 
          flexDirection="column"
          alignItems="center" 
          height={'calc(100vh - 200px)'}
          >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }}/>
            <Typography >
                Su carrito está vacio
            </Typography>
            <NextLink href="/" passHref>
              <Link typography="h4" color="secondary">
                Regresar
              </Link>
            </NextLink>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage;
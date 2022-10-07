import NextLink from 'next/link'
import { Card, CardContent, Grid, Typography, Divider, Button, Link } from '@mui/material';
import { Box } from '@mui/system';
import { ShopLayout } from '@/components/layout'
import { CardList, OrderSummary } from '@/components/cart';
const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de order' pageDescription='Resumen de la orden'>
    <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
    <Grid container sx={{ mt: 5 }}>
      <Grid item xs={12} sm={7}>
        {/*cart list */}
        <CardList/>

      </Grid>
      <Grid item xs={12} sm={5}>
        <Card className='summary-card'>
            <CardContent>
                <Typography variant='h2'>Resumen (3 productos)</Typography>
                <Divider sx={{ my:1 }}/> 
                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                <Typography>Said Mandujano</Typography>
                <Typography>24 Cuernavaca</Typography>
                <Typography>Tlalnepantla de baz</Typography>
                <Typography>Mexico</Typography>
                <Typography>+1 23123</Typography>
                <Box textAlign="right">
                  <NextLink href='/checkout/address' passHref  >
                    <Link underline='always'>Editar</Link>
                  </NextLink>
                </Box>
                <Divider sx={{ my:1 }}/> 
                <OrderSummary/>
                <Box textAlign="center">
                  <NextLink href='/cart' passHref>
                    <Link underline='always'>Editar Carrito</Link>
                  </NextLink>
                </Box>
                <Box sx={{ mt:3 }}>
                  <Button color='secondary' className='circular-btn' fullWidth>
                    Confirmar orden
                  </Button>
                </Box>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
</ShopLayout>
  )
}

export default SummaryPage
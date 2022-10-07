
import { Card, CardContent, Grid, Typography, Divider, Button } from '@mui/material';
import { Box } from '@mui/system';
import { ShopLayout } from '@/components/layout'
import { CardList, OrderSummary } from '@/components/cart';

const CartPage = () => {
  return (
    <ShopLayout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
    <Typography variant='h1' component='h1'>Carrito</Typography>
    <Grid container>
      <Grid item xs={12} sm={8}>
        {/*cart list */}
        <CardList editable/>

      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className='summary-card'>
            <CardContent>
                <Typography variant='h2'>Orden</Typography>
                <Divider sx={{ my:1 }}/>
                {/* Order summary */}
                <OrderSummary/>

                <Box sx={{ mt:3 }}>
                  <Button color='secondary' className='circular-btn' fullWidth>
                    Checkout
                  </Button>
                </Box>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
</ShopLayout>
  )
}

export default CartPage
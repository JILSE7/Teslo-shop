import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid xs={6} textAlign="right">
            <Typography fontWeight='bold'>100</Typography>
        </Grid>
        <Grid xs={6}>
            <Typography >Subtotal</Typography>
        </Grid>
        <Grid xs={6} textAlign="right">
            <Typography >$100.00</Typography>
        </Grid>
        <Grid xs={6}>
            <Typography >Impuestos</Typography>
        </Grid>
        <Grid xs={6} textAlign="right">
            <Typography>$100.00</Typography>
        </Grid>
        <Grid xs={6}>
            <Typography variant='subtitle1'>Total</Typography>
        </Grid>
        <Grid xs={6} textAlign="right">
            <Typography fontWeight='bold'>$100.00</Typography>
        </Grid>
    </Grid>
  )
}
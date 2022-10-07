import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layout/ShopLayout';
import { Box } from '@mui/system';

const AddressPage = () => {
  return (
    <ShopLayout title='Direccion' pageDescription='Confirmar direccion del destino'>
      <Typography variant='h1' component='h1'>Direccion</Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <TextField label='Nombre' variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <TextField label='Apellido' variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <TextField label='Dirección' variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <TextField label='Dirección2' variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <TextField label='Código Postal' variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <TextField label='Ciudad' variant="standard" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: 2, mb: 4 }}>
            <FormControl fullWidth>
                <Select variant='standard' label='pais' value='1'>
                    <MenuItem value={1}>Mexico</MenuItem>
                    <MenuItem value={2}>Costa rica</MenuItem>
                    <MenuItem value={3}>El salvador</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} >
            <TextField fullWidth label='Telefono' variant="standard" />
        </Grid>
      </Grid>
        <Box sx={{ mt:5 }} display="flex" justifyContent="center">
            <Button color="secondary" className="circular-btn" size="large">
                Revisar Pedido
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default AddressPage
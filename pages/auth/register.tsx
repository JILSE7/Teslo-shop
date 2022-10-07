import NextLink from 'next/link'; 
import AuthLayout from '@/components/layout/AuthLayout'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const RegisterPage = () => {
  return (
    <AuthLayout title='Rgistrarse'>
        <Box sx={{ width: 350, padding:'10px 20px' }}>
            {/* Grid */}
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant='h1' component='h1'>Creemos tu cuenta</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Nombre' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Correo' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Password' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" className='circular-btn' fullWidth>Ingresar</Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href='/auth/login' passHref>
                        <Link underline='always'>
                        ¿Ya tienes cuenta?</Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ShopLayout } from '../components'

const Custom404 = () => {
  return (
    <ShopLayout title='Page not found' pageDescription='No hay nada que mostrar aqui'>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          height={'calc(100vh - 200px)'}
          sx={{ flexDirection: {xs: 'column', sm: 'row'} }}
          >
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
                404 | 
            </Typography>
            <Typography marginLeft={2}>
                No encontramos nada por aqui :c
            </Typography>
        </Box>
    </ShopLayout>
  )
}

export default Custom404
import React, { FC, useId } from 'react';
import NextLink from 'next/link';
import { Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { initialData } from 'database/products';
import { Box } from '@mui/system';
import { ItemCounter } from '../ui';


interface IProps {}

const productInCar = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];


interface IProps {
  editable?: boolean;
}

export const CardList:FC<IProps> = ({ editable = false }) => {
  const reactId = useId();
  return (
    <>
        {
            productInCar.map(product => (
                <Grid container spacing={2} key={reactId + product.title} sx={{ mb:1 }}>
                  <Grid item xs={3}>
                    <NextLink href='/product/slug' passHref>
                      <Link>
                        <CardActionArea>
                            <CardMedia image={`/products/${product.images[0]}`} component="img" />
                        </CardActionArea>
                      </Link>
                    </NextLink>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" flexDirection="column">
                      <Typography variant='body1'><strong>{product.title}</strong></Typography>
                      <Typography variant='body2'>Talla: <strong>M</strong></Typography>
                      {/*CONDICIONAL*/}
                      {
                        editable ? (
                          <ItemCounter/>
                        ) : (
                          <Typography variant='body2'>Cantidad: <strong>3</strong></Typography>
                        )
                      }
                    </Box>
                  </Grid>
                  <Grid item xs={3} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
                    {
                      editable && (
                        <Button variant='text' color='secondary'>
                          Remover
                        </Button>
                      )
                    }
                  </Grid>
                </Grid>
            ))
        }
    </>
  )
}

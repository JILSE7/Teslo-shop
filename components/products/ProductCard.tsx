import { FC, useMemo, useState } from 'react'
import NextLink from 'next/link'
import { Grid, CardActionArea, CardMedia, Card, Typography, Link } from '@mui/material';
import { IProduct } from 'interfaces';
import { Box } from '@mui/system';


interface IProps {
    product: IProduct
}
export const ProductCard:FC<IProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const productImage = useMemo(() => {
    return `products/${ isHovered ? product.images[1] : product.images[0] }`
  }, [isHovered, product.images])
  return (
    <Grid item 
      xs={8} 
      sm={4}
      className="fadeIn"
    >
        <Card
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <NextLink href={`/product/slug`} passHref prefetch={false}>
            <Link>
            <CardActionArea>
                <CardMedia
                component='img' 
                image={productImage}
                alt={product.title}
                />
            </CardActionArea>
            </Link>
        </NextLink>
        </Card>
        <Box sx={{ mt: 1 }} className="fadeIn">
            <Typography fontWeight={700}>{product.title}</Typography>
            <Typography fontWeight={500}>${product.price}</Typography>
        </Box>
    </Grid>
  )
}
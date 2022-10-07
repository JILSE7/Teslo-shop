import { Grid } from "@mui/material"
import { IProduct } from "interfaces"
import { FC, useId } from "react"
import { ProductCard } from "./ProductCard";

interface IProps {
    products: IProduct[];
}

export const ProductList:FC<IProps> = ({ products }) => {
  const reactId = useId();
  return (
    <Grid container spacing={6} display="flex" justifyContent="center">
        {
            products.map(product => (
                <ProductCard 
                  product={product} 
                  key={reactId + product.slug}
                />
            ))
        }
    </Grid>
  )
}
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useId } from 'react';
import { ISize } from '../../interfaces/Products';

interface IProps {
    selectedSize?: ISize;
    sizes: ISize[];
}

export const SizeSelector:FC<IProps> = ({ selectedSize, sizes }) => {
  const reactId = useId();
  return (
    <Box sx={{ my: 2, width: '100%' }} display="flex" alignItems="flex-start">
        <Typography variant='subtitle1' component="h2">Talla:</Typography>
        <Box sx={{ width: '90%' }} display="flex" justifyContent="space-around" alignItems="center">
            {
                sizes.map(size => (
                    <Button
                    key={reactId + size}
                    size="small"
                    color={selectedSize === size ? 'primary' : 'info'}
                    >
                        { size }
                    </Button>
                ))
            }
        </Box>
    </Box>
  )
}

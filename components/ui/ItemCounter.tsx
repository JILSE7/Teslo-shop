import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FC } from "react"


interface IProps {
  currentValue: number;
  updateQuantity : (action: '+'|'-') => void;
  maxValue: number;
}


export const ItemCounter:FC<IProps> = ({ currentValue, updateQuantity, maxValue }) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant='subtitle1' component="h2">Cantidad  </Typography>
      <Box display="flex" alignItems="center">
        
        <IconButton onClick={() => updateQuantity('-')} disabled={currentValue === 1}>
          <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{ width: 40, textAlign: 'center' }}>{currentValue}</Typography>
        <IconButton onClick={() => updateQuantity('+')} disabled={currentValue >= maxValue}>
          <AddCircleOutline/>
        </IconButton>
      </Box>
    </Box>
  )
}
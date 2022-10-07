import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FC } from "react"


interface IProps {

}


export const ItemCounter:FC<IProps> = () => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant='subtitle1' component="h2">Cantidad  </Typography>
      <Box display="flex" alignItems="center">
        <IconButton>
          <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{ width: 40, textAlign: 'center' }}>1</Typography>
        <IconButton>
          <AddCircleOutline/>
        </IconButton>
      </Box>
    </Box>
  )
}
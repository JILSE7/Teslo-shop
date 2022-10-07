import NextLink from 'next/link';
import { Grid, Link, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layout/ShopLayout';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { CreditCardOffOutlined, CreditScoreOutlined, RowingOutlined } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const columns:GridColDef[] = [
    {
        field: 'id', headerName: 'ID', width: 100
    },
    {
        field: 'paid', headerName: 'Pago', width: 50, description:'Orden pagada', renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid ? 
                <CreditScoreOutlined color='success'/>
                :
                <CreditCardOffOutlined color='error'/>
            );
        }
    },
    {
        field: 'fullname', headerName: 'Nombre Completo', width: 300
    },
    {
        field: 'order', headerName: 'Ver orden', width: 300,renderCell: (params: GridRenderCellParams) => (<NextLink href={`/orders/${params.row.id}`} passHref><Link underline='always'><ArrowForwardIcon/></Link></NextLink>)
    },

    
]


const rows = [
    { id: 1, paid: true, fullname: 'Fernando Mandujano'},
    { id: 2, paid: true, fullname: 'Fernando pedro'},
    { id: 3, paid: true, fullname: 'Fernando ramon'},
    { id: 4, paid: true, fullname: 'said Mandujano'},
    { id: 5, paid: true, fullname: 'pepe consuel'},
    { id: 6, paid: true, fullname: 'pepe lio'},
    { id: 7, paid: true, fullname: 'pepe lopoe'},
    { id: 8, paid: true, fullname: 'Fernando peoe'},
    { id: 9, paid: true, fullname: 'Fernando jhd'},
    { id: 10, paid: false, fullname: 'Fernando js'},
    { id: 11, paid: false, fullname: 'Fernando manuel'}
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Historial de ordenes' pageDescription='Historial de ordenes del cliente' >
      <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
            <DataGrid
              rows={ rows }
              columns={ columns }
              pageSize={ 10 }
              rowsPerPageOptions={ [10] }
            />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
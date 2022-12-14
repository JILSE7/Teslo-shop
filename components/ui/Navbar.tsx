import NextLink from 'next/link';
import { AppBar, Badge, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center">
                <Typography variant='h6'>
                    Teslo |
                </Typography>
                <Typography sx={{ ml: 0.5 }}>
                    Shop
                </Typography>
            </Link>
          </NextLink>
          <Box sx={{ flex: 1 }}/>
          <Box sx={{ display: { xs: 'none', sm: 'block'  } }}>
            <NextLink href='/category/men'>
                <Link>
                    <Button>
                        Hombres
                    </Button>
                </Link>
            </NextLink>
            <NextLink href='/category/women'>
                <Link>
                    <Button>
                        Mujeres
                    </Button>
                </Link>
            </NextLink>
            <NextLink href='/category/kids'>
                <Link>
                    <Button>
                        Niños
                    </Button>
                </Link>
            </NextLink>
          </Box>
          <Box sx={{ flex: 1 }}/>
          <IconButton>
            <SearchOutlined/>
          </IconButton>

          <NextLink href="/cart/" passHref>
            <Link>
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCartOutlined/>
                </Badge>
              </IconButton>
            </Link>
          </NextLink>

          <Button>
            Menu
          </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
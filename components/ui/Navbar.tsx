import NextLink from 'next/link';
import { AppBar, Badge, Button, IconButton, Link, Toolbar, Typography, Input, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import { SearchOutlined, ShoppingCartOutlined, CloseOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { UiContext } from '../../context/ui/UiContext';

const Navbar = () => {
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);
  const currentPath = router.asPath.split('/').at(-1);

  const [searchTerm, setsearchTerm] = useState('');
  const [isSearchVisible, setisSearchVisible] = useState(false);

  const toNavigate = (url: string) => {
    if (!isSearchVisible) {
      toggleSideMenu();
    }
    router.replace(url);
  }

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    toNavigate(`/search/${searchTerm}`);
  }
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
          <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block'  } }}>
            <NextLink href='/category/men'>
                <Link>
                    <Button color={currentPath === 'men' ? 'primary' : 'info'}>
                        Hombres
                    </Button>
                </Link>
            </NextLink>
            <NextLink href='/category/women'>
                <Link>
                <Button color={currentPath === 'women' ? 'primary' : 'info'}>
                        Mujeres
                    </Button>
                </Link>
            </NextLink>
            <NextLink href='/category/kids'>
                <Link>
                    <Button color={currentPath === 'kids' ? 'primary' : 'info'}>
                        Niños
                    </Button>
                </Link>
            </NextLink>
          </Box>
          <Box sx={{ flex: 1 }}/>

          {/* Pantallas grandes */}
          {/* <IconButton>
            <SearchOutlined/>
          </IconButton> */}
          {
            isSearchVisible ? 
            (
              <Input
                autoFocus
                className='fadeIn'
                type='text'
                placeholder="Buscar..."
                value={searchTerm}
                onChange={e => setsearchTerm(e.target.value)}
                // onBlur={() => setisSearchVisible(false)}
                onKeyPress={e => e.key === 'Enter' && onSearchTerm()}
                sx={{ display: { xs: "none", sm: "flex" } }}
                endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                        onClick={() => setisSearchVisible(false)}
                      >
                        <CloseOutlined />
                      </IconButton>
                  </InputAdornment>
                }
              />
            )               :
            (
              <IconButton onClick={() => setisSearchVisible(true)} sx={{ display: { xs: "none", sm: "flex" } }}>
                <SearchOutlined/>
              </IconButton>
            )
          }
          {/* Pantallas pequeñas */}
          <IconButton 
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={toggleSideMenu}
          >
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

          <Button onClick={toggleSideMenu}>
            Menu
          </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
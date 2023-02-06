import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import logo from '../../Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import './style.css';

const drawerWidth = 240;
const navItems = [
{
    text: 'Home',
    path: '/'
}, 
{
    text: 'Our Menu',
    path: '/ourmenu'
}, 
{
  text: 'Daily Special',
  path: '/dailyspecial'
}, 
{
    text: 'Locations',
    path: '/ourlocation'
}, 
{
    text: 'About Us',
    path: '/aboutus'
}];

function DrawerAppBar(props) {
  const {menu, selectid, setSelectid, windows } = props;
  const [mobileOpen, setMobileOpen] = useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

const selectedMenu = (id) => {
    setSelectid(id);
  };


  useEffect ( () => {
    switch (window.location.pathname) {
      case "/":
       return setSelectid('Home');
       case "/ourmenu":
        return setSelectid('Our Menu');
      case "/dailyspecial":
          return setSelectid('Daily Special');
       case "/ourlocation":
        return setSelectid('Locations');
       case "/aboutus":
        return setSelectid('About Us');
      default:
        return setSelectid('Home');
    }
  }, [selectid, setSelectid, menu]);


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Link onClick={ () => selectedMenu ('Home') } to='/' style={{textDecoration: 'none'}}>
      <img src={logo} alt='logo' width={80}></img>
      </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link onClick={ () => selectedMenu (item.text) } to={item.path} style={{textDecoration: 'none'}}>
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText sx={{color:'#fff'}} primary={item.text} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = windows !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: '#fff', color: '#000', py: 0.5, boxShadow:'0px 2px 10px #f1f1f1'}}>
      <Container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'#DB241E' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginTop: 1 }}
          >
          <Link onClick={ () => selectedMenu ('Home') } to='/' style={{textDecoration: 'none'}}>
            <img src={logo} alt='logo' width={50}></img>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 8 }}>
            {navItems.map((item) => (
            <Link onClick={ () => selectedMenu (item.text) } to={item.path} style={{textDecoration: 'none'}}>
              <ListItem className={ selectid === item.text ? 'active' : ''} key={item.text} sx={{ color: '#000', textTransform: 'none', letterSpacing: 1.5, px: 0 }}>
                {item.text}
              </ListItem>
              </Link>
            ))}
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background:'#DB241E' }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
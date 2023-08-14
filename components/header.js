import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import CottageIcon from '@mui/icons-material/Cottage';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';


export default function ButtonAppBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const router = useRouter();

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={styles.List}>
        {['Home', 'About', 'Projects'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <a href={text === 'Home' ? '/' : `/${text}`} style={{color: 'white', textDecoration: 'none'}}>
            <ListItemButton>
              <ListItemIcon>
                {index % 4 === 0 ? <CottageIcon style={{color: 'white'}} /> :
                 index % 4 === 1 ?  <PersonSearchIcon style={{color: 'white' }} />:
                 index % 4 === 2 ?  <SelectAllIcon style={{color: 'white' }} />:
                 <ContactPhoneIcon style={{color: 'white' }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>

    </Box>
  );
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#212529'}}>
        <Toolbar>
        <div>
            {[''].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon style={{color: 'white' }}/> {anchor}
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    PaperProps={{ style: { backgroundColor: '#212529' } }} 
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
        </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {router.pathname === '/' ? 'Home' : router.pathname.replace('/', '')}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
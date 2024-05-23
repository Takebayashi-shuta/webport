import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ color: "white", backgroundColor:"rgba(123, 63, 0, 0.7)"}}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/" sx={{ '&:hover, &:focus': { backgroundColor: 'white', color: "black" } }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/about" sx={{ '&:hover, &:focus': { backgroundColor: 'white', color: "black" } }}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/projects" sx={{ '&:hover, &:focus': { backgroundColor: 'white', color: "black" } }}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/contact" sx={{ '&:hover, &:focus': { backgroundColor: 'white', color: "black" } }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Box sx={{ margin: 2 }}>
        <AppBar position="static" sx={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(123, 63, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
          <Toolbar sx={{ minHeight: '64px', minWidth: '64px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handlePopoverOpen}
              sx={{ width: '56px', height: '56px' }} // アイコンボタンのサイズを調整
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {drawerList()}
      </Popover>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 150,
            padding: 0,
            margin: 0,
            borderRadius: '16px',
          },
          style: {
            backgroundColor: 'rgba(123, 63, 0, 1)',
            height: 'auto',
          },
        }}
      >
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default Header;

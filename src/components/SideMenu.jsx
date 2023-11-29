import * as React from 'react';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';

export default function SideMenu() {
  // スライドメニューのState
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // スライドメニューボタン押下時
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // メニュー選択時
  const handleClose = () => {
    setAnchorEl(null);
    setOpen1(false);
    setOpen2(false);
  };

  // サブリストのState
  const [open1, setOpen1] = React.useState(false);
  // リストの見出しクリック時
  const listClick1 = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);
  const listClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        aria-controls={open ? 'long-menu' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              メニュー
            </ListSubheader>
          }
        >
          <ListItemButton onClick={listClick1}>
            <ListItemIcon>
              {open1 ? <ExpandMore /> : <ChevronRightIcon />} 
            </ListItemIcon>
            <ListItemText primary="Reactの前に！モダンJavaScript" /> 
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClose}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={listClick2}>
            <ListItemIcon>
              {open1 ? <ExpandMore /> : <ChevronRightIcon />} 
            </ListItemIcon>
            <ListItemText primary="Reactの前に！モダンJavaScript" /> 
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handleClose}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        {/* <ListItemContents func={handleClose} /> */}
      </Drawer>
    </>
  );
};
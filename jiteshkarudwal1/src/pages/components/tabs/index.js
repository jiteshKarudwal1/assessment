import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const buttons = [
    <Button key="one">Draft</Button>,
    <Button key="two">Assigned</Button>,
    <Button key="three">Tagged</Button>,
  ];

export default function ProminentAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: 'white',color: 'black'}}>
        <StyledToolbar>
          <div style={{ display: 'flex', marginRight: 20}}>
          
            {buttons.map(item=>(
                item
            ))}
          
          </div>
          <div>
            <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
            </IconButton>
            <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
            >
                <MoreIcon />
            </IconButton>
          </div>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

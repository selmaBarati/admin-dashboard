import React from 'react';
import {Box, IconButton , useTheme} from "@mui/material";
import { useContext } from 'react';
import { ColorModeContext , tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from "@mui/icons-material/Search";



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box 
      display="flex" 
      backgroundColor={colors.primary[400]} 
      borderRadius="3px"
      >
        <InputBase sx={{m:"4px" , flex :1 , paddingRight: "4px"}} placeholder="جستجو"/>
       <IconButton type="button" sx={{p : 1}}>
        <SearchIcon/>
       </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ?(
          <DarkModeOutlinedIcon/>
          ):(
          <LightModeOutlinedIcon/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar;

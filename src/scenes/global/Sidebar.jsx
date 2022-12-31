import React,{useState} from 'react';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {Box , IconButton , Typography , useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const Item = ({title , to , icon , selected , setSelected})=>{
      const theme = useTheme();
      const colors  = tokens(theme.palette.mode);

      return(
        <div style={{display:"flex" , justifyContent:"space-between" , width :"100%"}}>
          <MenuItem 
          active={selected === title }
          style={{color: colors.grey[100], direction : "rtl"}}
          onClick={()=>setSelected(title)} 
          icon={icon}>
          <Typography >{title}</Typography> 
          <Link to={to}/>
        </MenuItem>
        </div>
        
      )
}


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected , setSelected] = useState("Dashboard");
  return (
    <Box  className='persian_font'
    sx={{
      "& .pro-sidebar-inner" : {
        background: `${colors.primary[400]} !important`,
        direction : 'rtl'
      },
      "& .pro-icon-wrapper" : {
        backgroundColor : `transparent !important`,
        direction : 'rtl'
      },
      "& .pro-inner-item" : {
        padding : "5px 35px 5px 20px !important",
        direction : 'rtl'
      },
      "& .pro-inner-item:hover": {
        color : "#868dfb !important",

      },
      "& .pro-menu-item.active" : {
        color : "#6870fa !important",
        direction : 'rtl'
      },
      direction : "rtl",
      
    }}
    >
    <ProSidebar collapsed={isCollapsed} rtl={true}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon className='open' /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box className='hidden'
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ادمین
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" className='hidden'>
              <Box display="flex"
               justifyContent="center"
              alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/selma.jpeg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                 شرکت ایده پردازان بکر هونامیک
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  پنل ادمین
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} className="box_style">
            <Item
              title="داشبورد"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              اطلاعات
            </Typography>
            <Item
              title="مدیریت گروه"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="اطلاعات کاربران"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="فاکتورهای باقی مانده "
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              صفحات
            </Typography>
            <Item
              title="فرم پروفایل"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="تقویم"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="تقویم"
              to="/shamsi-calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="صفحه پرسش و پاسخ"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              نمودار ها
            </Typography>
            <Item
              title="نمودار میله ای"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="نمودار دایره ای"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=" نمودار خطی"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="نقشه جفرافیایی"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar;


{/* <Box paddingLeft={isCollapsed ? undefined : "10%"}>
<Item 
  title="Dashboard"
  to="/"
  icon={<HomeOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Manage Team"
  to="/team"
  icon={<PeopleOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Contacts Information"
  to="/contacts"
  icon={<ContactsOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Invoices Balances"
  to="/invoices"
  icon={<ReceiptOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Profile Form"
  to="/form"
  icon={<PersonOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Calendar"
  to="/calendar"
  icon={<CalendarTodayOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="FAQ Page"
  to="/faq"
  icon={<HelpOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Bar Chart"
  to="/bar"
  icon={<BarChartOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Pie Chart"
  to="/pie"
  icon={<PieChartOutlineOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Line Chart"
  to="/line"
  icon={<TimelineOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
<Item 
  title="Geography Chart"
  to="/geography"
  icon={<MapOutlinedIcon/>}
  selected={selected}
  setSelected={setSelected}
/>
</Box> */}
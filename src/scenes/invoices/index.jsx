import Header from "../../components/Header";
import { Box , useTheme , Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
// import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
// import  LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
// import  SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";



const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field : "id" , headerName : "آیدی"
        },
        {field : "name" , 
         headerName : "اسم" ,
         flex : 1 ,
         cellClassName : "name-column--cell "
        },
        {field : "phone" , 
         headerName : "شماره تلفن " ,
         flex : 1 , 
        },
        {field : "email" , 
         headerName : "ادرس ایمیل" ,
         flex : 1 , 
        },
        {field : "cost" ,
         headerName : "مبلغ",
         flex: 1,
         renderCell : (params) =>{
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
         }
        },
        {field : "date" ,
         headerName : "تاریخ",
         flex: 1,
        }
        
    ]

  return (
   <Box m="20px">
    <Header title="صورت حساب ها" subtitle="لیست صورت حساب ها"/>
    <Box
     m="40px 0 0 0"
     height="75vh"
     sx={{
      "& .MuiDataGrid-root" : {
        border:"none"
      },
      "& .MuiDataGrid-cell" : {
        borderBottom : "none"
      },
      "& .name-column--cell" : {
        color : colors.greenAccent[300]
      },
      "& .MuiDataGrid-columnHeaders" : {
        backgroundColor : colors.blueAccent[700],
        borderBottom: "none"
      },
      "& .MuiDataGrid-vertualScroller" : {
        backgroundColor : colors.primary[400]
      },
      "& .MuiDataGrid-footerContainer" : {
        borderTop : "none",
        backgroundColor : colors.blueAccent[700]
      },
      "& .MuiCheckbox-root" : {
        color : `${colors.greenAccent[200] } !important`
      }
     }}
    >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
    </Box>
   </Box>
  )
}

export default Invoices;

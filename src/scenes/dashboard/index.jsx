import React from 'react'
import Header from '../../components/Header'
import { Box , useTheme ,Typography , IconButton, Button} from "@mui/material";
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import { DownloadOutlined } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { PointOfSale } from '@mui/icons-material';
import { PersonAdd } from '@mui/icons-material';
import { Traffic } from '@mui/icons-material';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import GeographyChart from '../../components/GeographyChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';


const Dashboard = () => {
  const theme= useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" >
      <Header title="داشبورد" subtitle="پنل مدیریت"/>
      
      <Box>
        <Button
         sx={{
          backgroundColor : colors.blueAccent[700], 
          color : colors.grey[100] ,
          fontSize : "14px" ,
          fontWeight : "bold",
          padding :"10px 20px"
        }}
        >
        <DownloadOutlined sx={{mr: "10px"}}/>
        دانلود گزارش ها
        </Button>
        </Box>
        </Box>
        {/* GRID & CHARTS */}
        <Box
        className='display-grid'
        >
          {/* ROW 1 */}
          <Box
          className='row_1'
          backgroundColor={colors.primary[400]}
          >
            <StatBox
             title="431,225"
             subtitle="کالاهای فروخته شده"
             progress="0.5"
             increase="+21%"
             icon={
              <Email
              sx={{
                color : colors.greenAccent[600],
                fontSize : "26px"
              }}
              />
             }
            />
          </Box>
          <Box
          backgroundColor={colors.primary[400]}
          className='row_1'
          >
            <StatBox
             title="12,361"
             subtitle="ایمیل های فرستاده شده"
             progress="0.75"
             increase="+14%"
             icon={
              <PointOfSale
              sx={{
                color : colors.greenAccent[600],
                fontSize : "26px"
              }}
              />
             }
            />
          </Box>
          <Box
          backgroundColor={colors.primary[400]}
          className='row_1'
          >
            <StatBox
             title="32,441"
             subtitle="کابر جدید"
             progress="0.30"
             increase="+14%"
             icon={
              <PersonAdd
              sx={{
                color : colors.greenAccent[600],
                fontSize : "26px"
              }}
              />
             }
            />
          </Box>
          <Box
          backgroundColor={colors.primary[400]}
          className='row_1'
          >
            <StatBox
             title="1,325,134"
             subtitle="ترافیک ورودی"
             progress="0.80"
             increase="+43%"
             icon={
              <Traffic
              sx={{
                color : colors.greenAccent[600],
                fontSize : "26px"
              }}
              />
             }
            />
          </Box>
          {/* ROW 2 */}
          <Box
            className='row_2'
            backgroundColor={colors.primary[400]}
          >
          <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          >
            <Box>
              <Typography
              variant="h5"
              fontWeght="600"
              color={colors.grey[100]}
              >
               درآمد ایجاد شده
              </Typography>
              <Typography
              variant="h3"
              fontWeght="bold"
              color={colors.greenAccent[500]}
              >
                59,342,32 ریال 
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                sx={{
                  fontSize:"26px",
                  color: colors.greenAccent[500]
                }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true}/>
          </Box>
          </Box>
          {/* TRANSACTIONS */}
          <Box 
          className='transaction-table'
          backgroundColor={colors.primary[400]}
          >
             <Box
             display="flex"
             justifyContent="space-between"
             alignItems="center"
             borderBottom={`4px solid ${colors.primary[500]}`}
             color={colors.grey[100]}
             padding="15px"
             >
               <Typography
               color={colors.grey[100]}
               variant="h5"
               fontWeight="600"
               >
                تراکنش های اخیر
               </Typography>
             </Box>
             {mockTransactions.map((transaction,i)=>(
              <Box
               key={`${transaction.txId}-${i}`}
               display="flex"
               justifyContent="space-between"
               alignItems="center"
               borderBottom={`4px solid ${colors.primary[500]}`}
               padding="15px"
              >
                <Box>
                <Typography
               color={colors.greenAccent[500]}
               variant="h5"
               fontWeight="600"
               >
                {transaction.txId}
               </Typography>
                <Typography
               color={colors.grey[100]}
               >
                {transaction.user}
               </Typography>
                </Box>
                <Box
                color={colors.grey[100]}
                >{transaction.date}
                </Box>
                <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                >
                  ${transaction.cost}
                </Box>
              </Box>
             ))}
          </Box>
          {/* ROW 3 */}
          <Box
          className='row_3'
          backgroundColor={colors.primary[400]}
          >
            <Typography
             variant="h5" 
             fontWeight="600"
             >
               پویش
            </Typography>
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            >
              <ProgressCircle size="125"/>
              <Typography 
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{
                mt:"15px"
              }}
              >
                 48.500 ریال درآمد باقی مانده  
              </Typography>
              <Typography
             >
               شامل هزینه ها و هزینه ی اضافی میشود .
            </Typography>
            </Box>
          </Box>
          {/* ROW 4 */}
          <Box
          className="row_4"
          backgroundColor={colors.primary[400]}
          >
            <Typography
             variant="h5" 
             fontWeight="600"
             sx={{p: "30px 30px 0 30px"}}
             >
               میزان فروش
            </Typography>
            <Box
            height="250px"
            mt="-20px"
            >
              <BarChart isDashboard={true}/>
            </Box>
          </Box>
          {/* LAST ROW */}
          <Box
          className='last-row'
          backgroundColor={colors.primary[400]}
          >
            <Typography
             variant="h5" 
             fontWeight="600"
             sx={{mb: "15px"}}
             >
                نقشه جغرافیایی
            </Typography>
            <Box
            height="200px"
            >
              <GeographyChart isDashboard={true}/>
            </Box>
          </Box>
          {/*  */}
        </Box>
    </Box>
  )
}

export default Dashboard

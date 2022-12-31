import { Box ,useTheme ,Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/material/ExpandMoreIcon";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="پرسش و پاسخ" subtitle="سوالات خودرا بامادر میان بگذارید ." />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        سوال یک
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        آیا از سرعت پاسخ گویی راضی هستید ؟
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        سوال دو
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       آیا از نحوه ی برخورد مسئولین شرکت و کارمندان راضی هستید ؟
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        سوال مورد علاقه
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       میزان رضایت شما از خدمات و پشتیبانی چقدر است ؟
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                  سوال چهار  
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        کیفیت خدمات ارائه شده توسط شرکت را چگونه ارزیابی میکنید ؟
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        سوال پنج
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        بهترین راه برای خدمات از نظر شما چیست ؟
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                      سخن آخر 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       از همراهی شما سپاس گزاریم .
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}


export default FAQ;
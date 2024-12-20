import { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useMediaQuery,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                py: 8,
            }}
        >
            <Container>
                <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: '#EF9E48', mb: 1, textAlign: "center" }}
                >
                    Frequent Question
                </Typography>
                <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ fontWeight: 'bold', mb: 6, color: "#0F2137", textAlign: "center" }}
                >
                    Do you have any question
                </Typography>


                {[
                    {
                        question: "How to contact with riders emergency?",
                        answer: "",
                    },
                    {
                        question: "App installation failed, how to update system information?",
                        answer: "",
                    },
                    {
                        question: "Website response taking time, how to improve?",
                        answer:
                            "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information..",
                    },
                    {
                        question: "New update fixed all bug and issues",
                        answer: "",
                    },
                ].map((item, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        sx={{
                            mb: 2,
                            borderBottom: "1px solid #e0e0e0",
                            boxShadow: "none",
                            "&:before": {
                                display: "none",
                            },
                            "&.Mui-expanded": {
                                margin: 0,
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                fontWeight: "500",
                                fontSize: "1.2rem",
                                color: "#0F2137",
                                "&.Mui-expanded": {
                                    color: "#0F2137",
                                },
                            }}
                        >
                            {item.question}
                        </AccordionSummary>
                        {item.answer && (
                            <AccordionDetails sx={{ color: "#343D48" }}>
                                <Typography variant="body1">{item.answer}</Typography>
                            </AccordionDetails>
                        )}
                    </Accordion>
                ))}

                <Box sx={{ py: 10, textAlign: "center" }}>
                    <Typography variant="h4" sx={{ color: "#02073E", marginBottom: 3, fontWeight: 'bold' }}>
                        Ready to learn design
                        <br />with Nia Matos
                    </Typography>

                    <Button size="small" sx={{ background: "#FCF2E8", color: "#EF9E48", p: 2, fontWeight: "bold", fontSize: "0.8rem" }}>
                        Start Learning Today
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;

import { } from "react";
import { Grid, Typography, Container, Link } from "@mui/material";
const Footer = () => {
    return (


        <Container sx={{ py: 10 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3} textAlign='left'>
                    <Typography variant="h6" gutterBottom sx={{ color: "#0F2137" }}>

                        About Us
                    </Typography>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Support Center
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Customer Support
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        About Us
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Copyright
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Popular Campaign
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} textAlign='left'>

                    <Typography variant="h6" gutterBottom sx={{ color: "#0F2137" }}>

                        Our Information
                    </Typography>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Return Policy
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Privacy Policy
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Terms & Conditions
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Site Map
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Store Hours
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} textAlign='left'>

                    <Typography variant="h6" gutterBottom sx={{ color: "#0F2137" }}>

                        My Account
                    </Typography>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Press Inquiries
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Social Media
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Directories
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Images & B-roll
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Permissions
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3} textAlign='left'>

                    <Typography variant="h6" gutterBottom sx={{ color: "#0F2137" }}>

                        Policy
                    </Typography>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Application Security
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Software Principles
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Unwanted Software Policy
                    </Link>
                    <Link gutterBottom href="#" color="inherit" underline="hover" display="block">
                        Responsible Supply Chain
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Footer;

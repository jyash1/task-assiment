import { Grid, Typography, Card } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import imageurl from '../../services/images';

const StepCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: 'transparent',
    height: '100%',
    maxHeight: 500,
    border: "none !important",
    boxShadow: "none !important",
    width: '100%',
}));

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Set disbursement instructions',
            description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
            image: imageurl.arrow,
        },
        {
            number: '02',
            title: 'Assembly retrieves funds from your account',
            description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
            image: imageurl.arrow2,
        },
        {
            number: '03',
            title: 'Assembly initiates disbursement',
            description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
            image: imageurl.arrow,
        },
        {
            number: '04',
            title: 'Customer receives funds payment',
            description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
            image: null,
        },
    ];

    return (
        <Box sx={{ backgroundColor: '#f9fbfc' }}>
            <Container sx={{ py: 10, px: 2, textAlign: 'center' }}>
                <Typography variant="body1" sx={{ color: '#EF9E48', mb: 1 }}>
                    WHAT&apos;S THE FUNCTION
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, color: "#0F2137" }}>
                    Let’s see how it works
                </Typography>

                <Grid container spacing={4} alignItems="center">
                    {steps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <StepCard>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            p: 1,
                                            mb: 1,
                                            color: '#0F2137',
                                            textAlign: 'left',
                                            background: "#fff",
                                            borderRadius: "50%",
                                        }}
                                    >
                                        {step.number}
                                    </Typography>
                                    {step.image && (
                                        <Box
                                            component="img"
                                            src={step.image}
                                            alt={`Step ${step.number} Image`}
                                            sx={{ width: "100%" }}
                                        />
                                    )}
                                </Box>
                                <Typography variant="body1" sx={{ fontWeight: '500', mb: 1, textAlign: 'left', color: "#0F2137" }}>
                                    {step.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', textAlign: 'left' }}>
                                    {step.description}
                                </Typography>
                            </StepCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default HowItWorks;

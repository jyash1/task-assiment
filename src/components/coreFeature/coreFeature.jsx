import { } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

export default function CoreFeaturesSection() {
    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={20} alignItems="center">
                <Grid item xs={12} md={7}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    padding: "40px 0",
                                    textAlign: "center",
                                    backgroundColor: "fff",
                                    boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
                                    borderRadius: 2,
                                    mt: 8,
                                    height: "100%",
                                    maxHeight: 400,
                                    display: 'flex',
                                    flexDirection: " column",
                                    justifyContent: "center"
                                }}
                            >
                                <Typography variant="h2" sx={{ color: "#EF9E48", fontWeight: "bold" }}>
                                    80K+
                                </Typography>
                                <Typography variant="body2" sx={{ color: "grey", mt: 1 }}>
                                    We have more than students
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    padding: "40px 0",
                                    textAlign: "center",
                                    backgroundColor: "fff",
                                    borderRadius: 2,
                                    boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
                                    height: "100%",
                                    maxHeight: 400,
                                    display: 'flex',
                                    flexDirection: " column",
                                    justifyContent: "center"

                                }}
                            >
                                <Typography variant="h2" sx={{ color: "#FF753A", fontWeight: "bold" }}>
                                    150+
                                </Typography>
                                <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                                    Free online tutorials videos available
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    padding: "40px 0",
                                    textAlign: "center",
                                    backgroundColor: "fff",
                                    borderRadius: 2,
                                    mt: 8,
                                    boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
                                    height: "100%",
                                    maxHeight: 400,
                                    display: 'flex',
                                    flexDirection: " column",
                                    justifyContent: "center"

                                }}
                            >
                                <Typography variant="h2" sx={{ color: "#FA578E", fontWeight: "bold" }}>
                                    90+
                                </Typography>
                                <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                                    Daily updated blog post maintain
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    padding: "40px 0",
                                    textAlign: "center",
                                    backgroundColor: "fff",
                                    borderRadius: 2,
                                    boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
                                    height: "100%",
                                    maxHeight: 400,
                                    display: 'flex',
                                    flexDirection: " column",
                                    justifyContent: "center"

                                }}
                            >
                                <Typography variant="h2" sx={{ color: "#E682FF", fontWeight: "bold" }}>
                                    & 3M
                                </Typography>
                                <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
                                    Job posted everydays with qualification
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Typography
                        variant="body2"
                        sx={{ color: "#EF9E48", textTransform: "uppercase", fontWeight: 600 }}
                    >
                        Core Features
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, marginTop: 2, marginBottom: 2, color: '#0F2137', }}
                    >
                        Smart Jackpots that you may love this anytime & anywhere
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#02073E", marginBottom: 3, lineHeight: "40px", }}>
                        Get your tests delivered at let home collect sample from the victory
                        of the managements that supplies best design system guidelines ever.
                        Get your tests delivered at let home collect sample.
                    </Typography>
                    <Button size="small" sx={{ background: "#FCF2E8", color: "#EF9E48", p: 2, fontWeight: "bold", fontSize: "0.8rem" }}>
                        Explore details
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

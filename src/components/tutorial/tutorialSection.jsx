import { } from "react";
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Rating,
    Container,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";

const tutorials = [
    {
        title: "How to work with prototype design with Adobe XD featuring tools",
        rating: 5.0,
        reviews: 392,
        students: "2,538 students watched",
        image: "/public/assets/images/tut-1.svg",
    },
    {
        title:
            "Create multiple artboards by using Figma prototyping tools development",
        rating: 4.5,
        reviews: 524,
        students: "3,522 students watched",
        image: "/public/assets/images/tut-2.svg",
    },
    {
        title:
            "Convert your web layout theming easily with Sketch Zeplin extension",
        rating: 5.0,
        reviews: 392,
        students: "1,037 students watched",
        image: "/public/assets/images/tut-3.svg",
    },
];

export default function TutorialSection() {
    return (
        <Container sx={{ py: 8 }}>
            <Typography
                variant="body1"
                sx={{ textAlign: "center", marginBottom: 1, color: "#EF9E48" }}
            >
                Quality features
            </Typography>
            <Typography
                variant="h5"
                sx={{
                    textAlign: "center",
                    marginBottom: 6,
                    fontWeight: 700,
                    color: "#0F2137",
                }}
            >
                Tutorials that people love most
            </Typography>
            <Grid container spacing={4}>
                {tutorials.map((tutorial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={tutorial.image}
                                alt={tutorial.title}
                            />
                            <PlayCircleOutlineIcon
                                fontSize="large"
                                sx={{
                                    color: "#000",
                                    background: "#fff",
                                    borderRadius: "50%",
                                    top: "50%",
                                    left: "50%",
                                    position: "absolute",
                                    transform: "translate(-50%, -200%)",

                                }}
                            />
                            <CardContent>
                                <Box sx={{ display: "flex", mb: 1 }}>
                                    <Rating
                                        value={tutorial.rating}
                                        precision={0.1}
                                        readOnly
                                        size="small"
                                    />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                        {tutorial.rating} ({tutorial.reviews} reviews)
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: "bold",
                                        textAlign: "left",
                                        color: "#0F2137",
                                    }}
                                >
                                    {tutorial.title}
                                </Typography>
                                <Box sx={{ display: "flex", mt: 1, alignItems: "center" }}>
                                    <VisibilityIcon fontSize="small" />
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#343D48", textAlign: "left", mx: 1 }}
                                    >
                                        {tutorial.students}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

import { } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Rating,
  Container,
} from "@mui/material";
import imageurl from "../../services/images";

const FreeTutorialSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={10} sx={{
        backgroundImage: `url('/public/assets/images/free-tut-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: '650px',
        margin: { md: "auto" },
      }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ position: "relative", }}
        >
          <Card elevation={2} sx={{ borderRadius: 2, position: "relative", zIndex: 10 }}>
            <CardMedia
              component="img"
              height="150"
              src={imageurl.freetut1}
              alt="Tutorial"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                5.0 (392 reviews)
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ marginBottom: 2 }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>
                Convert your web layout theming easily with sketch zeplin
                extension
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 2 }}
              >
                1,037 students watched
              </Typography>
              <Chip
                label="Free tutorial"
                color="success"
                size="small"
                sx={{ fontWeight: "bold" }}
              />
            </CardContent>
          </Card>
          <Card elevation={1} sx={{ borderRadius: 2, position: "absolute", zIndex: 9, bottom: 20, right: 40 }}>
            <CardMedia
              component="img"
              height="100"
              src={imageurl.freetut1}
              alt="Tutorial"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                5.0 (392 reviews)
              </Typography>
              <Rating
                name="read-only"
                value={5}
                readOnly
                sx={{ marginBottom: 2 }}
              />
              <Typography variant="body1" sx={{ mb: 1 }}>
                Create multiple artboard by using figma prototyping tools development
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: 2 }}
              >
                3,532 students watched
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5} sx={{ mx: { md: 10 } }}>
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "#EF9E48", textTransform: "uppercase", fontWeight: 600 }}
            >
              Free tutorial
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, marginTop: 2, marginBottom: 2, color: '#0F2137', }}
            >
              More than thousands of free tutorials uploaded every week
            </Typography>
            <Typography variant="body2" sx={{ color: "#02073E", marginBottom: 3, lineHeight: "40px", }}>
              Get your tests delivered at home. Collect samples from the comfort
              of your home. Supply the best design system guidelines ever.
            </Typography>
            <Button size="small" sx={{ background: "#FCF2E8", color: "#EF9E48", p: 2, fontWeight: "bold", fontSize: "0.8rem" }}>
              Explore details
            </Button>
          </Box>
        </Grid>
      </Grid>


    </Container>
  );
};

export default FreeTutorialSection;

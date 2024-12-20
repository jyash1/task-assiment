import { } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
  Divider,
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const courses = [
  {
    title: "Professional graphic design tutorial full course with exercise file",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    students: "2,538 students watched",
    rating: 5,
    reviews: "392 reviews",
    classes: "7 Video Classes",
    duration: "4 hrs",
    keyPoints: [],
  },
  {
    title: "Become ultimate photoshop expert within 30 days",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    students: "2,538 students watched",
    rating: 5,
    reviews: "392 reviews",
    classes: "7 Video Classes",
    duration: "4 hrs",
    keyPoints: [
      "How to reduce file pixel dimensions without losing quality",
      "How to make logo pixel-perfect with different extensions",
      "Create vector file from rasterize layer styles",
      "Make color gradient with photoshop built-in tools",
    ],
  },
  {
    title: "After effects animation tutorial with photoshop documents",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    students: "2,538 students watched",
    rating: 5,
    reviews: "392 reviews",
    classes: "7 Video Classes",
    duration: "4 hrs",
    keyPoints: [],
  },
  {
    title: "Adobe illustrator vector art design mockup",
    description:
      "Get your tutorials delivered at let home collect sample from the victory of the managements.",
    students: "2,538 students watched",
    rating: 5,
    reviews: "392 reviews",
    classes: "7 Video Classes",
    duration: "4 hrs",
    keyPoints: [],
  },
];

const PopularDesigningCourses = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="body1"
        sx={{ color: "#EF9E48", textTransform: "uppercase", textAlign: "center", mb: 1 }}
      >
        Quality Features
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 5, color: '#0F2137' }}
      >
        Popular Designing Course
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {courses.map((course, index) => (
          <Grid item xs={12} key={index}>
            <Card elevation={1} sx={{ borderRadius: 2, display: { md: "flex" }, border: "none" }}>
              <CardMedia
                sx={{
                  minWidth: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlayArrowIcon sx={{ color: "#EF9E48", fontSize: "3rem", background: '#FCF2E8', borderRadius: '50%' }} />
              </CardMedia>
              <Box sx={{ display: { md: 'flex' }, alignItems: "center", flexGrow: 1 }}>
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: { md: "flex" }, alignItems: "center", gap: 1 }}>
                    <Rating
                      name="read-only"
                      value={course.rating}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="textSecondary">
                      ({course.reviews})
                    </Typography>
                    <VisibilityIcon fontSize="small" sx={{ color: "#B5C3CB" }} />
                    <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                      {course.students}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginTop: 1, marginBottom: 1 }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: 2 }}
                  >
                    {course.description}
                  </Typography>
                  {course.keyPoints.length > 0 && (
                    <List dense>
                      {course.keyPoints.map((point, i) => (
                        <ListItem key={i}>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon fontSize="small" color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={point} />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </CardContent>
                <Button
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: '#3FDBB1',
                    gap: 1,
                    mx: 4,
                    color: '#fff',
                    padding: 2
                  }}
                >
                  <Typography variant="body2" >
                    {course.classes}
                  </Typography>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Typography variant="body2">
                    {course.duration}
                  </Typography>
                </Button>
                <KeyboardArrowDownIcon sx={{ mx: 2, }} fontSize="medium" />
              </Box>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularDesigningCourses;

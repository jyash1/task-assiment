import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const PricingPolicy = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="body1" sx={{ color: '#EF9E48', mb: 1, textAlign: "center" }}>
        PRICING PLAN
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 6, color: "#0F2137", textAlign: "center" }}>
        Choose your pricing policy
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{ marginBottom: 4, p: 1, }}
      >
        <Tab label="Monthly Plan" />
        <Tab label="Annual Plan" />
      </Tabs>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} margin="auto">
          <Paper elevation={0} sx={{ paddingX: 5 }}>
            <Typography variant="h5" sx={{ color: "#0F2137" }}>Free Plan</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
              For Small teams or office
            </Typography>
            <Box sx={{ marginBottom: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Ultimate access to all courses, exercises, and assessments
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Free access for all kinds of exercise corrections with downloads
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Total assessment corrections with free download access system
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CancelIcon color="disabled" />
                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                  Unlimited download of courses on the mobile app contents
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CancelIcon color="disabled" />
                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                  Download and print courses and exercises in PDF
                </Typography>
              </Box>
            </Box>
            <Button sx={{ background: '#FCF2E8', color: "#EF9E48", display: "block", mx: "auto" }} >
              Start free trial
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Paper
            elevation={2}
            sx={{ padding: 4, border: "1px solid #3FDBB1" }}
          >
            <Button sx={{ background: '#EF9E48', color: "#fff" }}>
              Recommended
            </Button>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', mb: 3 }}>
              <Box>
                <Typography variant="h6">Premium</Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>
                  For startup enterprise
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#000" }}
                >
                  Starting from

                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#3FDBB1" }}
                >
                  49.99/mo

                </Typography>
              </Box>
            </Box>

            <Box sx={{ marginBottom: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Ultimate access to all courses, exercises, and assessments
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Free access for all kinds of exercise corrections with downloads
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Total assessment corrections with free download access system
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Unlimited download of courses on the mobile app contents
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CheckCircleIcon sx={{ color: "#3FDBB1" }} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  Download and print courses and exercises in PDF
                </Typography>
              </Box>
            </Box>
            <Button sx={{ background: '#FCF2E8', color: "#EF9E48", display: "block", mx: "auto" }} >
              Subscribe Now
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PricingPolicy;

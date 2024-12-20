import { } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  styled,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import imageurl from "../../services/images";
import { Search } from "@mui/icons-material";

const Hero = () => {
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      color: "#000",
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (

    <Container sx={{ py: 6 }}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" gutterBottom sx={{ color: '#02073E', fontWeight: 600, }}>
            Learn Design with Nia Matos
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            sx={{ mb: 4, color: '#02073E', lineHeight: 3, letterSpacing: 3.5 }}
          >
            Get your blood tests delivered at home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </Typography>
          <Search sx={{ mb: 3 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" >
                Sponsored by :
              </Typography>
              <Box display="flex" gap={1}>
                <Box component="img"
                  src={imageurl.logo}
                /><Box component="img"
                  src={imageurl.logo}
                /><Box component="img"
                  src={imageurl.logo}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>

          <Box
            component="img"
            src={imageurl.heroImg}
            alt="Hero Image"
            sx={{
              width: "100%",
              maxWidth: 450,
              position: "relative",
              zIndex: 1,
              mx: { md: 5 }

            }}
          />

        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;

import { useState } from "react";
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import imageurl from "../../services/images";

const ResponsiveNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = (
    <List>
      {["Home", "Advertise", "Supports", "Contact"].map((text) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} sx={{ padding: 2 }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box component="img"
              src={imageurl.logo}
            />
            <Typography variant="h6" sx={{ color: "#02073E", fontWeight: 600 }}>
              Landguru
            </Typography>
          </Box>
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {["Home", "Advertise", "Supports", "Contact"].map((text) => (
                <Button key={text} sx={{ color: '#02073E' }}>
                  {text}
                </Button>
              ))}
            </Box>
          )}
          <Button sx={{ background: '#FCF2E8', color: "#EF9E48" }}>
            Try for Free
          </Button>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        sx={{ width: 240 }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;

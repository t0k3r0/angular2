import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BasicMenu } from "./mui/BasicMenu";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

export const Cabecera = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };


  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleHome}
            >
              Inicio
            </IconButton>
            <Typography variant="h6" component="div">
              {/* <Button color="inherit" onClick={handleListado}>Listado</Button>
            <Button variant="contained" onClick={handleInfo}>Info</Button> */}
            </Typography>
            <Typography variant="h6" component="div">
              <BasicMenu />
            </Typography>

            <IconButton onClick={handleLogin}>
              <Avatar src="https://robohash.org/?set=set4"></Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const handleHome = () => {
        navigate("/");
    }

    const handleSubmit = () => {
        navigate(`/detalle/${usuario}/${password}`)
    }

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: "8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ p: 5 }} component="h1" variant="h5">
          Datos del nuevo usuario:
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="firstName"
                variant="outlined"
                required

                label="Nombre"
                onChange={(e) => setUsuario(e.target.value)}
                autoFocus
              />

              {/* … resto de textfields*/}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="password"
                variant="outlined"
                required
                label="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </Grid>  
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={handleSubmit}
          >
            Crear Usuario
          </Button>
      </Container>
      <Button onClick={handleHome}>Volver</Button>
    </>
  );
};

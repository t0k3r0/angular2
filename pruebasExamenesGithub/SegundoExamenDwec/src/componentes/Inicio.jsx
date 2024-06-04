import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";

export const Inicio = () => {
  const [cervezas, setCervezas] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const cerveza = response.map((cerveza) => ({
          id: cerveza.id,
          name: cerveza.name,
          url: cerveza.image_url,
        }));
        setCervezas(cerveza);
      });
  }, []);

  return (
    <>
      {cervezas.map((cerveza) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 350 }}
            image={cerveza.url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {cerveza.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}

     
    </>
  );
};

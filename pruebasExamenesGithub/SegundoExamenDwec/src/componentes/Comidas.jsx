import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { useEffect } from "react";

export const Comidas = () => {
  const [listaComida, setListaComida] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        return response.json();
      })
      .then(({ categories }) => {
        const comidas = categories.map((comida) => ({
          id: comida.idCategory,
          name: comida.strCategory,
          url: comida.strCategoryThumb,
        }));
        setListaComida(comidas);
      });
  }, []);

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {listaComida.map((comida) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar src={comida.url}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={comida.name} secondary="Jan 9, 2014" />
          </ListItem>
        ))}
      </List>
    </>
  );
};

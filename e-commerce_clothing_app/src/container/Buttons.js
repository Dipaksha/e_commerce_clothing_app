import React from "react";
import { Button, Grid } from "@mui/material";
import Data from "./DataFood";

export const Buttons = ({
  filterItem,
  setItem,
  menuItems,
  setShowMoreFilters,
}) => {
  const filterItems = (Val) => {
    setShowMoreFilters(true);
    filterItem(Val);
  };
  return (
    <Grid item sm={12} mb={2}>
      {menuItems.map((Val, id) => {
        return (
          <Button
            key={id}
            color="success"
            variant="outlined"
            style={{
              fontSize: "12px",
              marginRight: "5px",
              padding: "1px",
              fontWeight: "bold",
              border: "2px solid rgba(46, 125, 50, 0.5)",
            }}
            onClick={() => filterItems(Val)}
          >
            {Val}
          </Button>
        );
      })}
      <Button
        color="success"
        variant="outlined"
        style={{
          width: "10%",
          fontSize: "12px",
          padding: "1px",
          fontWeight: "bold",
          border: "2px solid rgba(46, 125, 50, 0.5)",
        }}
        onClick={() => setItem(Data)}
      >
        All
      </Button>
    </Grid>
  );
};

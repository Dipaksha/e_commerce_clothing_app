import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Data from "./DataFood";
import { Buttons } from "./Buttons";
import CardData from "./Card";

function Home() {
  const [item, setItem] = useState(Data);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <Box sx={{ flexGrow: 1 }} ml={1}>
      <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Buttons
              filterItem={filterItem}
              item={item}
              setItem={setItem}
              menuItems={menuItems}
              setShowMoreFilters={setShowMoreFilters}
            />
          </Grid>
        </Grid>
        <Grid item xs={showMoreFilters ? 11 : 12}>
          <Grid container spacing={1}>
            <CardData item={item} setItem={setItem} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

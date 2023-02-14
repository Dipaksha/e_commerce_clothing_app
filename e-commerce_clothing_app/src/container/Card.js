import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardData = ({ item, setItem }) => {
  const handleExpandClick = (id) => {
    const tempItemArray = [...item];
    tempItemArray.map((obj, i) => {
      if (obj.id === id) {
        obj.isExpanded = !obj.isExpanded;
      }
      return obj;
    });
    setItem(tempItemArray);
  };
  return (
    <>
      {item.map((Val) => {
        console.log("itemmm", item);
        return (
          <Grid item key={Val.id} style={{ width: "25%" }}>
            <Card
              style={{
                border: "2px solid rgba(46, 125, 50, 0.5)",
                boxShadow: "none",
              }}
            >
              <CardActionArea style={{ padding: "10px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={Val.img}
                  alt={Val.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {Val.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {Val.desc}
                  </Typography>
                  <Typography variant="h6">{"Price : " + Val.price}</Typography>
                  <Collapse in={Val.isExpanded} timeout="auto" unmountOnExit>
                    <CardContent style={{ padding: "0px" }}>
                      <Typography variant="body2" color="text.secondary">
                        {Val.desc}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={Val.isExpanded}
                  onClick={() => {
                    handleExpandClick(Val.id);
                  }}
                  aria-expanded={Val.isExpanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default CardData;

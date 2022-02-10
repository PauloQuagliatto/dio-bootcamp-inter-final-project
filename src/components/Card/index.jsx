import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core/";

import useCart from "../../hooks/useCart";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Card = ({ product, children }) => {
  const { addItem } = useCart();

  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <Grid item>
            <img width="140px" src={product.image} alt={product.name_product} />
            <Typography variant="h6">{children}</Typography>
            <Typography variant="subtitle1">
              R$ {product.price.toFixed(2)}
            </Typography>
          </Grid>

          <Button variant="contained" onClick={() => addItem(product)}>
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;

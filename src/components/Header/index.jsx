import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core/";
import Cart from "../Cart";

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      item
      xs={12}
    >
      <Typography variant="h3">Dio Shopping</Typography>
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/messages">
        <Button color="primary">Contato</Button>
      </Link>
      <Cart />
    </Grid>
  );
};

export default Header;

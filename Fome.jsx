import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  paper: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  loginButton: {
    margin: theme.spacing(2, 0),
  },
}));

function Fome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h5" component="h1">
            Log in to Facebook
          </Typography>
          <form>
            <TextField
              variant="outlined"
              label="Email or Phone Number"
              fullWidth
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
              className={classes.textField}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.loginButton}
            >
              Log In
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary">
            Forgot password?
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Fome;

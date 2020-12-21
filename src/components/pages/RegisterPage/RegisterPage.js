import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import Alert from "@material-ui/lab/Alert";

import { useDispatch, useSelector } from "react-redux";
import * as registerActions from "./../../../actions/register.action";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const registerReducer = useSelector(state => state.registerReducer)
  const registerReducer = useSelector(({ registerReducer }) => registerReducer);

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.password}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={registerReducer.isFetching}
        >
          Create
        </Button>
        <Button
          onClick={() => props.history.goBack()}
          type="button"
          fullWidth
          variant="contained"
          color="default"
          className={classes.cancel}
        >
          Cancel
        </Button>
      </form>
    );
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Register
        </Typography>
        <Formik
          initialValues={{ username: "", password: "", age: 100 }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(registerActions.register(values, props.history));
          }}
        >
          {(props) => showForm(props)}
        </Formik>

        {registerReducer.isError && (
          <Alert severity="error" style={{ marginTop: 10 }}>
            {registerReducer.result && registerReducer.result.result}
          </Alert>
        )}
        {/* {registerReducer.result && JSON.stringify(registerReducer.result)} */}
      </CardContent>
    </Card>
  );
};

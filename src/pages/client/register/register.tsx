import React from "react";

import "./style.scss";

import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Path from "../../../assets/img/Path.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "35ch",
      },
    },
  })
);

const Register = () => {
  const classes = useStyles();

  return (
    <div className="register">
      <div className="container main d-flex p-0">
        <div className="form">
          <form className={classes.root} noValidate autoComplete="off">
            <Link to="/" className="go_back">
              <img className="path_icon" src={Path} alt="go back" />
              <span>Назад</span>
            </Link>
            <h1 className="login_title">Login</h1>
            <div className="inputs mt-2 mb-3">
              <TextField
                id="outlined-email-input"
                label="Email"
                type="text"
                autoComplete="current-password"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                label="Пароль"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                className="password"
              />
            </div>
            <div className="m-2 mt-3 login_button">LOGIN</div>
          </form>
        </div>
        <div className="login_img"></div>
      </div>
    </div>
  );
};
export default Register;

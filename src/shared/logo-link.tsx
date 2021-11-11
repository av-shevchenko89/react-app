import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export const LogoLink = ({ link = "/" }) => (
  <Link to={link}>
    <img src={logo} alt="netflix" />
  </Link>
);

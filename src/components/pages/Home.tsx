import { Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, List, ListItem, Typography } from "@mui/material";
import React, { Component } from "react";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import Searchconnect from "../sections/SearchConnect";
import WeWork from "../sections/WeWork";
import Features from "../sections/Features";

const Home: React.FC = () => {
  return (
    <>
    <Hero />
     <Features />
      <WeWork />
     <Searchconnect />
    <Contact />
    </>
  );
};
export default Home;

const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
// console.log(process.env.PORT)

// import express from "express";
// import dotenv from 'dotenv'
// const dotenv1 = dotenv.config()

const App = express();
// const PORT = 8080;

App.get("/", (req, res) => {
  res.send("Hello world");
});

App.get("/twitter", (req, res) => {
  res.send("Twitter");
});

App.get("/login", (req, res) => {
  res.send("<h1>Login<h1>");
});

App.get("/youtube", (req, res) => {
  res.send("CHAI");
});

App.get("/youtube2", (req, res) => {
  res.send("CHAI");
});
App.get("/youtube3", (req, res) => {
  res.send("CHAI");
});
App.listen(port, () => {
  console.log(`SERVER IS LISTENING AT ${port}`);
});

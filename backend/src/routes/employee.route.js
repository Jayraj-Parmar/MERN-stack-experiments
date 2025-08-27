import express from "express";
import {
  handleCreateEmp,
  handleListEmp,
  handleDeleteEmp,
} from "../controllers/employee.controller.js";

const route = express.Router();

route.post("/createemp", handleCreateEmp);
route.get("/listemp", handleListEmp);
route.delete("/deleteemp/:id", handleDeleteEmp);

export default route;

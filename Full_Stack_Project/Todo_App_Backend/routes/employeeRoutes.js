
import express from "express";
import upload from "../middleware/upload.js";

import {
  addEmployee,
  getEmployees,
  getEmployeeById,   // NEW
  deleteEmployee,
  updateEmployee
} from "../controllers/employeeController.js";

const router = express.Router();

//  POST - Add Employee
router.post("/add", upload.single("profileImage"), addEmployee);

//  GET - All Employees
router.get("/", getEmployees);

//  GET - Single Employee by ID (Required for ViewEmployee.jsx)
router.get("/:id", getEmployeeById);

//  PUT - Update Employee
router.put("/:id", upload.single("profileImage"), updateEmployee);

//  DELETE - Delete Employee
router.delete("/:id", deleteEmployee);

export default router;

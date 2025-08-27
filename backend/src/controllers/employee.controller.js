import { asyncHandler } from "../utils/asyncHandler.js";
import { employee } from "../models/employee.model.js";

const handleCreateEmp = asyncHandler(async (req, res) => {
  const createEmp = await employee.create(req.body);
  if (!createEmp)
    return res.status(400).json({ msg: "Employee is not create." });
  res.status(201).json({ msg: "Employee created successfully." });
});

const handleListEmp = asyncHandler(async (req, res) => {
  const emps = await employee.find({});
  res.status(200).json(emps);
});

const handleDeleteEmp = asyncHandler(async (req, res) => {
  const emp = await employee.findByIdAndDelete(req.params.id);
  if (!emp) return res.json({ msg: "Employee not exist." });
  res.status(200).json({ msg: "Employee Delete Successfully." });
});

export { handleCreateEmp, handleListEmp, handleDeleteEmp };

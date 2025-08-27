import { Schema, model } from "mongoose";
const employeeSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    age: { type: Number, require: true },
    designation: {
      type: String,
      enum: ["Fullstack Developer", "Frontend Developer", "Backend Developer"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const employee = model("employee", employeeSchema);

export { employee };

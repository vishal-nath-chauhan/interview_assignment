import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
	name: String,
	city: mongoose.Types.ObjectId,
	salary: Number,
	date_of_joining: String,
	active: { type: Boolean, default: true },
	role: { type: Array, default: ["EMPLOYEE"] },
});

const Employee = mongoose.model("employee", EmployeeSchema);
export default Employee;

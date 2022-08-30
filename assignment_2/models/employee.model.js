import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
	name: String,
	city: mongoose.Types.ObjectId,
	salary: Number,
	date_of_joining: String,
});

const Employee = mongoose.model("employee", EmployeeSchema);
export default Employee;


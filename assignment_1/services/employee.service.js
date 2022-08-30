import Employee from "../models/employee.model.js";
import City from "../models/City.model.js";

const addEmployeeService = async (data) => {
	if (data) {
		try {
			const employeeCity = await City.findOne({ cityName: String(data.city).toLowerCase() });
			if (employeeCity) {
				data["city"] = employeeCity._id.toString();
				const output = await Employee.create(data);
				return output;
			} else {
				return { error: true, message: "Enter Valid City" };
			}
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

const removeEmployeeService = async (data) => {
	if (data) {
		try {
			let output;
			if (data.id) output = await Employee.findByIdAndDelete({ _id: data.id });
			return output;
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

const updateEmployeeService = async (filter, data) => {
	if (data) {
		try {
			let output;
			if (filter && data) output = await Employee.findByIdAndUpdate(filter.id, { ...data }, { new: true });
			console.log({output});
			return output;
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

const getEmployeeService = async (data) => {
	if (data) {
		try {
			let output;
			if (data.id) output = await Employee.findById({ _id: data.id });
			if (data.name) output = await Employee.find({ name: { $regex: String(data.name).toLowerCase() } });
			return output;
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

export default {
	addEmployeeService,
	removeEmployeeService,
	updateEmployeeService,
	getEmployeeService,
};

import employeeService from "../services/employee.service.js";

const addEmployee = async (req, res) => {
	try {
		const data = req.body;
		data["name"] = String(data.name).toLowerCase();
		const result = await employeeService.addEmployeeService(data);
		if (result.error) {
			res.status(500).json({
				success: false,
				message: result.message,
			});
		} else {
			res.status(200).json({
				success: true,
				data: result,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e,
		});
	}
};

const removeEmployee = async (req, res) => {
	try {
		const data = req.query;
		const result = await employeeService.removeEmployeeService(data);
		if (!result) {
			res.status(500).json({
				success: false,
				message: "Employee Not Found",
			});
		}
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e,
		});
	}
};

const updateEmployee = async (req, res) => {
	try {
		const data = req.body;
		const filter = req.query;
		const result = await employeeService.updateEmployeeService(filter,data);
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e,
		});
	}
};

const getEmployee = async (req, res) => {
	try {
		const data = req.query;
		const result = await employeeService.getEmployeeService(data);
		if (!result) {
			res.status(500).json({
				success: false,
				message: "Employee Not Found",
			});
		}
		res.status(200).json({
			success: true,
			data: result,
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e,
		});
	}
};

export default {
	addEmployee,
	updateEmployee,
	removeEmployee,
	getEmployee,
};

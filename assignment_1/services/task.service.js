import mongoose from "mongoose";
import Employee from "../models/employee.model.js";
import Task from "../models/task.model.js";

const addTaskService = async (data) => {
	if (data) {
		try {
			const creatorId = data.createdBy;
			if (checkIsManager(creatorId)) {
				const lastTaskNumber = await Task.countDocuments({});
				console.log({ lastTaskNumber });
				data["task_no"] = lastTaskNumber + 1;
				const output = await Task.create(data);
				return output;
			} else {
				return {
					error: true,
					message: "User must have Manager Role to assign tasks",
				};
			}
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

const removeTaskService = async (data) => {
	if (data) {
		try {
			let output;
			if (data.id) output = await Task.findByIdAndDelete({ _id: data.id });
			return output;
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

/****************************************************

UDPATE TASK 
ONLY MANAGER AND THE ASSIGNEE CAN UPDATE THE TASK

**************************************************/

const updateTaskService = async (filter, data) => {
	if (data) {
		try {
			const task = await Task.findOne({ _id: filter.id });
			if (!task)
				return {
					error: true,
					message: "Task Not Found",
				};
			if ((data.createdBy && data.createdBy && task.createdBy.toString() === data.createdBy) || (data.assignedTo && data.assignedTo === task.assignedTo.toString())) {
				let output = await Task.findByIdAndUpdate(filter.id, { ...data }, { new: true });
				return output;
			} else {
				return {
					error: true,
					message: "Unauthorized Access",
				};
			}
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

/****************************************************


FILTER TASKS BY 
1. DUE DATE
2. ASSIGNED TO
3. CREATED BY
4. STATUS
5. TASK NO

**************************************************/

const getTaskService = async (data) => {
	if (data) {
		try {
			let output;
			if (data.id) output = await Task.findById({ _id: data.id });
			let filter = {
				...(data.name && { name: { $regex: String(data.name).toLowerCase() } }),
				...(data.assignedTo && { assignedTo: mongoose.Types.ObjectId(data.assignedTo) }),
				...(data.createdBy && { createdBy: mongoose.Types.ObjectId(data.createdBy) }),
				...data,
			};
			output = await Task.find(filter);
			return output;
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

export default {
	addTaskService,
	getTaskService,
	removeTaskService,
	updateTaskService,
};

const checkIsManager = async (userId) => {
	const result = await Employee.findById(userId);
	if (result && result.role.includes("MANAGER")) return true;
	return false;
};

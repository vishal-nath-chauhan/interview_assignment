import taskService from "../services/task.service.js";

const addTask = async (req, res) => {
	try {
		const data = req.body;
		const result = await taskService.addTaskService(data);
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

const removeTask = async (req, res) => {
	try {
		const data = req.query;
		const result = await taskService.removeTaskService(data);
		if (!result) {
			res.status(500).json({
				success: false,
				message: "Task Not Found",
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

const updateTask = async (req, res) => {
	try {
		const data = req.body;
		const filter = req.query;
		const result = await taskService.updateTaskService(filter, data);
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

const getTask = async (req, res) => {
	try {
		const data = req.query;
		const result = await taskService.getTaskService(data);
		if (!result) {
			res.status(500).json({
				success: false,
				message: "Task Not Found",
			});
		}
		if (result)
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
	addTask,
	getTask,
	removeTask,
	updateTask,
};

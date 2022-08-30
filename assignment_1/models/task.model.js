import mongoose from "mongoose";

const TaskStatus = ['COMPLETED', 'PENDING', 'NOT_STARTED'];

const TaskSchema = mongoose.Schema({
	createdBy: mongoose.Types.ObjectId,
	description: String,
	assignedTo: mongoose.Types.ObjectId,
	status: { type: String, enum: TaskStatus, default: "NOT_STARTED" },
	due_date: String,
	task_no: Number,
});

const Task = mongoose.model("task", TaskSchema);
export default Task;

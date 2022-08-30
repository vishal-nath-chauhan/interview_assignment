import City from "../models/City.model.js";
import CityService from "../services/city.service.js";

const addCity = async (req, res) => {
	try {
		const data = req.body;
		const result = await CityService.addCityService(data);
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

const removeCity = async (req, res) => {
	try {
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e,
		});
	}
};

const updateCity = async (req, res) => {
	try {
	} catch (e) {
		res.status(500).json({
			success: false,
			message: e,
		});
	}
};
const getCity = async (req, res) => {
	try {
		const data = req.query;
		const result = await CityService.getCityService(data);
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
	updateCity,
	addCity,
	removeCity,
	getCity
};

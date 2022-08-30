import City from "../models/City.model.js";

const addCityService = async (data) => {
	if (data) {
		const output = await City.create({ cityName: String(data.cityName).toLowerCase() });
		return output;
		try {
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

const getCityService = async (data) => {
	if (data) {
		try {
			if (data.id) {
				const output = await City.findById({ _id: data.id });
				return output;
			}
			if (data.cityName) {
				const output = await City.find({ cityName: String(data.cityName).toLowerCase() });
				return output;
			}
		} catch (e) {
			throw e;
		}
	} else {
		throw new Error("Enter valid Input");
	}
};

export default {
	addCityService,
	getCityService,
};

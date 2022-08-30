import mongoose from "mongoose";

const CitySchema = mongoose.Schema({
	cityName: { type: String, unique: true, require: true },
});

const City = mongoose.model("city", CitySchema);
export default City;

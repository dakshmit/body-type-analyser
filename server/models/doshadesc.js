import mongoose from "mongoose";

const Doshadescription = mongoose.model('doshadescription', new mongoose.Schema({
    type: String,
    description: String
}));
export default Doshadescription;
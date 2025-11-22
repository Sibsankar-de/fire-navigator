import mongoose, { Schema } from "mongoose";

const buildingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    floor_count: {
        type: Number
    },
    sensor_count: {
        type: Number
    }
}, { timestamps: true });

export const Building = mongoose.model("Building", buildingSchema);
import mongoose, { Schema } from "mongoose";

const floorSchema = new Schema({
    building_id:{
        type: mongoose.Types.ObjectId,
        ref: "Building"
    },
    title: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

export const Floor = mongoose.model("Floor", floorSchema);
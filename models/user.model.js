import { Schema, model } from "mongoose";

const user = new Schema({
    name: String,
    password: String
})

export default model("user", user)
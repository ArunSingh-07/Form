import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    VehicleNumber: {
        type: String,
        require: true,
        unique: true,
    }
})

const UserModel = mongoose.model("User", UserSchema)

export { UserModel as User}
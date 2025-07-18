import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        _id: {type: String, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true},
        image: {type: String, required: false}
    },
    {timestamp: true}
);

const User = mongoose.models.user || mongoose.model("User", UserSchema)

export default User;
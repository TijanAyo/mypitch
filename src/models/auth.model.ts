import {Schema, model} from "mongoose"

interface User {
    first_name: String,
    last_name: String,
    name: String,
    email: String,
    googleId: String
}


const authSchema = new Schema<User>({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    googleId: {
        type: String
    }
});


export default model('User', authSchema)
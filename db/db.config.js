import mongoose from 'mongoose'

const connect = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/test-server")
        console.log("connected to ", connection.connections[0].name);
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connect
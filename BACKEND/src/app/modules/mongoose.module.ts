import mongoose, { ConnectionOptions } from "mongoose";


function connect(): Promise<typeof mongoose> {
    const mongooseUri: string = 'mongodb+srv://Administrator:INF3240@cluster0.5nocx.mongodb.net/Informaciones-Camaron';
    const options: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    } 

    return mongoose.connect(mongooseUri, options);
}
export default { connect };
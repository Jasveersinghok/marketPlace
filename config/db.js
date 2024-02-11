import mongoose from "mongoose";
import colors from "colors";



const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURL);
    console.log(
      `connected to mongoDB ${conn.connection.host} `.bgMagenta.white
    );
  } catch (error) {
    console.log(`error while connecting to mongoDB ${error}`.bgRed.white);
  }
};

export default connection;

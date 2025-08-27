import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(
      `MongoDB connect !! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection err: ${error}`);
    process.exit(1);
  }
};

export { connectDB };

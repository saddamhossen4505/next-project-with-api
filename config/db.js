import mongoose from "mongoose";

// Create mongoDbConnection.
const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING);
    console.log(`mongoDbConnection is successful.`);
  } catch (error) {
    console.log({ error: error.message });
  }
};

// Export mongoDbConnection.
export default mongoDbConnection;

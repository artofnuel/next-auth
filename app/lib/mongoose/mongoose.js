import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  // if (!initialized) {
  //     await mongoose.connect(process.env.MONGO_URI)
  //     initialized = true
  // }
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next auth app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

import mongoose from "mongoose";
const DbConnect = () => {
  mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("MongoDB Connected");
};

export { DbConnect };

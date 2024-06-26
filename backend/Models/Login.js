import mongoose from "mongoose";

const loginShema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { Collection: "logins" }
);

const logins = mongoose.model("logins", loginShema);
export { logins };

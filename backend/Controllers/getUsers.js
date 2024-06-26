import { logins } from "../Models/Login.js";
const getUsers = (req, res) => {
  logins
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getUsers };

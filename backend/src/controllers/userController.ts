import { Request, Response } from "express";
import sqlInstance from "../db.js";
import { User } from "../models/users.js";

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username && password) {
    const [user] = (await sqlInstance.query(
      "select id,username,password from users where username=?",
      [username]
    )) as [User[], any];
    if (user && user.length > 0) {
      // check password
      if (password === user[0]?.password) {
        console.log("user loggedin!");

        return res.status(200).send({
          msg: "success",
          token: user[0]?.id,
        });
      }
      return res.status(400).send({ msg: "incorrect password!" });
    } else {
      // no user
      return res.status(400).send({ msg: "user not found!" });
    }
  }
  return res.status(400).send({ msg: "please enter username and password" });
};

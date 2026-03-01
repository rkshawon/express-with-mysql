import { Request, Response } from "express";
import User from "../model/User";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, company, role } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json("User already exists");

    const user = await User.create({
      name,
      email,
      password,
      company,
      role,
    });

    const { password: _, ...userData } = user.get({ plain: true });

    res.status(201).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

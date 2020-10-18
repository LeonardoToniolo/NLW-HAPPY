import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import User from '../models/User';
import user_view from '../views/usersView';
import bcrypt from 'bcrypt';

export default {
  async index(request: Request, response: Response) {
  },

  async show(request: Request, response: Response) {
  },

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const hash = await bcrypt.hash(password, 10);
    const usersRepository = getRepository(User);
    const data = { name, email, password: hash };
    const user = usersRepository.create(data);
    await usersRepository.save(user);
    return response.status(201).json(user);

    // // Load hash from your password DB.
    // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    //   // result == true
    // });
    // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    //   // result == false
    // });
  },
};
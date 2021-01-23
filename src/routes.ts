import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'gfernandes@eslsistemas.com.br',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Ruby on Rails', experience: 100 }
    ],
  });

  return response.json({ message: 'Hello World', user: user });
};

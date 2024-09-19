import {Request, Response} from 'express';

export class ExampleController {
  async helloWorld(req: Request, res: Response) {
    res.json({message: 'Hello World!'});
  }
}

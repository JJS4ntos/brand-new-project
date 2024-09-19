import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import passport from 'passport';
import {JWT} from './infrastructure/jwt';
import {config} from './infrastructure/config';
import BearerStrategy from 'passport-http-bearer';
import {ExampleController} from '@application/controllers/example-controller';

const startServer = async () => {
  const app = express();
  const authStrategy = new BearerStrategy.Strategy(async (token, done) => {
    const user = await new JWT().verify(token);
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  });
  passport.use(authStrategy);

  const exampleController = new ExampleController();

  app.post(
    '/hello',
    express.json(),
    exampleController.helloWorld.bind(exampleController)
  );
  app.post(
    '/hello-auth',
    passport.authenticate('bearer', {session: false}),
    cors<cors.CorsRequest>(),
    express.json(),
    exampleController.helloWorld.bind(exampleController)
  );
  app.listen({port: config.port}, () => {
    console.log(`🚀 Server ready at http://localhost:${config.port}`);
  });
};

startServer();

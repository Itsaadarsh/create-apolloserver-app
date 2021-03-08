import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const PORT = 4000;

const main = async () => {
  try {
    await createConnection();
    console.log('Database successfully connected');
    const app = express();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver],
      }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`Server Started at http://localhost:${PORT}/graphql`);
    });
  } catch (err) {
    console.error(err);
  }
};

main().catch(err => {
  console.error(err);
});

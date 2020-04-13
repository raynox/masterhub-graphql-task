const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
require('dotenv').config();

const VideosAPI = require('./datasources/videos');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    videosAPI: new VideosAPI(),
  }),
});

const app = express();
app.use('/assets', express.static('assets'));

server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

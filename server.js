const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql')
const schema = buildSchema(`
type Query {
hello: String
artist:Artist
} 
type Artist {
    id: Int
    name: String
    albums:[Album]
  
}
type Album {
  id: Int
  name: String
  songs:[Song]
}
type Song {
  id: Int
  name: String
  coverUrl: String
  SongUrl: String
 
}


`);
const root = { hello: () => 'Hello world!'}

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue:root,
    graphiql: true,
  }),
);

app.listen(4000);
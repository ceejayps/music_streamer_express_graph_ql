const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql')

const artists = [{
  id:100001,
  name:"Ariana Grande",
  albums:[
    {
    name:"Yours Truly",
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"My Everything",
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Dangerous Woman",
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Sweetener",
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Thank You, Next",
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Positions",
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  }
]
}

]

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


const root = { 
  hello: () => 'Hello world!',
  artist:()=>{
   return artists[0]
  }
}

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
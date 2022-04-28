const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql')

const artists = [{
  id:100001,
  name:"Ariana Grande",
  albums:[
    {
    name:"Yours Truly",
    year:2013,
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"My Everything",
    year:2014,
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Dangerous Woman",
    year:2016,
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Sweetener",
    year:2018,
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Thank You, Next",
    year:2019,
    songs:[
      {
      name: "Hearts Up",
      coverUrl: "String",
      SongUrl: "String"}]
  },
  {
    name:"Positions",
    year:2021,
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
  year:Int
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
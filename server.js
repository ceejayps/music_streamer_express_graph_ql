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
artist(artistName : String!):Artist
albums(artistName : String!):Album
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
  artist:({artistName})=>{
   return artists.find(artist => artist.name =artistName)
  },
  albums:({artistName})=>{
    //console.log (artists.find(artist => artist.albums.name =artistName));
    result = artists.find(artist => artist.albums.name =artistName).albums
    album = result.find(result => result.name = artistName)
     console.log(album)
   return album
   
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
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Query {
        videos: [Video]
        video(id: ID!): Video
    }

    type Video {
        id: ID!
        title: String
        url: String
        thumbnail: String
    }
`;

module.exports = typeDefs;
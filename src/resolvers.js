module.exports = {
    Query: {
        videos: (_, __, { dataSources }) => dataSources.videosAPI.findAll(),
        video: (_, { id }, { dataSources }) => dataSources.videosAPI.findByID(id),
    },
};

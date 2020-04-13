const { DataSource } = require('apollo-datasource');
const videos = require('../videos/data');

const mapVideo = video => ({
  ...video,
  url: `${process.env.HOST_URL}/assets/videos/${video.id}.mp4`,
  thumbnail: `${process.env.HOST_URL}/assets/images/${video.id}.jpg`,
});

class VideosAPI extends DataSource {

  findAll() {
    return videos.map(video => mapVideo(video));
  }

  findByID(id) {
    const video = videos.find(item => item.id == Number(id));

    return video ? mapVideo(video) : null;
  }

}

module.exports = VideosAPI;

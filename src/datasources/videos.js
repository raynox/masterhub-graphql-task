const { DataSource } = require('apollo-datasource');
const videos = require('../videos/data');
const ip = require("ip");

const mapVideo = video => {
  const ipAddress = ip.address();
  const port = process.env.PORT;

  return {
    ...video,
    url: `http://${ipAddress}:${port}/assets/videos/${video.id}.mp4`,
    thumbnail: `http://${ipAddress}:${port}/assets/images/${video.id}.jpg`,
  }
};

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

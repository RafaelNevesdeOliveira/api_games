import { VideosRepository } from './../repository/videosRepository';
class VideosService {
  get() {
    return VideosRepository.find({});
  }
  getById(_id) {
    return VideosRepository.findById(_id);
  }
  create(videos) {
    return VideosRepository.create(videos);
  }
  update(_id, videos) {
    return VideosRepository.findByIdAndUpdate(_id, videos);
  }
  delete(_id) {
    return VideosRepository.findByIdAndRemove(_id);
  }

}
export default new VideosService();
import { GaleriaRepository } from './../repository/galeriaRepository';
class GaleriaService{
  get() {
    return GaleriaRepository.find({});
  }
  getById(_id) {
    return GaleriaRepository.findById(_id);
  }
  create(galeria) {
    return GaleriaRepository.create(galeria);
  }
  update(_id, galeria) {
    return GaleriaRepository.findByIdAndUpdate(_id, galeria);
  }
  delete(_id) {
    return GaleriaRepository.findByIdAndRemove(_id);
  }
}
export default new GaleriaService();
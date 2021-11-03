import { IService } from './iService';
import {News} from '../models/news';


 /**
  * Contrato INewsService
  * @summary esse contrato implementa a interface IService passando a model de News
  */
export interface INewsService extends IService<News> { }
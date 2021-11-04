import {Core} from './core'

/**
 * Model de news
 * @types chapeu {string} sub titulo
 * @types autor {String} quem escreveu a noticia
 **/
export class News extends Core{
    descricao: string;
    autor: string;
}
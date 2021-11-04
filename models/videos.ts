import { Core} from './core'

/**
 * Model de videos
 * @types URL {string} - URL do vídeo
 * @types Duração {string} - tempo de vídeo
 **/
export class Videos extends Core{
    url: string;
    duracao: string;
}
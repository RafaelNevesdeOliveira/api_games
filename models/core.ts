import { Document } from 'mongoose';

/**
 * @summary Classe abstrata para criação das models
 * @type titulo {String} título
 * @type sinopse  {String} texto ou descrição 
 * @type imagem {String} imagem titulo
 * @type dataPublicacao {Date} data de publicação 
 * @type tags {String} tags relacionada a model
 * @type link {String} link do conteudo Ex.: https://conteudo.com.br
 * @type ativo {Boolean} status
 */
export abstract class Core extends Document {
    titulo!: string;
    sinopse!: string;
    imagem!: string;
    dataPublicacao!: Date;
    tags!: string;
    link!: string;
    ativo!: boolean;
}
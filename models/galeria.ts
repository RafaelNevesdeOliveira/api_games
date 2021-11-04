import {Core} from './core';
import {Fotos} from './fotos';

/**
 * Model de galeria
 * @types fotos <Array> - Model de fotos
 **/
export class Galeria extends Core{
    fotos: Array<Fotos>;
}
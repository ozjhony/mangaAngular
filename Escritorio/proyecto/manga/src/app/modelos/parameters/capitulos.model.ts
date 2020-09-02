import {MangaModel} from '../parameters/manga.model'

export class CapituloModel{
 id?:string;
 nombre:string;
 numero:number;
 rutamanga:string;
 mangaId:MangaModel;

}
import { MangaModel } from './manga.model';

export class MangaImageModel {
    id?: String;
    path: String;
    order: number;
    manga?: MangaModel;
    mangaId: String;
}
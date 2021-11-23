export class ListLoginDto {
    name: string;
    description: string;
    language: string;

    constructor() {
        this.name = '';
        this.description = '';
        this.language = 'es';
    }
}

export class AddMovieDto {
    media_id: number;

    constructor() {
        this.media_id = 0;
    }
}

export class MarkFavoriteDto{
    media_type: string;
    media_id: number;
    favorite: boolean;

    constructor(){
        this.media_type = 'movie';
        this.media_id = 0;
        this.favorite = true;
    }
}
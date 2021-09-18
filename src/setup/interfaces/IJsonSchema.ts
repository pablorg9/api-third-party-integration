export interface IImdb {
    adult: string | null;
    backdrop_path: string | null;
    genre_ids: string | null;
    id: string | null;
    original_language: string | null;
    original_title: string | null;
    overview: string | null;
    popularity: string | null;
    poster_path: string | null;
    release_date: string | null;
    title: string | null;
    video: string | null;
    vote_average: string | null;
    vote_count: string | null;
}

export interface IJsonSchema {
    copyright: string | null;
    date: string | null;
    explanation: string | null;
    media_type: string | null;
    service_version: string | null;
    nasa_image_title: string | null;
    nasa_image_url: string | null;
    imdb: IImdb[];
    giphy: {
        image: string | null;
    };
}

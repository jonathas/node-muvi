export default class Muvi {
    constructor(apiBase: string, apiToken: string);
    login(user: string, password: string): Promise<Login>;
    registerUser(name: string, email: string, password: string): Promise<any>;
    getCategoryList(langCode: string): Promise<CategoryList>;
    getCategoryContentList(categoryPermalink: string, genre?: string, limit?: number, offset?: number, country?: string): Promise<ContentList>;
    getCategoryContentDetails(contentPermalink: string, country: string): Promise<ContentDetails>;
    getGenreList(): Promise<GenreList>;
    getVideoDetails(contentUniqueId: string, streamUniqueId: string): Promise<VideoDetails>;
    search(query: string, limit?: number, offset?: number, country?: string): Promise<SearchData>;
}

export interface StatusResponse {
    code: number;
    status?: string;
    msg?: string;
}

export interface Category {
    category_id: string;
    category_name: string;
    permalink: string;
    category_img_url: string;
    cat_img_size: Array<string>;
}

export interface CategoryList {
    code: number;
    status?: string;
    msg?: string;
    category_list: Array<Category>;
}

export interface ContentListMovie {
    movie_stream_uniq_id: string;
    movie_id: string;
    content_publish_date: string;
    movie_stream_id: string;
    is_episode: number;
    muvi_uniq_id: string;
    content_type_id: string;
    ppv_plan_id: string;
    permalink: string;
    name: string;
    full_movie: string;
    story: string;
    genre: Array<string>;
    release_date: string;
    content_types_id: string;
    is_converted: string;
    last_updated_date: string;
    content_language: string;
    censor_rating: string;
    is_downloadable: string;
    movieid: string;
    geocategory_id: string;
    studio_id: string;
    category_id: string;
    country_code: string;
    ip: string;
    poster_url: string;
    is_favorite: number;
    isFreeContent: number;
    embeddedUrl: string;
    banner: string;
    viewStatus: {
        viewcount: string;
        uniq_view_count: string;
    };
    custom_meta_data: Array<Object>;
}

export interface ContentList {
    code: number;
    status?: string;
    msg?: string;
    movieList: Array<ContentListMovie>;
    orderby: string;
    item_count: string;
    limit: number;
    Ads: Array<Object>;
    menu_title: string;
}

export interface Login {
    code: number;
    status?: string;
    msg?: string;
    id: string;
    email: string;
    display_name: string;
    nick_name: string;
    studio_id: string;
    isFree: string;
    profile_image: string;
    isSubscribed: number;
    is_broadcaster: string;
    language_list: {
        en: string;
    };
    login_history_id: string;
}

export interface VideoDetails {
    code: number;
    status?: string;
    msg?: string;
    is_watermark: {
        status: number;
    };
    videoResolution: string;
    videoDetails: Array<{
        resolution: string;
        url: string;
    }>;
    newvideoUrl: string;
    is_offline: number;
    studio_approved_url: string;
    licenseUrl: string;
    videoUrl: string;
    thirdparty_url: string;
    emed_url: string;
    trailerUrl: string;
    trailerThirdpartyUrl: string;
    embedTrailerUrl: string;
    played_length: string;
    subTitle: Array<{
        url: string;
        code: string;
        language: string;
    }>;
    streaming_restriction: number;
    no_streaming_device: number;
    no_of_views: string;
}

export interface CastDetail {
    celeb_image: string;
    celeb_name: string;
    celeb_id: string;
    permalink: string;
    cast_type: string;
    full_permalink?: string;
    celeb_summary?: string;
}

export interface ContentDetailsMovie {
    id: string;
    name: string;
    content_types_id: string;
    movie_stream_id: string;
    content_publish_date: string;
    full_movie: string;
    is_converted: string;
    video_resolution: string;
    movie_stream_uniq_id: string;
    muvi_uniq_id: string;
    ppv_plan_id: string;
    permalink: string;
    content_type_id: string;
    genre: string;
    release_date: string;
    censor_rating: string;
    story: string;
    rolltype: string;
    roll_after: string;
    video_duration: string;
    thirdparty_url: string;
    is_episode: string;
    custom1: string;
    custom2: string;
    custom3: string;
    custom4: string;
    custom5: string;
    custom6: string;
    custom7: string;
    custom8: string;
    custom9: string;
    custom10: string;
    content_language: string;
    is_downloadable: string;
    custom_metadata_from_id: string;
    start_time: string;
    end_time: string;
    isFreeContent: number;
    is_ppv: number;
    is_advance: number;
    actor: string;
    director: string;
    cast_detail: Array<CastDetail>;
    embeddedUrl: string;
    viewStatus: {
        viewcount: string;
        uniq_view_count: string;
    };
    movieUrlForTv: string;
    movieUrl: string;
    resolution: Array<{
        resolution: number;
        url: string;
    }>;
    banner: string;
    poster: string;
    adDetails: Array<Object>;
    trailerThirdpartyUrl: string;
    trailerUrl: string;
    embedTrailerUrl: string;
    custom_meta_data: Object;
}

export interface ContentDetails {
    code: number;
    status?: string;
    msg?: string;
    movie: ContentDetailsMovie;
    comments: Array<Object>;
    epDetails: string;
}

export interface GenreList {
    code: number;
    status?: string;
    msg?: string;
    genre_list: Array<string>;
}

export interface SearchData {
    code: number;
    msg: string;
    search: Array<SearchObject>;
    limit: number;
    offset: number;
    item_count: string;
    Ads: {
        network: string;
        channelId: string;
    };
}

export interface SearchObject {
    movie_id: string;
    content_category_value: string;
    is_episode: string;
    episode_number: number;
    season_number: number;
    title: string;
    parent_content_title: string;
    content_details: string;
    content_title: string;
    play_btn: string;
    buy_btn: string;
    permalink: string;
    c_permalink: string;
    poster: string;
    data_type: number;
    is_landscape: number;
    release_date: string;
    full_release_date: string;
    censor_rating: string;
    movie_uniq_id: string;
    stream_uniq_id: number;
    video_duration: string;
    watch_duration: string;
    video_duration_next: string;
    ppv: string;
    payment_type: number;
    is_converted: string;
    movie_stream_id: string;
    uniq_id: string;
    content_type_id: string;
    content_types_id: string;
    ppv_plan_id: string;
    full_movie: string;
    story: string;
    short_story: string;
    genres: Array<string>;
    display_name: string;
    content_permalink: string;
    trailer_url: string;
    trailer_is_converted: string;
    trailer_player: string;
    casts: { "": Array<CastDetail> };
    casting: { director: Array<CastDetail> };
    content_banner: string;
    reviewformonly: string;
    reviewsummary: string;
    reviews: string;
    myreview: number;
    defaultResolution: number;
    multipleVideo: Array<Object>;
    start_time: string;
    duration: string;
    custom: Array<Object>;
    is_downloadable: string;
    download_btn: string;
    content_language: string;
    is_fav_status: number;
    movie_stream_uniq_id: string;
    name: string;
    content_form_id: string;
    booking_status: number;
    show_booking_button: number;
    booking_time: string;
    details_permalink: string;
    muvi_uniq_id: string;
    banner: string;
    film_id: string;
    genre: string;
    language_id: number;
    episode_story: string;
    parent_id: string;
    search_parent_id: string;
    episode_parent_id: string;
    episode_language_id: string;
    episode_title: string;
    video_url: string;
    country_code?: string;
}

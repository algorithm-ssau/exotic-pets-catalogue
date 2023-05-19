export interface ImageI {
    id?: number;
    image?: string;
}

export interface CommentE {
    "name"?: string
    "commBody"?: string
    "image"?: string
}

export class ImageE {
    public static NAME = 'images'
}

export class CommentsTableE {
    public static NAME = 'comments'
}
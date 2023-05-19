export namespace CommentsR{
    
    export namespace addComment {
        export const route = '/comments/add-comment';

        export interface RequestI {
            "name": string,
            "commBody": string,
            "img_id": number 
        }

    }

    export namespace getAllComments {
        export const route = '/comments/get-all-comments';

        export interface ResponseI {
            "name"?: string
            "commBody"?: string
            "image"?: string 
        }

    }

}
export namespace CommentsR{
    
    export namespace addComment {
        export const route = '/comments/add-comment';

        export interface RequestI {
            "name": string,
            "commBody": string,
            "img_id": number 
        }

    }

}
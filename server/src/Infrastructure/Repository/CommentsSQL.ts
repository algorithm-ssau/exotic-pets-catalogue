import { CommentsTableE, ImageE, CommentE } from "../Entity/CommentsE";
import config from "../../../config";
import knex, { Knex } from "knex";

export class CommentsSQL {
    db: Knex;

    constructor() {
        this.db = knex(config)
    }

    public async addComment(sName: string, sCommBody: string, idImg: number){

        try {

            await this.db
            .insert([{user_name: sName, com_body: sCommBody, images_id: idImg}])
            .into(CommentsTableE.NAME);

        } catch (e) {
            console.log('addComment sql ERROR', e);
        }
    }

    public async getAllComments(): Promise<CommentE> {
        let vAnimal: CommentE = {};

        try {
            vAnimal = await this.db<CommentE>({table: CommentsTableE.NAME})
                .leftJoin({img: ImageE.NAME}, 'img.id', 'table.images_id')
                .select('table.user_name', 'table.com_body', 'img.image');

        } catch (e) {
            console.log('getAllComments sql ERROR', e);
        }

        return vAnimal;
    }
}
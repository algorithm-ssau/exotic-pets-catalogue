import { CommentsTableE } from "../Entity/CommentsE";
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
}
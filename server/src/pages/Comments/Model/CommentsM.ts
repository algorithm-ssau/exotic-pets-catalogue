import { CommentsSQL } from "../../../Infrastructure/Repository/CommentsSQL";
import { CommentsR as R } from "../CommentsR";

export class CommentsM{

    private CommentsSQL: CommentsSQL;

    constructor() {
        this.CommentsSQL = new CommentsSQL();
    }

    public async addComment(data: R.addComment.RequestI) {
        
        await this.CommentsSQL.addComment(data.name, data.commBody, data.img_id);

    }

}
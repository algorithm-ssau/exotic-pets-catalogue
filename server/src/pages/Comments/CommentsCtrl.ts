import { Router } from 'express';
import { CommentsR as R } from './CommentsR';
import { CommentsM } from './Model/CommentsM';

const router = Router();

export class CommentsCtrl {
    public CommentsM: CommentsM

    constructor() {
        this.CommentsM = new CommentsM();
    }
}

router.post(R.addComment.route, async (req) => {

    const request = req.body as R.addComment.RequestI;

    const ctrl = new CommentsCtrl();

    await ctrl.CommentsM.addComment(request);
});

router.get(R.getAllComments.route, async (req, res) => {
    
    let response: R.getAllComments.ResponseI = {};

    const ctrl = new CommentsCtrl();
    response = await ctrl.CommentsM.getAllComments();
    
    res.json(response)
});



export default router 
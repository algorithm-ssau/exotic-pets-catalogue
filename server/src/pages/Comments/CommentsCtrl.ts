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

router.post(R.addComment.route, async (req, res) => {

    const request = req.body as R.addComment.RequestI;

    const ctrl = new CommentsCtrl();

    await ctrl.CommentsM.addComment(request);
    
    res.send('ok');
});

export default router 
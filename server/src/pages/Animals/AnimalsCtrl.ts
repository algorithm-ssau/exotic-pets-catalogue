import { Router } from 'express';
import { AnimalsR as R } from './AnimalsR';
import { AnimalsM } from './Model/AnimalsM';

const router = Router();

export class AnimalsCtrl {
    public AnimalsM: AnimalsM

    constructor() {
        this.AnimalsM = new AnimalsM();
    }
}

router.post(R.getAnimalById.route, async (req, res) => {
    const request = req.body as R.getAnimalById.RequestI;
    let response: R.getAnimalById.ResponseI = {};

    const ctrl = new AnimalsCtrl();
    response = await ctrl.AnimalsM.getAnimalById(request);
    
    res.json(response)
});

export default router 
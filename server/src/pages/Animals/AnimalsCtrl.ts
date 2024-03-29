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

router.post(R.getAnimalsOfSpecifiedKingdom.route, async (req, res) => {
    const request = req.body as R.getAnimalsOfSpecifiedKingdom.RequestI;
    let response: R.getAnimalsOfSpecifiedKingdom.ResponseI = {};

    const ctrl = new AnimalsCtrl();
    response = await ctrl.AnimalsM.getAnimalsOfSpecifiedKingdom(request);
    
    res.json(response)
});

router.post(R.getAnimalsOfSpecifiedSpecies.route, async (req, res) => {
    const request = req.body as R.getAnimalsOfSpecifiedSpecies.RequestI;
    let response: R.getAnimalsOfSpecifiedSpecies.ResponseI = {};

    const ctrl = new AnimalsCtrl();
    response = await ctrl.AnimalsM.getAnimalsOfSpecifiedSpecies(request);
    
    res.json(response)
});

router.get(R.getAllAnimals.route, async (req, res) => {
    
    let response: R.getAllAnimals.ResponseI = {};

    const ctrl = new AnimalsCtrl();
    response = await ctrl.AnimalsM.getAllAnimals();
    
    res.json(response)
});

router.post(R.getAnimalsThroughSearch.route, async (req, res) => {
    const request = req.body as R.getAnimalsThroughSearch.RequestI;
    let response: R.getAnimalsThroughSearch.ResponseI = {};

    const ctrl = new AnimalsCtrl();
    response = await ctrl.AnimalsM.searchAnimals(request);
    
    res.json(response)
});

export default router 
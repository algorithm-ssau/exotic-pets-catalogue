import { AnimalsSQL } from "../../../Infrastructure/Repository/AnimalsSQL";
import { AnimalsR as R } from "../AnimalsR";

export class AnimalsM {
    private AnimalsSQL: AnimalsSQL;

    constructor() {
        this.AnimalsSQL = new AnimalsSQL();
    }

    public async getAnimalById(data: R.getAnimalById.RequestI): Promise<R.getAnimalById.ResponseI> {
        const vAnimal = await this.AnimalsSQL.getAnimalById(data.id);

        return vAnimal
    }

    public async getAnimalsOfSpecifiedKingdom(data: R.getAnimalsOfSpecifiedKingdom.RequestI): Promise<R.getAnimalsOfSpecifiedKingdom.ResponseI> {
        const vAnimal = await this.AnimalsSQL.getAnimalsOfSpecifiedKingdom(data.kingdom);

        return vAnimal
    }

    public async getAnimalsOfSpecifiedSpecies(data: R.getAnimalsOfSpecifiedSpecies.RequestI): Promise<R.getAnimalsOfSpecifiedSpecies.ResponseI> {
        const vAnimal = await this.AnimalsSQL.getAnimalsOfSpecifiedSpecies(data.species);

        return vAnimal
    }

    public async getAllAnimals(): Promise<R.getAllAnimals.ResponseI> {
        const vAnimal = await this.AnimalsSQL.getAllAnimals();

        return vAnimal
    }

    public async searchAnimals(data: R.getAnimalsThroughSearch.RequestI): Promise<R.getAnimalsThroughSearch.ResponseI> {
        const vAnimal = await this.AnimalsSQL.searchAnimals(data.term, data.kingdomid, data.speciesid);

        return vAnimal
    }
}
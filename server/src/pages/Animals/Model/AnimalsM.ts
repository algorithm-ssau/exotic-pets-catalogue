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
}
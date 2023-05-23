import { makeAutoObservable, runInAction } from "mobx";
import IOptions from "../common/interfaces/IOptions";
import IProduct from "../common/interfaces/IProduct";
import { getAllAnimals, getKingdomAnimals, getSpeciesAnimals } from "../common/service/getAnimalS";

class productStore {
  selectedKingdom = 0;

  selectedSpecies = 0;

  products: IProduct[] = [];
  filteredProducts: IProduct[] = []

  constructor() {
    makeAutoObservable(this);
  }

  // getKingdomLabel(value: string) {
  //   const option = this.kingdomOptions.find((option) => option.value === value);
  //   return option?.label;
  // }

  // getSpeciesLabel(value: string) {
  //   const option = this.speciesOptions.find((option) => option.value === value);
  //   return option?.label;
  // }

  async fetchProducts() {
    if (this.selectedSpecies !== 0) {
      const products = await getSpeciesAnimals(this.selectedSpecies);

      runInAction(() => {
        this.products = products;
      });

    } else if (this.selectedKingdom !== 0) {
      const products = await getKingdomAnimals(this.selectedKingdom);

      runInAction(() => {
        this.products = products;
      });

    } else {
      const products = await getAllAnimals();

      runInAction(() => {
        this.products = products;
      });
    }
  }

  setKingdom(value: number) {
    this.selectedKingdom = value;
    this.selectedSpecies = 0;
    this.fetchProducts();
  }

  setSpecies(value: number) {
    this.selectedSpecies = value;
    this.fetchProducts();
  }

  setSpeciesOptions(value: IOptions[]) {
    // this.speciesOptions = value;
    this.fetchProducts();
  }
}

export default new productStore();
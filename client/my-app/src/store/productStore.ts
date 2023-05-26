import { makeAutoObservable, runInAction } from "mobx";
import { getAllAnimals, getKingdomAnimals, getSearchAnimals, getSpeciesAnimals } from "../common/service/getAnimalS";
import IProduct from "../common/interfaces/IProduct";
import ISpecies from "../common/interfaces/ISpecies";

class productStore {
  selectedKingdom = 0;

  selectedSpecies = 0;

  searchingProduct = "";

  speciesOptions: ISpecies[] = [];

  products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async searchProducts() {
    const products = await getSearchAnimals(this.searchingProduct);

    runInAction(() => {
      this.products = products;
    });
  }

  async fetchProducts() {
    if (this.selectedSpecies !== 0) {
      const products = await getSpeciesAnimals(this.selectedSpecies);

      runInAction(() => {
        this.products = products;
      });

    } else if (this.selectedKingdom !== 0) {
      const productsKingdom = await getKingdomAnimals(this.selectedKingdom);

      runInAction(() => {
        this.products = productsKingdom.aAnimals;
        this.speciesOptions = productsKingdom.aSpecies;
      });

    } else {
      const productsKingdom = await getAllAnimals();

      runInAction(() => {
        this.products = productsKingdom.aAnimals;
        this.speciesOptions = productsKingdom.aSpecies;
      });
    }
  }

  setSearchingProducts(value: string) {
    this.searchingProduct = value;
    this.searchProducts();
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
}

export default new productStore();
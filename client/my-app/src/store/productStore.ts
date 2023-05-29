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

  cartProducts: IProduct[] = [];

  favProducts: IProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async searchProducts() {
    const products = await getSearchAnimals(this.selectedKingdom, this.selectedSpecies, this.searchingProduct);

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

  // -------------------------------------
  // Adding and removing from cart methods
  // -------------------------------------

  addToCart = (product: IProduct) => {
    this.cartProducts.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  removeFromCart = (product: IProduct) => {
    this.cartProducts = this.cartProducts.filter(cartProduct => cartProduct.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    this.cartProducts = cart;
  }

  setSummaryPrice() {
    let summaryPrice = 0;
    this.cartProducts.forEach(product => summaryPrice += product.price);

    return (summaryPrice + 2000); // it is not good, change it in the future
  }

  // -------------------------------------
  // Adding and removing from favorites methods
  // -------------------------------------

  addToFav = (product: IProduct) => {
    this.favProducts.push(product);
    localStorage.setItem("favorites", JSON.stringify(this.favProducts));
  }

  removeFromFav = (product: IProduct) => {
    this.favProducts = this.favProducts.filter(favProduct => favProduct.id !== product.id);
    localStorage.setItem("favorites", JSON.stringify(this.favProducts));
  }
}

export default new productStore();
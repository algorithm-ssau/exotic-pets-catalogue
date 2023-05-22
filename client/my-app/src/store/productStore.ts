import { makeAutoObservable, runInAction } from "mobx";
import IOptions from "../common/interfaces/IOptions";
import IProduct from "../common/interfaces/IProduct";
import { getAllAnimals, getKingdomAnimals, getSpeciesAnimals } from "../common/service/getAnimalS";

class productStore {
  selectedKingdom = "all";

  kingdomOptions = [
    {label: "Все", value: "all"},
    {label: "Млекопитающие", value: "1"},
    {label: "Птицы", value: "2"},
    {label: "Рептилии", value: "3"},
    {label: "Земноводные", value: "4"},
    {label: "Рыбы", value: "5"},
    {label: "Насекомые", value: "6"},
    {label: "Паукообразные", value: "7"},
  ]

  selectedSpecies = "all";

  speciesOptions = [
    { label: "Все", value: "all" },
    { label: "Приматы", value: "1" },
    { label: "Лисицы", value: "2" },
    { label: "Попугаи", value: "3" },
    { label: "Совы", value: "4" },
    { label: "Лягушки", value: "5" },
    { label: "Ящерицы", value: "6" },
    { label: "Крокодилы", value: "7" },
    { label: "Черепахи", value: "8" },
    { label: "Кошки", value: "9" },
    { label: "Скорпионы", value: "10" },
    { label: "Пауки", value: "11" },
    { label: "Муравьи", value: "12" },
    { label: "Жуки", value: "13" },
    { label: "Хрящевые рыбы", value: "14" },
    { label: "Костные рыбы", value: "15" },
    { label: "Жабы", value: "16" }
  ];

  products: IProduct[] = [];
  filteredProducts: IProduct[] = []

  constructor() {
    makeAutoObservable(this);
  }

  getKingdomLabel(value: string) {
    const option = this.kingdomOptions.find((option) => option.value === value);
    return option?.label;
  }

  getSpeciesLabel(value: string) {
    const option = this.speciesOptions.find((option) => option.value === value);
    return option?.label;
  }

  async fetchProducts() {
    if (this.selectedSpecies !== "all") {
      const products = await getSpeciesAnimals(this.getSpeciesLabel(this.selectedSpecies));

      runInAction(() => {
        this.products = products;
      });

    } else if (this.selectedKingdom !== "all") {
      const products = await getKingdomAnimals(this.getKingdomLabel(this.selectedKingdom));

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

  setKingdom(value: string) {
    this.selectedKingdom = value;
    this.selectedSpecies = "all";
    this.fetchProducts();
  }

  setSpecies(value: string) {
    this.selectedSpecies = value;
    this.fetchProducts();
  }

  setSpeciesOptions(value: IOptions[]) {
    this.speciesOptions = value;
    this.fetchProducts();
  }
}

export default new productStore();
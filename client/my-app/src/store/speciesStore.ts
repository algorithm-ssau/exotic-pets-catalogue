import { makeAutoObservable } from "mobx";
import IOptions from "../common/interfaces/IOptions";

class ProductStore {
  selectedKingdom = "all";
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

  constructor() {
    makeAutoObservable(this);
  }

  setKingdom(value: string) {
    this.selectedKingdom = value;
  }

  setSpecies(value: string) {
    this.selectedSpecies = value;
  }

  setSpeciesOptions(value: IOptions[]) {
    this.speciesOptions = value;
  }

  filteredProducts() {
    // Filter products based on selected kingdom and species
  }
}

export default new ProductStore();
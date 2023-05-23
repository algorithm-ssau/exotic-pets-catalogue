import { observer } from "mobx-react";
import productStore from "../../../../store/productStore";
import { kingdomFilterT, speciesFilterT } from "../../view/ifc_catalogue";

const Filter = () => {
  const kingdomOptions = [
    {label: "Все", value: kingdomFilterT.all},
    {label: "Млекопитающие", value: kingdomFilterT.mammals},
    {label: "Птицы", value: kingdomFilterT.birds},
    {label: "Рептилии", value: kingdomFilterT.reptiles},
    {label: "Земноводные", value: kingdomFilterT.frogs},
    {label: "Рыбы", value: kingdomFilterT.fish},
    {label: "Насекомые", value: kingdomFilterT.insects},
    {label: "Паукообразные", value: kingdomFilterT.spiders},
  ]
  
  const speciesOptions = [
    { label: "Все", value: speciesFilterT.all },
    { label: "Приматы", value: speciesFilterT.primates },
    { label: "Лисицы", value: speciesFilterT.foxes },
    { label: "Попугаи", value: speciesFilterT.parrots },
    { label: "Совы", value: speciesFilterT.owls },
    { label: "Лягушки", value: speciesFilterT.frogs },
    { label: "Ящерицы", value: speciesFilterT.lizards },
    { label: "Крокодилы", value: speciesFilterT.crocs },
    { label: "Черепахи", value: speciesFilterT.turtle },
    { label: "Кошки", value: speciesFilterT.cats },
    { label: "Скорпионы", value: speciesFilterT.scorpions },
    { label: "Пауки", value: speciesFilterT.spiders },
    { label: "Муравьи", value: speciesFilterT.ants },
    { label: "Жуки", value: speciesFilterT.bugs },
    { label: "Хрящевые рыбы", value: speciesFilterT.fish1 },
    { label: "Костные рыбы", value: speciesFilterT.fish2 },
    { label: "Жабы", value: speciesFilterT.bigFrogs }
  ];

  const handleKingdomChange = (event: any) => {
    const selectedValue = event.target.value;

    productStore.setKingdom(selectedValue);
    
    switch (selectedValue) {
      case "1":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Приматы", value: "1" },
          { label: "Лисицы", value: "2" },
          { label: "Кошки", value: "9" }
        ]);
        break;

      case "2":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Попугаи", value: "3" },
          { label: "Совы", value: "4" }
        ]);
        break;

      case "3":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Ящерицы", value: "6" },
          { label: "Крокодилы", value: "7" },
          { label: "Черепахи", value: "8" }
        ]);
        break;

      case "4":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Лягушки", value: "5" },
          { label: "Жабы", value: "16" }
        ]);
        break;

      case "5":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Хрящевые рыбы", value: "14" },
          { label: "Костные рыбы", value: "15" }
        ]);
        break;

      case "6":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Муравьи", value: "12" },
          { label: "Жуки", value: "13" }
        ]);
        break;

      case "7":
        productStore.setSpeciesOptions([
          { label: "Все", value: "all" },
          { label: "Скорпионы", value: "10" },
          { label: "Пауки", value: "11" }
        ]);
        break;

      default:
        productStore.setSpeciesOptions([
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
        ]);
        break;
    }
  };

  const handleSpeciesChange = (event: any) => {
    const selectedValue = event.target.value;

    productStore.setSpecies(selectedValue);
  };

  return (
    <div className="catalogue-filters">
      <select
        className="filter-list"
        name="kingdom"
        value={productStore.selectedKingdom}
        onChange={handleKingdomChange}
      >
        <option disabled selected hidden value="all">
          Класс животного
        </option>
        {
          kingdomOptions.map((item) => {
            return <option value={item.value} key={item.value}>{item.label}</option>
          })
        }
      </select>

      <select
        className="filter-list"
        name="species"
        value={productStore.selectedSpecies}
        onChange={handleSpeciesChange}
      >
        {speciesOptions
          .map((species) => (
            <option key={species.value} value={species.value}>
              {species.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default observer(Filter);
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
  
  const handleKingdomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: number = +event.target.value;

    productStore.setKingdom(selectedValue);
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: number = +event.target.value;

    productStore.setSpecies(selectedValue);
  };

  return (
    <div className="catalogue-filters">
      <select
        className="filter-list"
        name="kingdom"
        value={productStore.selectedKingdom}
        onChange={(e) => { handleKingdomChange(e) }}
      >
        <option disabled selected hidden value={kingdomFilterT.all}>
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
        onChange={(e) => { handleSpeciesChange(e) }}
      >
        {productStore.speciesOptions
          .map((species) => (
            <option key={species.id} value={species.id}>
              {species.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default observer(Filter);
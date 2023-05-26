import React, { useState } from "react";

import './index.css';

const Filter = () => {

  const [selectedKingdom, setSelectedKingdom] = useState("all");
  const [speciesOptions, setSpeciesOptions] = useState([
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

  const handleKingdomChange = (event: any) => {
    const selectedValue = event.target.value;

    setSelectedKingdom(selectedValue);

    // Определяем список видов животных на основе выбранного класса
    let updatedSpeciesOptions = [];

    switch (selectedValue) {
      case "1":
        updatedSpeciesOptions = [
          { label: "Все", value: "all" },
          { label: "Приматы", value: "1" },
          { label: "Лисицы", value: "2" },
          { label: "Кошки", value: "9" }
        ];
        break;

      case "2":
        updatedSpeciesOptions = [
          { label: "Все", value: "all" },
          { label: "Попугаи", value: "3" },
          { label: "Совы", value: "4" }
        ];
        break;

      case "3":
        updatedSpeciesOptions = [
          { label: "Все", value: "all" },
          { label: "Ящерицы", value: "6" },
          { label: "Крокодилы", value: "7" },
          { label: "Черепахи", value: "8" }
        ];
        break;

      case "4":
        updatedSpeciesOptions = [
          { label: "Все", value: "all" },
          { label: "Лягушки", value: "5" },
          { label: "Жабы", value: "16" }

        ];
        break;

      case "5":
        updatedSpeciesOptions = [
          { label: "Все", value: "all" },
          { label: "Хрящевые рыбы", value: "14" },
          { label: "Костные рыбы", value: "15" }
        ];
        break;

        case "6":
          updatedSpeciesOptions = [
            { label: "Все", value: "all" },
            { label: "Муравьи", value: "12" },
            { label: "Жуки", value: "13" }
          ];
          break;

        case "7":
          updatedSpeciesOptions = [
            { label: "Все", value: "all" },
            { label: "Скорпионы", value: "10" },
            { label: "Пауки", value: "11" }
          ];
          break;

          default:
            updatedSpeciesOptions = [
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
            break;
    }
    
    setSpeciesOptions(updatedSpeciesOptions);
  };

  return (
    <div className="catalogue-filters">
      <select
        className="filter-list"
        name="kingdom"
        value={selectedKingdom}
        onChange={handleKingdomChange}
      >
        <option disabled value="all">
          Класс животного
        </option>
        <option value="all">Все</option>
        <option value="1">Млекопитающие</option>
        <option value="2">Птицы</option>
        <option value="3">Рептилии</option>
        <option value="4">Земноводные</option>
        <option value="5">Рыбы</option>
        <option value="6">Насекомые</option>
        <option value="7">Паукообразные</option>
      </select>

      <select className="filter-list" name="species">
        {speciesOptions.map((species) => (
          <option key={species.value} value={species.value}>
            {species.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
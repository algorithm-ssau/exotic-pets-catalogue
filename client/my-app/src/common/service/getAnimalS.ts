import IKingdom from "../interfaces/IKingdom";
import IProduct from "../interfaces/IProduct";
import { fSend } from "./fetchS";
import config from "../../config.json"

const IP = config.IP;

export async function getSpeciesAnimals(species?: number): Promise<IProduct[]> {
    const response = await fSend('/animals/get-species', {species});

    return response.data;
}

export async function getKingdomAnimals(kingdom?: number): Promise<IKingdom> {
    const response = await fSend('/animals/get-kingdom', {kingdom});

    return response.data;
}

export async function getAllAnimals(param?: string): Promise<IKingdom> {
    const response = await fetch(`http://${IP}:5000/animals/get-all`);

    return response.json();
}

export async function getSearchAnimals(kingdomid: number, speciesid: number, term: string): Promise<IProduct[]> {
    const response = await fSend("/animals/search", {kingdomid, speciesid, term});

    return response.data;
}
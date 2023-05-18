import IProduct from "../interfaces/IProduct";

export async function getSpeciesAnimals(species?: string): Promise<IProduct[]> {
    const response = await fetch('http://25.13.222.253:5000/animals/get-species', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            species: species
        })
    })

    return response.json();
}

export async function getKingdomAnimals(kingdom?: string): Promise<IProduct[]> {
    const response = await fetch('http://25.13.222.253:5000/animals/get-kingdom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            kingdom: kingdom
        })
    })

    return response.json();
}

export async function getAllAnimals(param?: string): Promise<IProduct[]> {
    const response = await fetch('http://25.13.222.253:5000/animals/get-all');

    return response.json();
}
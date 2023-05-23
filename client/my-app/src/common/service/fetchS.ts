import axios from "axios";

export async function fSend(route: string, data: { [key: string]: any; }) {
    const IP = 'localhost';

    const vAxios = axios.create();

    return await vAxios.post(`http://${IP}:5000${route}`, data);
}
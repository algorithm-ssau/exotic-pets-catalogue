import axios from "axios";
import config from "../../config.json"

const IP = config.IP;

export async function fSend(route: string, data: { [key: string]: any; }) {
    const vAxios = axios.create();

    return await vAxios.post(`http://${IP}:5000${route}`, data);
}
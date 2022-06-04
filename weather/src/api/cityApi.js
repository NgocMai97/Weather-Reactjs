import axios from "axios";
import axiosClient from "./axiosClient";


const q = 'danang'
const units = 'metric'
const appid = 'd7b92a13c253bdd1a0d71bb9fe77985f'


const cityApi = {
    getAll() {
        const url = '/data/2.5/weather';
        return axiosClient.get(url, {
            params: {
                q,
                units,
                appid
            }
        });
    },

    get(id) {
        const url = `/products/${id}/`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/products/`;
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/products/${data.id}/`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}/`;
        return axiosClient.delete(url);
    },
}

export default cityApi;

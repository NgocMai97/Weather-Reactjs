import axios from "axios";
import axiosClient from "./axiosClient";


const lat = '21.030653'
const lon = '105.847130'
const units = 'metric'
const appid = 'd7b92a13c253bdd1a0d71bb9fe77985f'


const weatherApi = {
    getAll() {
        const url = '/data/2.5/onecall';
        return axiosClient.get(url, {
            params: {
                lat,
                lon,
                units,
                appid
            }
        });
    },

    get(lat, lon) {
        const url = `/data/2.5/onecall`;
        return axiosClient.get(url,  {
            params: {
                lat,
                lon, 
                units,
                appid
            }
        });
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

export default weatherApi;

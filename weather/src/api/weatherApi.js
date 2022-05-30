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

    get(id) {
        const url = `/products/${id}/`;
        return axiosClient.get(url);
    }
}

export default weatherApi;

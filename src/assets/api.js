import axios from "axios"

export const handleApi = () => {
    return axios.get('https://santosnr6.github.io/Data/events.json')
        .then(res => {
            return res.data})
        .catch(error => {
            console.error('Error fetching data from API:', error);
            throw error; // Kasta vidare felet om det behövs hanteras ytterligare
        });
};

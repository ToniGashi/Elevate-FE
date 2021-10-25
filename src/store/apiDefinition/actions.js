import axios from 'axios'
import state from './state'

export default {
    async getApiDef(context) {
        await getAllStartups(context);
        console.log(state.startups);
    }
}

async function getAllStartups({commit}) {
    await axios.get('http://localhost:4000/startups', {
        withCredentials: true,
        })
        .then((response) => {
            commit("setStartups", response.data.startupList);
        })
        .catch((e) => {
            console.log(e);
        });
}
import axios from 'axios'
import state from './state'

export default {
    async getApiDef(context) {
        await getAllProjects(context);
    }
}

async function getAllProjects({commit}) {
    await axios.get('http://localhost:4000/projects', {
        withCredentials: true,
        })
        .then((response) => {
            commit("setProjects", response.data.projectList);
        })
        .catch((e) => {
            console.log(e);
        });
}

import axios from "axios"

export default {
    //Users API
    getUsers: () => axios.get("api/users"),

    //Stats API
    getStats: () => axios.get("api/stats"),

    //Games API
    getGames: () => axios.get("api/games")
}
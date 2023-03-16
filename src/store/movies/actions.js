import axios from "axios"
import ApiRoutes from "@/ApiRoutes"

export default {
    async fetchMovies(context) {
        if (context.getters['movies/hasUpcommingMovies']) {
            return
        }
        await axios.get(ApiRoutes.upcommingMovies)
        .then(function (response) {
            if (response.status === 200) {
                context.commit('saveUpcommingMovies', response.data)
            } else {
                console.log('Something went wrong')
            }
        })
    },
    async fetchMovieDetail(context, payload) {
        if (Object.keys(context.movieDetail).length !== 0 && context.movieDetail.id === payload.id) {
            return
        }
        await axios.get(ApiRoutes.movieDetail + payload.id)
        .then(function (response) {
            if (response.status === 200) {
                context.commit('saveMovieDetail', response.data)
            } else {
                console.log('Something went wrong')
            }
        })
    },
    async filterMovies(context, payload) {
        if (context.searchQuery !== "" && context.searchQuery === payload.query) {
            return
        }
        context.searchQuery = payload.query
        await axios.get(ApiRoutes.filterMovie + payload.query)
        .then(function (response) {
            if (response.status === 200) {
                context.commit('saveFilteredMovies', response.data)
            } else {
                console.log('Something went wrong')
            }
        })
    }
}
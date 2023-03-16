import axios from "axios"
import { useLoading } from "vue3-loading-overlay";
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import axiosConfig from "../../../axios.config";

const loader = useLoading()

export default {
    fetchUpcommingMovies(state) {
        if (state.upcommingMovies.length > 0) {
            return
        }
        loader.show()
        axios.get(axiosConfig.apiBaseUrl+'ComingSoon/'+axiosConfig.apiKey)
        .then(function (response) {
            loader.hide()
            if (response.status == 200) {
                response.data.items.forEach(element => {
                    state.upcommingMovies.push(element)
                });
            } else {
                console.log('Something went wrong')
            }
        })
    },
    fetchMovieDetail(state, payload) {
        if (state.movieDetail.id != undefined && state.movieDetail.id == payload.id) {
            return
        }
        loader.show();
        axios.get(axiosConfig.apiBaseUrl+'Title/'+axiosConfig.apiKey+'/'+ payload.id)
        .then(function (response) {
            loader.hide()
            if (response.status == 200) {
                state.movieDetail = {
                    id: response.data.id,
                    title: response.data.title,
                    plot: response.data.plot,
                    fullTitle: response.data.fullTitle,
                    year: response.data.year,
                    image: response.data.image,
                    releaseDate: response.data.releaseDate,
                    imDbRating: response.data.imDbRating,
                    genres: response.data.genres
                }
            } else {
                console.log('Something went wrong', state)
            }
        })
    }
}
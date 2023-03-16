import axiosConfig from "../axios.config"

export default {
    upcommingMovies: axiosConfig.apiBaseUrl+'ComingSoon/'+axiosConfig.apiKey,
    movieDetail: axiosConfig.apiBaseUrl+'Title/'+axiosConfig.apiKey+'/',
    filterMovie: axiosConfig.apiBaseUrl+'SearchMovie/'+axiosConfig.apiKey+'/'
}
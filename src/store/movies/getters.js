export default {
    upcommingMovies(state) {
        return state.upcommingMovies
    },
    filteredMovies(state) {
        return state.filteredMovies
    },
    hasUpcommingMovies(state) {
        return state.upcommingMovies.length > 0
    },
    hasFilteredMovies(state) {
        return state.filteredMovies.length > 0
    },
    getMovieDetail(state) {
        return state.movieDetail
    }
}
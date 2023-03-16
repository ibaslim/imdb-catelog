export default {
    getMovies(state) {
        let module = ""
        let moviesArray = []
        if (state.filteredMovies.length > 0) {
            module = "Filtered Movies"
            moviesArray = state.filteredMovies
        } else {
            module = "Upcomming Movies"
            moviesArray = state.upcommingMovies
        }
        return {
            moduleTitle: module,
            moviesArray: moviesArray
        }
    },
    upcommingMovies(state) {
        return state.upcommingMovies
    },
    filteredMovies(state) {
        return state.filteredMovies
    },
    hasUpcommingMovies(state) {
        return state.upcommingMovies.length > 0 ? true : false
    },
    hasFilteredMovies(state) {
        return state.filteredMovies.length > 0 ? true : false
    },
    getMovieDetail(state) {
        return state.movieDetail
    }
}
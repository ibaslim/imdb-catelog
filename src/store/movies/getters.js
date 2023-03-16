export default {
    upcommingMovies(state) {
        return state.upcommingMovies
    },
    filteredMovies(state) {
        return state.filteredMovies
    },
    hasFilteredMovies(state) {
        return state.filteredMovies.length > 0
    }
}
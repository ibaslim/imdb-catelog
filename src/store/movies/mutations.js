export default {
    saveUpcommingMovies(state, payload) {
        payload.items.forEach(element => {
            state.upcommingMovies.push(element)
        });
    },
    saveFilteredMovies(state, payload) {
        payload.results.forEach(element => {
            state.filteredMovies.push(element)
        });
    },
    saveMovieDetail(state, payload) {
        state.movieDetail = {
            id: payload.id,
            title: payload.title,
            plot: payload.plot,
            fullTitle: payload.fullTitle,
            year: payload.year,
            image: payload.image,
            releaseDate: payload.releaseDate,
            runtimeStr: payload.runtimeStr,
            imDbRating: payload.imDbRating,
            genres: payload.genres
        }
    }
}
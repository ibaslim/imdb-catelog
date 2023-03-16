export default {
    fetchMovies(context) {
        context.commit('fetchUpcommingMovies')
    },
    fetchMovieDetail(context, payload) {
        context.commit('fetchMovieDetail', payload)
    }
}
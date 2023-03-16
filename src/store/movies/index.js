import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
    namespaced: true,
    state() {
        return {
            upcommingMovies: [],
            filteredMovies: [],
            movieDetail: {
                id: "tt0110413",
                title: "Léon: The Professional",
                plot: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin... Read all",
                fullTitle: "Léon: The Professional (1994)",
                year: "1994",
                image: "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6762_AL_.jpg",
                releaseDate: "1994-11-18",
                runtimeStr: "1h 50min",
                imDbRating: "8.5",
                genres: "Action, Crime, Drama"
            }
        }
    },
    actions,
    getters,
    mutations
}
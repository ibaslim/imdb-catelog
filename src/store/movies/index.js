import actions from './actions'
import getters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            upcommingMovies: [
                {
                    id: "tt15654800"
                },
                {
                    id: "tt15654800"
                },
                {
                    id: "tt15654800"
                },
                {
                    id: "tt15654800"
                }
            ]
        }
    },
    actions,
    getters
}
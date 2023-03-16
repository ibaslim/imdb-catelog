<template>
    <div>
        <filter-movies @notify-parent="getMovies"></filter-movies>
        <movies-list v-bind:moviesArray="moviesArray"></movies-list>
    </div>
</template>

<script>
import MoviesList from './movies/MoviesList.vue';
import FilterMovies from './movies/FilterMovies.vue';

export default {
    data() {
        return {
            moviesArray: []
        }
    },
    async created() {
        await this.$store.dispatch('movies/fetchMovies')
        this.getMovies()
    },
    methods: {
        getMovies() {
            let resp = this.$store.getters['movies/getMovies']
            this.moviesArray = resp.moviesArray
            this.moviesArray.moduleTitle = resp.moduleTitle
        }
    },
    components: {
        MoviesList: MoviesList,
        FilterMovies: FilterMovies
    }
}
</script>
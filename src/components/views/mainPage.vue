<template>
    <div>
        <filter-movies></filter-movies>
        <movies-list></movies-list>
    </div>
</template>

<script>
import MoviesList from './movies/MoviesList.vue';
import FilterMovies from './movies/FilterMovies.vue';

export default {
    created() {
        this.$store.dispatch('movies/fetchMovies')
    },
    components: {
        MoviesList: MoviesList,
        FilterMovies: FilterMovies
    }
}
</script>
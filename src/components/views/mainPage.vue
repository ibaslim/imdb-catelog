<template>
    <div>
        <movies-list></movies-list>
    </div>
</template>

<script>
import MoviesList from './movies/MoviesList.vue';
export default {
    mounted() {
        // this.$store.dispatch('movies/fetchMovies')
    },
    components: {
        MoviesList: MoviesList
    }
}
</script>
<template>
    <div>
        <movies-list></movies-list>
    </div>
</template>

<script>
import MoviesList from './movies/MoviesList.vue';
export default {
    components: {
        MoviesList: MoviesList
    }
}
</script>
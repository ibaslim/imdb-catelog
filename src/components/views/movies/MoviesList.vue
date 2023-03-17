<template>
    <div class="bg-grey-darkest">
        <div class="font-bold mb-4 mt-5 text-2xl text-center text-teal-dark">{{ moduleTitle }}</div>
        <ul class="flex flex-wrap justify-center px-12">
            <li v-for="movie in movies" :key="movie.id" style="list-style: none;" class="bg-blue-darkest border border-blue-darker px-4 py-2 text-teal lg:w-1/6 sm:w-1/3 mx-2 my-2">
                <list-item v-bind:movie="movie"></list-item>
            </li>
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    props: ['moviesArray'],
    data() {
        return {
            moduleTitle: this.moviesArray.moduleTitle,
            movies: this.moviesArray
        }
    },
    watch: {
        moviesArray: function(moviesArray) {
            this.movies = moviesArray
            this.moduleTitle = moviesArray.moduleTitle
        }
    },
    components: {
        ListItem: ListItem
    }
}
</script>
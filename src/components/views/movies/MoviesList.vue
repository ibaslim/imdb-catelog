<template>
    <div class="bg-grey-darkest">
        <div class="font-bold mb-4 mt-5 text-2xl text-center text-teal-dark">Movies List</div>
        <ul class="flex flex-wrap justify-center px-12">
            <li v-for="item in upcommingMovies" :key="item.id" style="list-style: none;" class="bg-blue-darkest border border-blue-darker px-4 py-2 text-teal lg:w-1/5 sm:w-1/3 mx-2 my-2">
                <list-item></list-item>
            </li>
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    computed: {
        upcommingMovies() {
            return this.$store.getters['movies/upcommingMovies']
        }
    },
    components: {
        ListItem: ListItem
    }
}
</script>
<template>
    <div>
        <div class="text-center">{{ localMovie.title }}</div>
        <a class="focus:outline-none" :href="getDetailRoute">
            <div class="flex justify-center">
                <img class="" :src="localMovie.image" alt="">
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['movie'],
    data() {
        return {
            localMovie: this.movie
        }
    },
    computed: {
        getDetailRoute() {
            return 'movies/'+this.localMovie.id
        }
    }
}
</script>
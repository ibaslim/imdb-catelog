<template>
    <div>
        <div class="ml-4 mt-5">
            <a style="text-decoration: none;" class="bg-teal-dark border-2 border-teal-dark px-2 py-1 rounded text-green-lightest" href="/">{{ labels.backToHome }}</a>
        </div>
        <div class="bg-blue-darkest container lg:w-1/3 mt-5 mx-4 px-5 py-5 sm:w-full">
            <h1 class="my-3 text-2xl text-teal-dark">{{ detail.fullTitle }}</h1>
            <div>
                <span class="font-bold mr-3 text-grey-dark">{{ labels.imDbRating }}:</span>
                <span class="text-teal-dark">{{ detail.imDbRating }}</span>
            </div>
            <div>
                <span class="font-bold mr-3 text-grey-dark">{{ labels.genres }}:</span>
                <span class="text-teal-dark">{{ detail.genres }}</span>
            </div>
            <div>
                <span class="font-bold mr-3 text-grey-dark">{{ labels.releaseDate }}:</span>
                <span class="text-teal-dark">{{ detail.releaseDate }}</span>
            </div>
            <div>
                <span class="font-bold mr-3 text-grey-dark">{{ labels.duration }}:</span>
                <span class="text-teal-dark">{{ detail.runtimeStr }}</span>
            </div>
            <div>
                <span class="font-bold mr-3 text-grey-dark">{{ labels.plot }}:</span>
                <span class="text-teal-dark">{{ detail.plot }}</span>
            </div>
            <div class="border-2 border-teal-dark mt-3 rounded-sm"><img :src="detail.image" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                labels: {
                    imDbRating: "IMDB Rating",
                    genres: "Genres",
                    releaseDate: "Release Date",
                    duration: "Duration",
                    plot: "Plot",
                    backToHome: "Back"
                },
                detail: {}
            }
        },
        async created() {
            await this.$store.dispatch('movies/fetchMovieDetail', {id: this.id})
            this.detail = this.$store.getters['movies/getMovieDetail']
        }
    }
</script>
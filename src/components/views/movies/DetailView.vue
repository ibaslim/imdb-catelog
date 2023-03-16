<template>
    <div>
        <p>{{ detail.title }}</p>
        <img v-bind:src="detail.image" alt="">
        <p>{{ detail.plot }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                detail: {}
            }
        },
        props: ['id'],
        async created() {
            await this.$store.dispatch('movies/fetchMovieDetail', {id: this.id})
            this.detail = this.$store.getters['movies/getMovieDetail']
        }
    }
</script>
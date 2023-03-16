<template>
    <div>
        <div class="text-center">{{ localMovie.title }}</div>
        <a class="focus:outline-none" href="javascript:void(0);">
            <div class="flex justify-center">
                <img class="" v-bind:src="localMovie.image" alt="">
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
    }
}
</script>
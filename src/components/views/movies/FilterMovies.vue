<template>
    <div class="bg-blue-darker flex h-10 justify-center">
        <div class="flex mr-4 mt-2">
            <div>
                <label class="mr-2 text-teal-dark text-xl">{{ labels.search }}</label>
            </div>
            <div>
                <input @keyup.enter="search" class="focus:outline-none pl-1" type="text" v-model="query">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labels: {
                    search: "Search"
                },
                query: "",
            }
        },
        methods: {
            search() {
                this.$store.dispatch('movies/filterMovies', { query: this.query })
            }
        },
    }
</script>
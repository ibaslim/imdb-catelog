import axios from "axios"
import { useLoading } from "vue3-loading-overlay";
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default {
    fetchMovies(state) {
        const loader = useLoading()
        loader.show()
        axios.get('https://imdb-api.com/en/API/ComingSoon/k_annbquyf')
        .then(function (response) {
            loader.hide()
            if (response.status == 200) {
                response.data.items.forEach(element => {
                    state.upcommingMovies.push(element)
                });

            } else {
                console.log('Something went wrong')
            }
        })
    }
}
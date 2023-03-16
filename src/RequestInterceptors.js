import axios from "axios";
import { useLoading } from "vue3-loading-overlay";
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const loader = useLoading()

export default function setup() {
    axios.interceptors.request.use( req => {
        loader.show()
        return req
    });
    axios.interceptors.response.use(res => {
        loader.hide()
        return res
    });
}
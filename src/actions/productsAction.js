import axios from 'axios'
import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice'
export const getProducts = (keyword, category, gt, lt) => async (dispatch) => {
    try {
        dispatch(productsRequest());
        let link = "/api/products?";
        const params = [];
        if (keyword) {
            params.push(`keyword=${keyword}`);
        }
        if (category) {
            params.push(`category=${category}`);
        }
        if (gt) {
            params.push(`price[gt]=${gt}`);
        }
        if (lt) {
            params.push(`price[lt]=${lt}`);
        }
        link += params.join("&");
        console.log(link);
        const { data } = await axios.get(link);

        dispatch(productsSuccess(data));
    } catch (error) {
        dispatch(productsFail(error.response.data.message));
    }
};
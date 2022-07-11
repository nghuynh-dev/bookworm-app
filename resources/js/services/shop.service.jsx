import Repository from './repository'
<<<<<<< HEAD
import { getBookById } from "../actions";
=======
import {getBookById} from "../actions";
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703

class ShopService {
    async getType() {
        const endpoint = 'books/type'
        const response = await Repository.get(endpoint)
        return response
    }
<<<<<<< HEAD
    async getBookDefault(query_string) {
=======
    async getBookDefault(query_string){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        const endpoint = `books/filter?${query_string}`
        const response = await Repository.get(endpoint)
        return response
    }
<<<<<<< HEAD
    async getBookById(id) {
=======
    async getBookById(id){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        const endpoint = `reviews/${id}`
        const response = await Repository.get(endpoint)
        return response
    }
}
export default new ShopService()

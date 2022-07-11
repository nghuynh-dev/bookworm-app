import Repository from './repository'

<<<<<<< HEAD
class CartService {
    async postCartToDb(data) {
=======
class CartService{
    async postCartToDb(data){
>>>>>>> d9685d60ef33f6005776fca24a3d3bf39cd54703
        const endpoint = 'orders'
        const response = await Repository.post(endpoint, data)
        return response
    }
}
export default new CartService()

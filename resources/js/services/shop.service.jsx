import Repository from './repository'

class ShopService{
    async getType(){
        const endpoint = 'books/type'
        const response = await Repository.get(endpoint)
        return response
    }
}
export default new ShopService()

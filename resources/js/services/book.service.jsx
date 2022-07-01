import Repository from './repository'

class BookService {
    async getBookBanner() {
        const endpoint = '/books/sale'
        const response = await Repository.get(endpoint)
        return response
    }
}
export default new BookService()

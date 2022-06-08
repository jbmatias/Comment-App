import BaseService from '../base.service'

export default class CommentService extends BaseService {

    constructor() {
        super();
    }

    create(data) {
        const url = `${this.baseURL}/store`
        return super.post(url, data)
    }

    all() {
        const url = `${this.baseURL}/comments`
        return super.get(url)
    }
}

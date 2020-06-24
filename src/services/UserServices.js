
class UserServices {
    constructor(axios) {
        this.axios = axios;
    }

    get() {
        return this.axios.get(`/?randomapi`).then(res => {

            return res.data.results
        });
    }

    like() {

    }
}

export default UserServices;
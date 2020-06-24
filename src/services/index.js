
import UserServices  from './UserServices';
import axios        from '../axiosConfig';
const userServices = new UserServices(axios);

export {
    userServices
}
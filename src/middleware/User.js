import {UserService} from "../services";

export const user = () =>  {
    return UserService.then(result => {
        return {
            result
        }
    })
};
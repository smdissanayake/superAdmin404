import Auth from './Auth'
import UserController from './UserController'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
UserController: Object.assign(UserController, UserController),
}

export default Controllers
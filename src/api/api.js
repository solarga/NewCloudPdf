import service from "./http"
import config from "./config"
export const httpUser = {
    login(data) { return service.post(config.login, data) },
    signUp(data) { return service.post(config.signUp, data) },
    changePassword() { return service.put }
}
export const httpFile = {}

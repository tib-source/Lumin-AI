import store from "./store.js"


export const getProdBackend = () => {
    const { backendUrl } = store.getState().general
    return backendUrl
}

export const getDevBackend = () => {
    const { devBackend } = store.getState().general
    return devBackend
}
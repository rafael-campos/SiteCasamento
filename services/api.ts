import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";


export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);
    const api = axios.create({
        baseURL: 'https://backend.marcelaerogerio.com.br:3331/',
        headers: {
            Authorization: `Bearer ${cookies.accessTokenRafael}`
        }
    })
    api.interceptors.request.use(
        async function (config) {
            const cookies = parseCookies();
            if (cookies.refreshTokenRafael) {
                if (cookies.accessTokenRafael) {
                    config.headers['Authorization'] = 'Bearer ' + cookies.accessTokenRafael
                } else {
                    const response = await axios.post('https://backend.marcelaerogerio.com.br:3331/auth/refresh', undefined, {
                        headers: {
                            Authorization: `Bearer ${cookies.refreshTokenRafael}`
                        }
                    })
                    config.headers['Authorization'] = 'Bearer ' + response.data.accessToken
                    if (cookies.lembrarRafael === 'false') {
                        setCookie(undefined, 'accessTokenRafael', response.data.accessToken, {
                            maxAge: 60 * 5,
                            path: "/"
                        })

                        setCookie(undefined, 'refreshTokenRafael', response.data.refreshToken, {
                            path: '/'
                        })
                        setCookie(undefined, 'lembrarRafael', 'false', {
                            path: '/'
                        })

                    } else if (cookies.lembrarRafael === 'true') {
                        setCookie(undefined, 'accessTokenRafael', response.data.accessToken, {
                            maxAge: 60 * 5,
                            path: "/"
                        })

                        setCookie(undefined, 'refreshTokenRafaelRafael', response.data.refreshToken, {
                            maxAge: 60 * 60 * 24 * 7,
                            path: '/'
                        })
                        setCookie(undefined, 'lembrarRafael', 'true', {
                            maxAge: 60 * 60 * 24 * 7,
                            path: '/'
                        })
                    }
                }
            }
            return config
        },
        function (error) {
            // Faça algo com erros de solicitação
            return Promise.reject(error);
        }
    )
    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response?.status === 401) {
            // qualquer error 401 (nao autorizado) devemos deslogar o usuario
            if (typeof window !== "undefined") {
                console.log("ola")
            } else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error);
    })

    return api;
}

function signOut() {
    throw new Error("Function not implemented.");
}

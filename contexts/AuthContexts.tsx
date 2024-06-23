import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { api } from '../services/apiClient'
import { toast } from 'react-toastify'

import path from "path";


type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
    id: string;
    nome: string;
    username: string;
}
type SignInProps = {
    email: string;
    senha: string;
    lembrar: boolean;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(null, 'lembrar',{
            path:'/'
        })
        destroyCookie(null, 'lembrar',{
            path:'/'
        })
        destroyCookie(null, 'lembrar',{
            path:'/'
        })
        Router.push('/')
    } catch {
        console.log('erro ao deslogar')
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;
    const [usuaario, setUsuario] = useState('')


    async function signIn({ email, senha, lembrar }: SignInProps) {
        await api.post('/auth/login', {
            email,
            password: senha
        }).then((response) => {
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreshToken


            if (lembrar === false) {
                setCookie(undefined, 'accessTokenCafe', accessToken, {
                    maxAge: 60 * 5,
                    path: "/"
                })

                setCookie(undefined, 'refreshTokenRafael', refreshToken, {
                    path: '/'
                })
                setCookie(undefined, 'lembrarRafael', 'false', {
                    path: '/'
                })

            } else if (lembrar === true) {
                setCookie(undefined, 'accessTokenRafael', accessToken, {
                    maxAge: 60 * 5,
                    path: "/"
                })

                setCookie(undefined, 'refreshTokenRafael', refreshToken, {
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/'
                })
                setCookie(undefined, 'lembrarRafael', 'true', {
                    maxAge: 60 * 60 * 24 * 7,
                    path: '/'
                })

            }

            Router.push('/dashboard');
            toast.success('Logado com sucesso!')
        }).catch((error) =>{
            console.log(error);
            toast.error("Dados incorreto!")
        })




       
    }

    async function signUp({ name, email, password }: SignUpProps) {
        try {
            const response = await api.post('/user/add', {
                name,
                email,
                password
            })

            toast.success("Conta criada com sucesso!")



            Router.push('/login')
        } catch (error) {
            toast.error("Erro ao criar conta!")
            console.log("error ao cadastrar", error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

import { AuthContext } from "@/contexts/AuthContexts";
import { url } from "@/global/variaveis";
import { Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useContext } from "react";
type FieldType = {
    email: string;
    senha: string;
    lembrar: boolean;
};

export default function Login() {
    const { signIn } = useContext(AuthContext);

    const login = async (data: FieldType) => {
        await signIn(data);
    };
    return (
        <div className="bg-gray-400 w-full h-[100vh] flex justify-center items-center ">
            <div className="bg-black/40 w-[30%]  py-10 rounded-xl px-10">
                <p className="text-white font-bold text-4xl text-center">Login</p>
                <Form onFinish={login} layout="vertical" className="mt-6">
                    <Form.Item name='email'
                        label={<p className="text-white text-xl font-bold">Email</p>}
                        rules={[{ required: true, message: 'Por favor insira o email!' }, { type: 'email', message: "Email inválido!" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='senha'
                        label={<p className="text-white  text-xl font-bold">Senha</p>}
                        rules={[{ required: true, message: 'Por favor insira a senha!' }]}>
                        <Input.Password />
                    </Form.Item>


                    <Form.Item name='lembrar' initialValue={true} valuePropName="checked">
                        <Checkbox className="text-white text-lg">Lembrar-me</Checkbox>
                    </Form.Item>


                    <div className="flex justify-center items-center">
                        <button className="bg-blue-600 px-6 py-2 text-white rounded-md">Entrar</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export async function getServerSideProps({ query, req }: any) {

    if (req.cookies.refreshTokenRafael) {
      const resposta = await axios.post(url + 'auth/refresh', undefined, { headers: { Authorization: `Bearer ${req.cookies.refreshTokenRafael}`} })
      if (resposta.data) {
  
        return {
          redirect: {
            destination: "/dashboard",
            permanent: false,
        },
        }
      } else {
        return {
          props: {
            usuario: resposta.data
          }
        }
      }
    } else {
      return {
        props: {
          usuario: ''
        }
      }
    }
  }
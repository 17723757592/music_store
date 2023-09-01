import axios from "axios";
import store from "@/store";

const service = axios.create({
    baseURL: process.env.BASE_API,    // 请求前置连接
    timeout: 10 * 1000, // 超时时间
    // withCredentials: false, // 跨域问题时设置
})

service.interceptors.request.use(
    (config) => {

        if (store.state.user && store.state.user.authorization) {
            config.headers.Authorization = store.state.user.authorization
        }
        return config
    },
    (error) => {
        // 弹窗提示
        console.log(error);
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    (response) => {
        /**
         * 1、鉴权：401，403: 
         *      1、退出登录 
         *      2、重新鉴权：
         *          1、失败退出登录
         *          2、成功再次发起请求
         * 2、错误信息弹窗提示，并返回错误信息
         * 2xx
         * 
         * {
            code: 200,
            data: {},
            message: 'success'
           }
         */

        console.log('-----');
        console.log(response);

        const res = response.data

        if (res.code >= 200 && res.code < 300) {
            return res
        }

        if ([401, 403].includes(res.code)) {
            // 退出登录
        }

        // 弹窗提示
        console.log(res.code);
        return Promise.reject(new Error(res.message))

    },
    (error) => {

        return Promise.reject(error)
    }
)

export default service
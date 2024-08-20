import axios from "axios"

// 创建一个 Axios 实例
const AxiosInstance = axios.create({
  baseURL: "https://api.example.com", // 设置基本URL
  timeout: 5000, // 设置超时时间
  headers: { Authorization: "Bearer " + token } // 设置请求头
})

// 添加请求拦截器
AxiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理，比如添加loading效果
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
AxiosInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理，比如解析响应结果
    return response
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default AxiosInstance
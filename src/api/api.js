// import axios from "axios"
import httpAxios from "../utils/request"
// 登录
export const login = (params)=>httpAxios.post('/login',params)
// 注册
export const register = (params)=>httpAxios.post('/register',params)
// 投票
export const allVote = ()=>httpAxios.get('/vote/allVote');
// 添加投票
export const newVote = (params)=>httpAxios.post('/vote/newvote',params)

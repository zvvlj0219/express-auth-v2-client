import axios from 'axios';

const url = 'auth';

class authService {
  //login
  static login(email,password){
    console.log('authservice login')
    return axios.post(`${url}/login`,{
      email:email,
      password:password
    })
  }
  //register
  static register(email,username,password){
    console.log('authservice register')
    return axios.post(`${url}/register`,{
      email:email,
      username:username,
      password:password
    })
  }

  //logout 
  static logout(){
    console.log('logout')
    return axios.get(`${url}/logout`)
  }

  //access to posts
  static home(){
    return axios.get('/home')
  }
}

export default authService;
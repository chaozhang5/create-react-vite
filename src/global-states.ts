import resso from 'resso'

interface IUserState {
  userName: string
  password: string
}

export const UserStore = resso({
  state: {
    userName: '',
    password: ''
  } as IUserState,
  login: () => {
    localStorage.setItem('token', 'test')
  },
  getToken: () => {
    return localStorage.getItem('token')
  }
})

export interface IUserLogin {
  email?: string,
  password?: string,
}

export interface UserLoginResponse {
  status: boolean,
  message: string,
  data: UserDataLoginResponse
}

export interface UserDataLoginResponse {
  _id: string,
  email: string,
  role: string,
  mobile?: string,
  token: string
}

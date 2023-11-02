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

export interface IUserRegister {
  email: string | null | undefined,
  password: string | null | undefined,
  fullName: string | null | undefined,
  mobile: string | null | undefined,
  address: string | null | undefined,
}

export interface UserRegisterResponse {
  status: boolean,
  message: string,
  data: UserDataRegisterResponse
}

export interface UserDataRegisterResponse {
  fullName: string,
  email: string,
  mobile: string,
  password: string,
  address: string,
  _id: string,
}

import { Buffer } from 'buffer'

// Save token to local storage
export const setToken = (token) => {
  window.localStorage.setItem('rcf-ani-token', token)
  console.log('set token')
}

// Call token from storage
export const getToken = () => {
  return window.localStorage.getItem('rcf-ani-token')
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return
  const splitToken = token.split('.')
  if (splitToken.length < 3) return
  return JSON.parse(Buffer.from(splitToken[1], 'base64'))
}

export const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return
  const currentTime = Math.round(Date.now() / 1000)
  return currentTime < payload.exp
}

// ! GET LOGIN TEXT
let loginText = ''
export const getText = (text) => {
  loginText = text
  console.log('loginText-->', loginText)
  return loginText
}

// ! DISPLAY LOGIN TEXT
export const loginTextDisplay = () => {
  const text = loginText
  console.log(text)
  return <span className="nav-logged-in">{text}</span>
}

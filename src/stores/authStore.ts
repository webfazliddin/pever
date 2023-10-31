import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ILoginPayload, IRegisterPayload } from '@/types'
import API from '@/api/API'

export const useAuthStore = defineStore('authStore', () => {
  const isLoggedIn = ref(false)

  // const checkAuth = () => {
  //     return API.then((response: any) => {
  //         isLoggedIn.value = true
  //         const token = response?.data.token
  //         token && localStorage.setItem('peverAppToken', token)

  //         return response
  //     })
  // }
  const login = (payload: ILoginPayload) => {
    return API.login(payload).then((response: any) => {
      isLoggedIn.value = true

      const token = response?.data?.token
      token && localStorage.setItem('peverAppToken', token)
      document.cookie = `access_token=${response.data.token};`

      return response
    })
  }

  const regiter = (payload: IRegisterPayload) => {
    return API.register(payload).then((response: any) => {
      isLoggedIn.value = true

      const token = response?.data?.token
      token && localStorage.setItem('peverAppToken', token)

      return response
    })
  }

  const logout = () => {
    localStorage.removeItem('loginErpSportAppToken')
    isLoggedIn.value = false
  }

  return { login, logout, regiter }
})

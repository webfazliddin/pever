import client from '@/api'
import type { ILoginPayload, IRegisterPayload } from '@/types'

export default {
  // getAuth: () => {
  //   return client.post("/api/auth").then((response: any) => {
  //     return response;
  //   });
  // },
  login: (payload: ILoginPayload) => {
    return client.post('/Authentication/login', payload).then((response: any) => {
      return response
    })
  },
  register: (payload: IRegisterPayload) => {
    return client.post('/Authentication/register', payload).then((response: any) => {
      return response
    })
  },
  reset: () => {
    return client.post('/Authentication/reset').then((response: any) => {
      return response
    })
  }
}

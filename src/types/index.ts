export interface ILoginPayload {
    email: string;
    password: string;
  }
  
  export interface IRegisterPayload {
    lastName?: string;
    firstName?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
  }
  
  export interface IResetPayload {
    email: string;
    password: string;
  }
  
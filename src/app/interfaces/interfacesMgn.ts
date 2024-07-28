export interface Management {
  id:string,
  name: string;
  phone: string;
  email: string;
}


export interface NewManagement {

  id?:string;
  name: string;
  phone: string;
  email: string;
  username: string;
  emailUser: string;
  password: string;

}

export interface UserInt {
    id: number,
    username: string,
    email:string,
    password:string,
    active: boolean
    managementId:number;
  }



  // modelo de datos de los Apartamentos de los Edificiosa
  export interface Flat {
    id: number,
    name: string,
    contact:string,
    phone:string,
    email:string,
    owner:string,
    quota:number,  // 0-100
    apartid: number,

  }

//  modelo de datos de los Edificios
  export interface Apart {
    id: number,
    name: string,
    direction:string,
    owner:string,
    part:number,
    managementId:number;
  }




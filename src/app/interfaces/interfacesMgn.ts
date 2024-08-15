export interface Management {
  id:number,
  name: string;
  phone: string;
  email: string;
}


export interface NewManagement {

  id?:number;
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
    apartId: number,

  }

//  modelo de datos de los Edificios
  export interface Apart {
    id: number,
    name: string,
    direction:string,
    owner:string,
    part:number,
    managementId:number,
    total:number,
    fiscal:string,
    acount:string
  }

export interface Summary {
  id:number,
  title:string,
  total:number,
  income:number,
  outflow:number,
  state:string,
  apartId:number

}


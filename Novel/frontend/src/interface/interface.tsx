export interface CoinCardProps {
    amount: number;
    price: number;
    imgSrc: string;
    showButton?: boolean;
    sendData: (amount: number, price: number) => void;
  }

  export interface CoinCardProps2 {
    amount: number;
    price: number;
    imgSrc: string;
    onClick: () => void;
  }
  export interface SignInInterface {

    email?: string;
  
    password?: string;
  
  }
  export interface UsersInterface {

    ID?: number;
  
    FirstName?: string;
  
    LastName?: string;
  
    Email?: string;
  
    Phone?: string;
  
    Age?: number;
  
    BirthDay?: string;
  
    GenderID?: number;
  
    Password?: string;
  
  }
  export interface UsersInterface {
    id: string;
    username: string;
    email: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
  }
  

  export interface TransactionInterface {
    id: string;
    user_id: string;
    amount: number;
    type: string;
    status: string;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface OrderInterface {
    id: string;
    user_id: string;
    package_id: string;
    amount: number;
    status: string;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface PackageInterface {
    id: string;
    Amount: string;
    price: number;
    Pic: Date;
    updated_at?: Date;
  }
  
  export interface CoinInterface {
    id: string;
    package_id: string;
    amount: number;
    price: number;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface GendersInterface {
    id: string;
    name: string;
  }
  
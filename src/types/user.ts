export interface UserAddress {
    address: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface UserCompany {
    name : string,
    department: string,
    title: string
}

export default interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    age: number;
    gender: 'Male' | 'Female';
    birthDate: string;
    image: string;
    role: 'admin' | 'user' | string;
    address?: UserAddress;
    company?: UserCompany;
}
export interface Address {
    state: string;
    city: string;
    street: string;
    zip: string;
}

export interface User {
    id: number;
    avatar: string;
    firstName: string;
    lastName: string;
    age: number;
    profession: string;
    email: string;
    address: Address;
    skills: string[];
}
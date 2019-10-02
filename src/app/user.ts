export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthDate: Date;
    billingAddress: string;
    billingPostalNumber: string;
    billingCity: string;
    billingCountry: string;
    shippingAddress: string;
    shippingPostalNumber: string;
    shippingCity: string;
    shippingCountry: string;
}
export interface ProductModelResponse {
    items: Product[];
    count: number;
}

export interface Product {
    image:       string;
    createdAt:   Date;
    description: string;
    title:       string;
    user:        User;
    id:          string;
}

export interface User {
    firstName: string;
    lastName:  string;
    avatar?:    string;
}

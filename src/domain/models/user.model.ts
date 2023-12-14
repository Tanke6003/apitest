export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class UserModel implements User {
    id?: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(user: Partial<User>) {
        this.id = user.id ?? undefined;  // Use nullish coalescing to handle undefined
        this.name = user.name ?? '';
        this.email = user.email ?? '';
        this.password = user.password ?? '';
        this.createdAt = user.createdAt ?? undefined;
        this.updatedAt = user.updatedAt ?? undefined;
    }
}

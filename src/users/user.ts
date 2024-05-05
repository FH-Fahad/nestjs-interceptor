import { Exclude } from "class-transformer";

export class User {
    id: number;
    name: string;
    @Exclude()
    password: string;
}

export const Users: User[] = [
    { id: 1, name: 'A1', password: 'A1_Pass' },
    { id: 2, name: 'B1', password: 'B1_Pass' },
    { id: 2, name: 'C1', password: 'C1_Pass' },
    { id: 2, name: 'D1', password: 'D1_Pass' },
];

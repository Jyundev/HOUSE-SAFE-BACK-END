export class UsersDTO {
    id;
    age;
    name;
    email;
    createdAt;
    updatedAt;

    constructor(user: {
        id: string,
        age: number,
        name: string,
        email: string,
        createdAt: Date,
        updatedAt: Date

    }) {
        this.id = user.id;
        this.age = user.age;
        this.name = user.name;
        this.email = user.email;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
    }

}
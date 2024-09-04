export class CreateUserDTO {
    age: number;
    name: string;
    email: string;

    constructor(user: {
        age: number,
        name: string,
        email: string

    }) {
        this.age = user.age;
        this.name = user.name;
        this.email = user.email;
    }


}


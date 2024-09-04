export class UpdateUserDTO {
    age;
    name;
    email;

    constructor(user:{
        age: number,
        name: string,
        email: string
    }) {
        this.age = user.age ?? undefined;
        this.name = user.name ?? undefined;
        this.email = user.email ?? undefined;
    }


}
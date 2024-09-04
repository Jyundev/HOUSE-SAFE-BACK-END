import { CreateUserProps } from '../../customTypes/common/User';
import database from "../../database";

export class UserService {
    // findById, findMany, create, update, delete

    async findUserById(id: string) {
        const user = await database.users.findUnique({
            where: {
                id,
            },
        });

        if (!user) throw { status: 404, message: "유저를 찾을 수 없습니다." };
        return user;
    }

    async findUsers({ skip = 0, take = 20 }) {
        const users = await database.users.findMany({
            skip,
            take,
        });

        const count = await database.users.count();

        return {
            users,
            count,
        };
    }

    async createUser(props: CreateUserProps) {
        const newUser = await database.users.create({
            data: {
                name: props.name,
                email: props.email,
                age: props.age,
            },
        });

        return newUser.id;
    }

    async updateUser(id: string, props: CreateUserProps) {
        const isExist = await database.users.findUnique({
            where: {
                id,
            },
        });

        if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

        await database.users.update({
            where: {
                id: isExist.id,
            },
            data: {
                name: props.name,
                email: props.email,
                age: props.age,
            },
        });
    }

    async deleteUser(id: string) {
        const isExist = await database.users.findUnique({
            where: {
                id,
            },
        });

        if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

        await database.users.delete({
            where: {
                id: isExist.id,
            },
        });
    }
}

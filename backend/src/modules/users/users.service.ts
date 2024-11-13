import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            email: 'admin@gmail.com',
            username: 'admin',
            password: 'hashed_password',
            isActive: true,
            name: 'Administrator',
        },
    ];

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User | undefined {
        return this.users.find(user => user.id === Number(id));
    }

    create(userDto: any): User {
        const newUser = {
            ...userDto,
            id: this.users.length + 1,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, userUpdates: any): User | null {
        const userIndex = this.users.findIndex(user => user.id === Number(id));
        if (userIndex === -1) return null;

        this.users[userIndex] = { ...this.users[userIndex], ...userUpdates };
        return this.users[userIndex];
    }

    remove(id: number): User | null {
        const userIndex = this.users.findIndex(user => user.id === Number(id));
        if (userIndex === -1) return null;

        const removedUser = this.users.splice(userIndex, 1);
        return removedUser[0];
    }

    findByEmail(email: string): User | null {
        return this.users.find(user => user.email === email) || null;
    }
}

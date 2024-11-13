import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
    let service: UsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersService],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should find a user by ID', () => {
        const id = 1; 
        const user = service.findOne(id);
        expect(user).toBeDefined();
    });

    it('should update a user', () => {
        const id = 1;
        const updatedUser = service.update(id, { email: 'updated@gmail.com' });
        expect(updatedUser).toBeDefined();
        expect(updatedUser?.email).toBe('updated@gmail.com');
    });

    it('should remove a user', () => {
        const id = 1;
        const removedUser = service.remove(id);
        expect(removedUser).toBeDefined();
    });
});

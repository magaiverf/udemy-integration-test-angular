import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';

describe('routes', () => {
    it('should contain a route for /users', () => {
        let userRoute = { path: 'users', component: UsersComponent };

        expect(routes).toContain(userRoute);
    });
});
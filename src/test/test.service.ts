import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
    private tests: ['test'];

    getAllTests() {
        return this.tests;
    }
}

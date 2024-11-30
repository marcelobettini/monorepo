import { Injectable } from '@nestjs/common';
import games from '../../data/data.json';

@Injectable()
export class GamesService {
    async getGames() {
        return games;
    }
}

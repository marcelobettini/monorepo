import { Injectable } from '@nestjs/common';
import { data as games } from './data.json';

@Injectable()
export class GamesService {
    getGames() {
        return games;
    }
}

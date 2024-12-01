import { Injectable } from '@nestjs/common';
import { data as games } from './data.json';
import { Game } from './games.interface';

@Injectable()
export class GamesService {
    getGames(): Promise<Game[]> {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve(games);
            }, 1000);
        });
    }
}

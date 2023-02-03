import { BoardManager, POSITION } from "./BoardManager";
import { Unit } from "./Unit";

import Races from "./data/races";
import Classes from "./data/classes";

export class Game {
    boardManager: BoardManager;

    constructor() {
        this.boardManager = new BoardManager();

        this.boardManager.addToBoard(new Unit(Races.Human, Classes.Knight), POSITION.FRONT_DOWN, "P1");
        this.boardManager.addToBoard(new Unit(Races.Human, Classes.Knight), POSITION.BACK_DOWN, "P1");

        /* this.boardManager.addToBoard(new Unit(), POSITION.FRONT_DOWN, "P2");
        this.boardManager.addToBoard(new Unit(), POSITION.FRONT_UP, "P2"); */

        this.boardManager.printBoard();
    }

    async startGame() {
        console.log("start game");
        const unit = this.boardManager.getUnit("P1", POSITION.FRONT_DOWN);
        const unit2 = this.boardManager.getUnit("P1", POSITION.BACK_DOWN);

        let timer = 0;
        while (timer < 150) {
            timer++;
            unit.printAp();
            unit.step();
            unit2.printAp();
            unit2.step();
        }

        console.log(`this wigga attacked ${unit.TEST_attacksCounter} times`);
        console.log(`this wigga attacked ${unit2.TEST_attacksCounter} times`);
    }
}

/* 
RAÇA
CLASSE
EQUIP
COMBATE

ATTACK SPEED:
(BASE + B) * (1 + (DEX * 5) / 100)
 */
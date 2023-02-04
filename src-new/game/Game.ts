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

        /* let timer = 0;
        while (timer < 150) {
            timer++;
            unit.printAp();
            unit.step();
            unit2.printAp();
            unit2.step();
        } */

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

DANO TOTAL:
(BASE_ARMA + B) * (1 + (STR * strScale + DEX * dexScale + INT * intScale) / 100)
 */

/* +3% / str */

/* 

    MOD PENETRATION
    T1: + 5 
    T2: + 10
    T3: + 15
    T4: + 20

    MOD DEX
    T1: + 2
    T2: + 4
    T3: + 7
    T4: + 10

    MOD Damage
    T1: + 10
    T2: + 15
    T3: + 25
    T4: + 35


    Longsword T1:
    DexT1

    Longsword T2:
    DamageT1 + DexT1

    Longsword T3:
    DamageT2 + Pen1 + DexT1

    Longsword T4:
    DamageT3 + Pen2 + DexT2

    Longsword T5:
    DamageT3 + Pen2 + DexT2 + cabuloso


*/

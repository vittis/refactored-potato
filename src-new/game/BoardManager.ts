import { Unit } from "./Unit";

export enum POSITION {
    FRONT_UP = 0,
    FRONT_DOWN = 1,
    BACK_UP = 2,
    BACK_MID = 3,
    BACK_DOWN = 4
}

interface Tile {
    unit: Unit;
    position: POSITION;
}

type OWNER = "P1" | "P2";

export class BoardManager {
    private squad1: Tile[];
    private squad2: Tile[];

    constructor() {
        this.squad1 = [];
        this.squad2 = [];
    }

    addToBoard(unit: Unit, position: POSITION, owner: OWNER) {
        if (owner === "P1") {
            if (this.squad1.find((tile) => tile.position === position)) {
                throw Error(`Ja tem cara ai ${position}`);
            }
            this.squad1.push({ unit, position });
        } else {
            if (this.squad2.find((tile) => tile.position === position)) {
                throw Error(`Ja tem cara ai ${position}`);
            }
            this.squad2.push({ unit, position });
        }
    }

    getUnit(owner: OWNER, position: POSITION): Unit {
        if (owner === "P1") {
            return this.squad1.find((tile) => tile.position === position)?.unit || (".." as unknown as Unit);
        } else {
            return this.squad2.find((tile) => tile.position === position)?.unit || (".." as unknown as Unit);
        }
    }

    printBoard() {
        process.stdout.write(
            `${this.getUnit("P1", POSITION.BACK_UP)}           ${this.getUnit("P2", POSITION.BACK_UP)}`
        );
        process.stdout.write(`\n`);
        process.stdout.write(
            `   ${this.getUnit("P1", POSITION.FRONT_UP)}     ${this.getUnit("P2", POSITION.FRONT_UP)}  `
        );
        process.stdout.write(`\n`);
        process.stdout.write(
            `${this.getUnit("P1", POSITION.BACK_MID)}           ${this.getUnit("P2", POSITION.BACK_MID)}`
        );
        process.stdout.write(`\n`);
        process.stdout.write(
            `   ${this.getUnit("P1", POSITION.FRONT_DOWN)}     ${this.getUnit("P2", POSITION.FRONT_DOWN)}  `
        );
        process.stdout.write(`\n`);
        process.stdout.write(
            `${this.getUnit("P1", POSITION.BACK_DOWN)}           ${this.getUnit("P2", POSITION.BACK_DOWN)}`
        );
        process.stdout.write(`\n`);
        console.log("----------------------------------------");
    }
}

/* 
U       U
  U   U  
U       U
  U   U
U       U
 */

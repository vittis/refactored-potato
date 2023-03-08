import { BoardManager, POSITION } from "./BoardManager";
import { Unit } from "./Unit";

import Races from "./data/races";
import Classes from "./data/classes";
import Weapons from "./data/weapons";
import { WeaponData } from "./Weapon";

export class Game {
    boardManager: BoardManager;

    constructor() {
        this.boardManager = new BoardManager();

        this.boardManager.addToBoard(
            new Unit(Races.Dwarf, Classes.Ranger, { mainHandWeapon: Weapons.Dagger as WeaponData }),
            POSITION.FRONT_DOWN,
            "P1"
        );
        this.boardManager.addToBoard(
            new Unit(Races.Dwarf, Classes.Knight, { mainHandWeapon: Weapons.Greatsword as WeaponData }),
            POSITION.BACK_DOWN,
            "P2"
        );

        /* this.boardManager.addToBoard(new Unit(), POSITION.FRONT_DOWN, "P2");
        this.boardManager.addToBoard(new Unit(), POSITION.FRONT_UP, "P2"); */

        this.boardManager.printBoard();
    }

    async startGame() {
        console.log("start game");
        const unit1 = this.boardManager.getUnit("P1", POSITION.FRONT_DOWN);
        const unit2 = this.boardManager.getUnit("P2", POSITION.BACK_DOWN);

        let timer = 0;
        while (timer < 150) {
            timer++;
            // unit1.printAp();
            unit1.step();
            // unit2.printAp();
            unit2.step();
        }

        console.table([
            {
                name: unit1.getName(),
                hp: unit1.stats.hp + "/" + unit1.stats.maxHp,
                ap: unit1.stats.ap,
                attackSpeed: unit1.stats.attackSpeed,
                weapon: unit1.equipment.mainHandWeapon.name,
                attackDamage: unit1.stats.attackDamage,
                // weight: unit1.stats.weight,
                str: unit1.stats.str,
                dex: unit1.stats.dex,
                attacks: unit1.TEST_attacksCounter
            },
            {
                name: unit2.getName(),
                hp: unit2.stats.hp + "/" + unit2.stats.maxHp,
                ap: unit2.stats.ap,
                attackSpeed: unit2.stats.attackSpeed,
                weapon: unit2.equipment.mainHandWeapon.name,
                attackDamage: unit2.stats.attackDamage,
                // weight: unit2.stats.weight,
                str: unit2.stats.str,
                dex: unit2.stats.dex,
                attacks: unit2.TEST_attacksCounter
            }
        ]);
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

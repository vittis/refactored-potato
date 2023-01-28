export interface UnitStats {
    str: number;
    dex: number;
    int: number;
    hp: number;
    maxHp: number;
    armor: number;
    maxArmor: number;
    attackSpeed: number;
    ap: number;
    sp: number;
    mainHandDamage: {
        min: number;
        max: number;
    };
    weight: number;
}

export class Unit {
    stats: UnitStats;
    TEST_attacksCounter = 0;

    constructor(slow: boolean) {
        if (slow) {
            this.stats = {
                str: 5,
                dex: 5,
                int: 5,
                hp: 500,
                maxHp: 500,
                armor: 0,
                maxArmor: 0,
                attackSpeed: 77,
                ap: 0,
                sp: 0,
                mainHandDamage: {
                    max: 10,
                    min: 10
                },
                weight: 10
            };
        } else {
            this.stats = {
                str: 5,
                dex: 15,
                int: 5,
                hp: 500,
                maxHp: 500,
                armor: 0,
                maxArmor: 0,
                attackSpeed: 122.5,
                ap: 0,
                sp: 0,
                mainHandDamage: {
                    max: 10,
                    min: 10
                },
                weight: 10
            };
        }
    }

    step() {
        this.stats.ap += this.stats.attackSpeed;
        if (this.canAttack()) {
            this.stats.ap -= 1000;
            this.TEST_attacksCounter++;
        }
    }

    canAttack() {
        return this.stats.ap >= 1000;
    }

    public toString = (): string => {
        return "EK";
    };

    printAp() {
        let bar = "|";
        for (let i = 0; i < 20; i++) {
            if (i / 20 <= this.stats.ap / 1000) bar += "-";
            else bar += " ";
        }
        bar += "|";
        console.log(bar);
    }
}

/* 
0
10
20
30
40
50
1000
 */

/* 
0
12
24
36
48
60
1000
 */

/* 




(BASE + B) * (1 + (DEX * 5) / 100)


Dex: 15
BASE ATTACK SPEED (arma): 50 
B: 0

(50 + 0) * (1 + (15 * 5) / 100) = 87.5

---

Dex: 15
BASE ATTACK SPEED (arma): 70
B: 0

(70 + 0) * (1 + (15 * 5) / 100) = 122.5

---

Dex: 15
BASE ATTACK SPEED (arma): 30
B: 0

(30 + 0) * (1 + (15 * 5) / 100) = 52.5

---

Dex: 3
BASE ATTACK SPEED (arma): 30
B: 0

(30 + 0) * (1 + (3 * 5) / 100) = 34.5

---

Dex: 4
BASE ATTACK SPEED (arma): 30
B: 0

(30 + 0) * (1 + (4 * 5) / 100) = 36

---

Dex: 4
BASE ATTACK SPEED (arma): 30
B: 10

(30 + 10) * (1 + (4 * 5) / 100) = 48


-----






1000



*/

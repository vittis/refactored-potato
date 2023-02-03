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
    skillRegen: number;
    sp: number;
    attackDamage: number;
    weight: number;
    level: number;
}

export interface RaceData {
    name: string;
    hp: number;
    str: number;
    dex: number;
    int: number;
}

export interface ClassData {
    name: string;
    str: number;
    dex: number;
    int: number;
}

interface UnitData {
    race: RaceData;
    class: ClassData;
}

export class Unit {
    stats: UnitStats;
    race: RaceData;
    class: ClassData;

    TEST_attacksCounter = 0;

    constructor(race: RaceData, uClass: ClassData) {
        this.race = race;
        this.class = uClass;
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
            skillRegen: 20,
            sp: 0,
            attackDamage: 10,
            weight: 10,
            level: 1
        };
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
        return `${this.race.name.substring(0, 1)}${this.class.name.substring(0, 1)}`;
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

import { Multipliers } from "./data/config";

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
    str: number;
    dex: number;
    int: number;
}

export interface ClassData {
    name: string;
    hp: number;
    str: number;
    dex: number;
    int: number;
    tier: number;
    statsBonus?: { armor?: number };
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

        const finalStr = race.str + uClass.str;
        const finalDex = race.dex + uClass.dex;
        const finalInt = race.int + uClass.int;

        const finalHp = uClass.hp + finalStr * Multipliers.hpStrMult;
        const finalArmor = uClass.statsBonus?.armor || 0;
        const finalAttackSpeed = 30 * (1 + (finalDex * Multipliers.asDexMult) / 100);

        this.stats = {
            str: finalStr,
            dex: finalDex,
            int: finalInt,
            hp: finalHp,
            maxHp: finalHp,
            armor: finalArmor,
            maxArmor: finalArmor,
            attackSpeed: finalAttackSpeed,
            ap: 0,
            skillRegen: 0,
            sp: 0,
            attackDamage: 40,
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

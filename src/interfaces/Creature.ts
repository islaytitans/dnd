export default class Creature {
    constructor(
        public MaxHitPoints: number,
        public CurrentHitPoints: number,
        public ArmourClass: number,
        public Strength: number,
        public Dexterity: number,
        public Constitution: number,
        public Wisdom: number,
        public Intelligence: number,
        public Charisma: number
    ) {}
}
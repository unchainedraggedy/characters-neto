export default class Character {
    constructor(name, type) {
      if (typeof name !== 'string') {
        throw new Error('Имя должно быть строкой');
      }
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть длиной от 2 до 10 символов');
      }
      const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!allowedTypes.includes(type)) {
        throw new Error('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  }
  
  

export class Bowman extends  Character {
    constructor(name){
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 10;
    }
}

export class Swordsman extends Character {
   constructor(name){
    super(name,'Swordsman');
    this.attack = 40;
    this.defence = 10;
   }
}

export class Magician  extends Character {
    constructor(name){
        super(name,'Magician');
        this.attack = 10;
        this.defence = 40;
   }
}

export class Daemon extends Character {
    constructor(name){
        super(name, 'Daemon');
        this.attack = 10;
       this.defence = 40;
      }
}

export class Undead extends Character {
    constructor(name){
        super(name,'Undead');
        this.attack = 25;
        this.defence = 25;
      }
}

export class Zombie extends Character {
    constructor(name){
        super(name, 'Zombie');
           this.attack = 40;
           this.defence = 10;
      }
}
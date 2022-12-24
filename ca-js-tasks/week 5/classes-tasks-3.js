console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
    class Challenge {constructor(id, level) {this.id = id; this.level = level;}
      
        points() {
          switch(this.level) {
            case 'VE': return 5;
            case 'EA': return 10;
            case 'ME': return 20;
            case 'HA': return 40;
            case 'VH': return 80;
            case 'EX': return 120;
            default: return 0;
          }
        }
      }
      
      class User {
        constructor(name, xp, log) {
          this.name = name;
          this.xp = xp;
          this.log = log;
        }
      
        newSolvedChallenge(challenge) {
          this.xp += challenge.points();
          this.log.push(challenge.id);
        }
      }
      
      const user1 = new User("Madam", 0, []);
      const user2 = new User("Steve", 0, []);
      
      const challenge1 = new Challenge(1, "VE");
      const challenge2 = new Challenge(2, "EA");
      const challenge3 = new Challenge(3, "ME");
      const challenge4 = new Challenge(4, "HA");
      const challenge5 = new Challenge(5, "VH");
      const challenge6 = new Challenge(6, "EX");
      
      user1.newSolvedChallenge(challenge1);
      user1.newSolvedChallenge(challenge4);
      user1.newSolvedChallenge(challenge6);
      
      user2.newSolvedChallenge(challenge5);
      user2.newSolvedChallenge(challenge3);
      user2.newSolvedChallenge(challenge2);

    console.log(user2.name); 
    console.log(user1.xp); 
    console.log(user1.log);
    console.log(challenge3.level); 
    console.log(challenge4.id);
    console.log(challenge2.points());
}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
    {
        class Player {
            constructor(name, maxHp, maxEn, armour) 
                {
                    this.name = name;
                    this.maxHp = maxHp; 
                    this.maxEn = maxEn; 
                    this.cHp = maxHp;
                    this.cEn = maxEn;
                    this.armour = armour;
                }
        
            get health() 
                {
                    return this.cHp;
                }
        
            set health(value) 
                {
                    this.cHp = Math.max(0, Math.min(value, this.maxHp));
                }
        
            get en() 
                {
                    return this.cEn;
                }
        
            set en(value) 
                {
                    this.cEn = Math.max(0, Math.min(value, this.maxEn));
                }
        
            get hpP() 
                {
                    return Math.round(this.health / this.maxHp * 100 * 100) / 100;
                }
        
            learnSkill(name, {damage, penetration, cost, heal, desc}) {
            this[name] = target => {
                const effectiveArmor = Math.max(0, target.armour - penetration);

                if (cost > this.en) {return `${this.name} attempted to use ${name}, but didn't have enough energy!`;}
        
                const calculatedDamage = damage * (1 - effectiveArmor / 100);
                target.health -= calculatedDamage;
                this.health += heal;
                this.en -= cost;
        
                let attackString = `${this.name} used skill ${name}, ${desc}, against ${target.name}, doing ${calculatedDamage.toFixed(2)} damage!`;
        
                if (heal) {attackString += ` ${this.name} healed for ${heal} health.`;}
        
                if (target.health <= 0) {attackString += ` ${target.name} died.`;} else {attackString += ` ${target.name} is at ${target.hpP}% health.`;}
        
                return attackString;
            };
            }
        }

        const alice = new Player("Alisa", 120, 70, 30);
        const bob = new Player("Bobas", 10, 30, 20);

        alice.learnSkill("fireball", {
        damage: 23,
        penetration: 1.2,
        heal: 5,
        cost: 15,
        desc: "a firey magical attack"
        });

        console.log(alice.fireball(bob));
    }
console.groupEnd();
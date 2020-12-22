window.addEventListener("load", function() {

    let button = document.querySelector("button");
    let charRace = ['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfing','Half-Orc','Human','Tiefling'];
    let charClass = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'];
    let volvoRace = ['Aasamir','Bugbear','Firbolg','Goblin','Goliath','Hobgoblin','Kenku','Kolbold','Lizardfolk','Orc','Tabaxi','Triton','Yuan-ti Pureblood'];
    let rollRace = [];
    let arr = [];
    let volvoCheck = document.getElementById('volvo');
    

    button.addEventListener("click", function(event){
        
        const charBox = document.getElementById("character-display");

        if(volvoCheck.checked){
            rollRace = charRace.concat(volvoRace);
        } else {
            rollRace = arr.concat(charRace);
        }

        function randomSelect(array){
            let index = Math.floor(Math.random()*array.length);
        return array[index];
        }

        function randomStat(min = 8, max = 15) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomLuckyStat(min = 3, max = 18) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        

        console.log(rollRace);

        button.innerHTML = 'Roll Again?';
        charBox.style.visibility = "visible";
        charBox.innerHTML = `
        <h3>Your Character is ${randomSelect(rollRace)} ${randomSelect(charClass)}.<h3>
        <ul>
            <li>STR = ${randomStat()}</li>
            <li>DEX = ${randomStat()}</li>
            <li>CON = ${randomStat()}</li>
            <li>INT = ${randomStat()}</li>
            <li>WIS = ${randomStat()}</li>
            <li>CHA = ${randomStat()}</li>
        <ul>`;

    

        console.log(`Your character is ${randomSelect(charRace)} ${randomSelect(charClass)}.`);
        console.log(`
        STR = ${randomStat()}
        DEX = ${randomStat()}
        CON = ${randomStat()}
        INT = ${randomStat()}
        WIS = ${randomStat()}
        CHA = ${randomStat()}`);

        console.log(`
        STR = ${randomLuckyStat()}
        DEX = ${randomLuckyStat()}
        CON = ${randomLuckyStat()}
        INT = ${randomLuckyStat()}
        WIS = ${randomLuckyStat()}
        CHA = ${randomLuckyStat()}`);


    });
    
    // let  charRace = ['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfing','Half-Orc','Human','Tiefling'];
    // let charClass = ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'];

    // function randomSelect(array){
    //     let index = Math.floor(Math.random()*array.length);
    // return array[index];
    // }

    // function randomStat(min = 8, max = 15) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    // function randomLuckyStat(min = 3, max = 18) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    // console.log(`Your character is ${randomSelect(charRace)} ${randomSelect(charClass)}.`);
    // console.log(`
    // STR = ${randomStat()}
    // DEX = ${randomStat()}
    // CON = ${randomStat()}
    // INT = ${randomStat()}
    // WIS = ${randomStat()}
    // CHA = ${randomStat()}`);

    // console.log(`
    // STR = ${randomLuckyStat()}
    // DEX = ${randomLuckyStat()}
    // CON = ${randomLuckyStat()}
    // INT = ${randomLuckyStat()}
    // WIS = ${randomLuckyStat()}
    // CHA = ${randomLuckyStat()}`);
});

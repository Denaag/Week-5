class Player { //need classes to structure our team and players
    constructor(name, position) { //name and position they hold on team
        this.name = name;
        this.position = position;
    }

    describe() {// method that will describe the player
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = []; // everytime we create a team, this array will consist of the players per the team name
    }

    addPlayer(player) { //method that will take a player
        if (player instanceof Player) { //checking to see if that player is an instance of our player class above
            this.players.push(player)
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() { //method
        return `${this.name} has ${this.player.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() { //start up the menu application
        let selection = this.showMainMenuOptions();// we are using methods that don't exist yet based on what we think things will look like - Top/Down method. The showMainMenuOptions method will return the selection the user gives us.

        while (selection != 0) {// selection is variable we are going to use to get user input of what option in the menu the user has selected. Using 0 as a way to exit loop.
            switch (selection) {//all methods below don't exist yet, just using as place hold until we finish builiding code as we want it work.
                case "1":
                    this.createTeam();
                    break;
                case "2":
                    this.viewTeam();
                    break;
                case "3":
                    this.deleteTeam();
                    break;
                case "4":
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();//if they are not selecting 0-4 then it will go back through loop
        }

        alert("Goodbye!"); //if they do select 0
    }

    showMainMenuOptions() {// alert prompt provides a pop-up to request user input - returning input from that prompt
        return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            -------------------
            ${teamInfo}
        `)
    }

    displayTeams() {
        let teamString = "";
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ") " + this.teams[i].name + "\n";
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt("Enter name for new team:");
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt("Enter the index of the team you wish to view:");
        if (index > -1 && index < this.teams.length) {//validates 
            this.selectedTeam = this.teams[index];
            let description = "Team Name: " + this.selectedTeam.name + "\n";
            
            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ") " + this.selectedTeam.players[i].name + " - " + this.selectedTeam.players[i].position + "\n";
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case "1":
                    this.createPlayer();
                    break;
                case "2":
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt(`Enter the index of the team you wish to delete:`);
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt(`Enter name for new player:`);
        let position = prompt(`Enter position for new player:`);
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() {
        let index = prompt(`Enter the index of the player you wish to delete:`);
        if (index > -1 && index < this.selectedTeam.players.length); {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

console.log("Hello World");
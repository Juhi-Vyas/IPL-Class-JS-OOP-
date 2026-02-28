//Step 1
class IPLTeam{

    static #totalTeams = 0

    static #champion = null

    constructor(teamName,city,captain){
        this.teamName = teamName
        this.city = city
        this.captain = captain
        IPLTeam.#totalTeams++
        this.win = 0
        this.loss = 0
    }

    //Step 2
    getInfo(){
        console.log(`${this.teamName} | City: ${this.city} | Captain: ${this.captain}`)
    }

    //Step 3
    static getTotalTeams(){
        console.log(`Total teams: ${IPLTeam.#totalTeams}`)
    }

    //Step 4
    recordResult(result){
        if(result === "win"){
            this.win++
        }else if(result === "loss"){
            this.loss++
        }
    }

    getStats(){
        console.log(`${this.teamName} -> Wins: ${this.win} | Losses: ${this.loss}`)
    }

    //Step 5
    static setChampion(teamName){
        IPLTeam.#champion = teamName
    }

    static getChampion(){
        console.log(`Champion: ${IPLTeam.#champion}`)
    }

    //Step 6
    static compare(team1,team2){
        if(team1.win > team2.win){
            console.log(`Winner: ${team1.teamName}`)
        }else{
            console.log(`Winner: ${team2.teamName}`)
        }
    }
}

const csk = new IPLTeam("Chennai Super Kings", "Chennai", "Dhoni");
const mi = new IPLTeam("Mumbai Indians", "Mumbai", "Rohit");
// const rcb = new IPLTeam("Royal Challengers", "Bengaluru", "Kohli");

csk.getInfo()
mi.getInfo()
// rcb.getInfo()

IPLTeam.getTotalTeams()

csk.recordResult("win");
csk.recordResult("win");
csk.recordResult("loss");

mi.recordResult("win");
mi.recordResult("win");
mi.recordResult("win");

csk.getStats()
mi.getStats()

IPLTeam.setChampion("Mumbai Indians")
IPLTeam.getChampion()

IPLTeam.compare(mi,csk)
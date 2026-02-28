# IPL Class — JavaScript OOP Assignment

📚 Concepts You’ll Use
∙	class, constructor
∙	Instance variables (this.x)
∙	Instance methods
∙	static variables & methods
∙	Private static variables (#x)

🎯 Objective
Build an IPL Management System using JavaScript class concepts you’ve learned so far.

🧱 Step-by-Step Tasks

✅ Step 1 — Create the IPLTeam Class
Create a class IPLTeam with a constructor that accepts:
∙	teamName
∙	city
∙	captain

// Expected usage:
const csk = new IPLTeam("Chennai Super Kings", "Chennai", "Dhoni");

✅ Step 2 — Add Instance Method: getInfo()
Add a method that prints team details.

Chennai Super Kings | City: Chennai | Captain: Dhoni

✅ Step 3 — Track Total Teams (Static Variable)
Add a static variable totalTeams that auto-increments every time a new team is created.
Add a static method getTotalTeams() that returns this count.

IPLTeam.getTotalTeams(); // 3 (if 3 teams created)

✅ Step 4 — Add Match Results (Instance Method)
Add a method recordResult(result) where result is "win" or "loss".
Track wins and losses on the object.
Add method getStats() that prints:

CSK → Wins: 4 | Losses: 1

✅ Step 5 — Private Static Variable (Championship Tracker)
Add a private static variable #champion (default null).
Add a static method setChampion(teamName) to set it.
Add a static method getChampion() to retrieve it.

IPLTeam.setChampion("Mumbai Indians");
IPLTeam.getChampion(); // "Mumbai Indians"

✅ Step 6 — Bonus Challenge 🔥
Add a static method compare(team1, team2) that accepts two IPLTeam objects and logs which team has more wins.

MI leads CSK with 6 wins vs 4 wins

🧪 Test Your Code With:

const csk = new IPLTeam("Chennai Super Kings", "Chennai", "Dhoni");
const mi = new IPLTeam("Mumbai Indians", "Mumbai", "Rohit");
const rcb = new IPLTeam("Royal Challengers", "Bengaluru", "Kohli");

csk.recordResult("win");
csk.recordResult("win");
csk.recordResult("loss");

mi.recordResult("win");
mi.recordResult("win");
mi.recordResult("win");

csk.getInfo();
csk.getStats();

IPLTeam.getTotalTeams();
IPLTeam.setChampion("Mumbai Indians");
IPLTeam.getChampion();

IPLTeam.compare(mi, csk);

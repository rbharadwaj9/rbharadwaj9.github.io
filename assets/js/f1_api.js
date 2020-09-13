async function fetchNextRace() {
  var url = "https://ergast.com/api/f1/current/next.json"
  const response = await fetch(url);
  var data = await response.json();
  data = data.MRData.RaceTable.Races[0]
  var current_date = new Date()
  var nextRace = "Gearing up for the " + "<a href=\"https:\/\/formula1.com\">" + data.raceName + "</a>" + " at " + data.Circuit.circuitName + "!";
  console.log(data[0])

  document.getElementById("f1race").innerHTML = nextRace;
}
fetchNextRace()

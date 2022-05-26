// import the data from data.js
const data=data;
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
    console.log(addition(4, 5));
 // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  } 
  printHello()
  console.log(doubleAddition(5,10))
  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
function buildTable(data) {

}
function buildTable(data) {
    tbody.html("");
data.forEach((dataRow) => {
let row = tbody.append("tr");
Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
);
});
{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  




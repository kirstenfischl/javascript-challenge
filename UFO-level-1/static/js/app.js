// STARTER CODE
// from data.js
var tableData = data;


// MY CODE
// Reference to the table body
var tbody = d3.select("tbody");

//console.log(tableData);

function buildTable(data) {
    // Reset table to empty
    tbody.html("");

// Loop through data and append cell text
    data.forEach((alienReport) => {
        //console.log(alienReport);
        var row = tbody.append("tr");

        Object.values(alienReport).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


// Select the button
var button = d3.select("#filter-btn");

// Create event handlers and complete handler function
button.on("click", filterButton);

function filterButton() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get value
    var filterInput = d3.select("#datetime")
    var inputValue = filterInput.property("value");

    //console.log(inputValue);

    // Filter data and populate table
    var filteredData = tableData.filter(row => row.datetime === inputValue);

    //console.log(filteredData);

    buildTable(filteredData);
}

buildTable(tableData);
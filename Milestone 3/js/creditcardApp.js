
$(document).ready(function() {
    // alert("Welcome to the Credit Card Application Page");
    // loadData();
    $('#cardAppNo').text(AppsNocard);
    $('#loanAppNo').text(AppsNoloan);

    for (var i = 0; i < clientIDs.length; ++i) {
        var row = $("#row" + i);
        row.css('display', showrow[i] ? 'table-row' : 'none');
        var cells = row.find("td");

        // Access the specific <td> element you want to edit (e.g., the second <td>)
        // Modify the content of the <td> element
        $(cells[0]).text(clientIDs[i]);
        $(cells[1]).text(dates[i]);
        $(cells[2]).text(cardTypes[i]);
    }
});





$(document).ready(function(){
    $(".acceptance").click(function(){
        var apID = +document.getElementById('appID').textContent;

        var status = $(this).text();
        alert("Application Of ID '"+ apID + "' has been " + status + "ed");

        $("#row"+apID).hide();
        showrow[apID] = false;
        AppsNocard--;
        $('#cardAppNo').text(AppsNocard);

        // saveData();
        // alert(showrow);
    });
});

document.getElementById('applicationModal').addEventListener('show.bs.modal', function (event) {
        // Get the button that triggered the modal
        var button = event.relatedTarget;
        var id = +button.id.substring(1);


        // Get the application details from the button's data attributes or other sources
        var empID = clientIDs[id];
        var appName = (empID == 4763380)?"AbuElKheir": "Andrew Mostafa Tate"; // Example application name
        var appEmploymentStatus = (empID == 4763380)? "Full-Time": "Unemployed"; // Example employment status
        var appDate = dates[id];
        var cardType = cardTypes[id];

        // Populate the modal with the application details
        document.getElementById('appName').textContent = appName;
        document.getElementById('appEmploymentStatus').textContent = appEmploymentStatus;
        document.getElementById('appDate').textContent = appDate;
        document.getElementById('empID').textContent = empID;
        document.getElementById('appCardType').textContent = cardType;
        document.getElementById('appID').textContent = id;
        // Add more code to populate other application details
});

function openPDF() {
    window.open('assets/Employment.pdf', '_blank');
  }


// function acceptOrRejectApp(rowid){
    
//     //hide the row
//     //alert("Application Accepted" + "  row" + rowid);
//     // console.log('row0');
//     var row = document.getElementById("anate3bt");
//     row.textContent = "Offff b2a";
//     // Hide the row by setting its display property to 'none'
//     row.style.display = 'none';
// }
// function test() {
//     var lst = document.getElementsByClassName("myrow");
//     console.log(lst.length);
//     for(var i = 0; i < lst.length; ++i) {
//         lst[i].style.display = 'none';
//     }
// }
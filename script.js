// API Calls to three endpoints
// Functions to push data to myData Array for iteration
// In getRandomData function - building the table from returned data
// -- calling the two other API calls once getRandomData function is called
// -- timeout to display headings to allow API call to finish before displaying



function getRandomData(){
$.ajax({
    method: 'GET',
    url: randomUserUrl,
    success: function(response){
        myData = response.results;
        loadingAni();
    }
});
$.ajax({
    method: 'GET',
    url: randomUserUrl,
    success: function(response){
        myData.push(...response.results);
        
    }
});
$.ajax({
    method: 'GET',
    url: randomUserUrl,
    success: function(response){
        myData.push(...response.results);
       
    }
});
$.ajax({
    method: 'GET',
    url: randomUserUrl,
    success: function(response){
        myData.push(...response.results);
        
    }
});
$.ajax({
    method: 'GET',
    url: randomUserUrl,
    success: function(response){
        myData.push(...response.results);
        buildTable(myData)
        getNumbers();
        getBoringData();  
        showHeadings();
        loading = false;
        loadingAni();
    }
});
};


function getNumbers(){
    $.ajax({
        method: 'GET',
        url: numbersUrl,
        success: function(response){
            numbersData = response;
            numberDisplay.innerHTML = numbersData;
        }
    });
};

function getBoringData(){
    $.ajax({
        method: 'GET',
        url: boredUrl,
        success: function(response){
            boredData = response.activity;
            activityDisplay.innerHTML = boredData + '.';
        }
    });
};

// Function to iterate over myData array and dynamically build a table to display returned data

function buildTable(data){
    let table = document.getElementById('myTable');
    table.innerHTML = '';
    for(let i = 0; i < data.length; i++){
        let row = `<tr>
                    <td id="name">${data[i].name.first + ' ' + data[i].name.last}</td>
                    <td id="email">${data[i].email}</td>
                    <td id="gender">${data[i].gender}</td>
                    <td id="location">${data[i].location.country}</td>
                  </tr>`;
        table.innerHTML += row;
    }
};

// Reverting display properties of headings after successful API call

function showRandoms(){
     randomNumberFact.style.display = 'inline-block';
     randomActivity.style.display = 'block';
     tableHeaders.style.display = 'revert';
}

// Displaying the headings if the myData array has been fully populated by the getRandomData function

function showHeadings(){
    showRandoms();
}

// Adding an onclick function to the dynamically created table data elements -- the full names which are returned

$('table').on('click', '#name', function(){
    getBoringData(), getNumbers()});

// Sorting function to sort the myData array in alphabetical order when clicked

 $('#sort-button').on('click', function(){
     let order = $(this).data('order');
     let text = $(this).html();
     text = text.substring(0, text.length -1)
     if(order == 'desc'){
         $(this).data('order', 'asc');
         myData = myData.sort((a, b) => a.name.first.localeCompare(b.name.first));
         text += '&#9650';
     } else{
         $(this).data('order', 'desc');
         myData = myData.sort((a, b) => b.name.first.localeCompare(a.name.first));
         text += '&#9660';
     }
     $(this).html(text)
     buildTable(myData);
     })

// Loading animation function
function loadingAni(){
    if(loading === true){
        loadingAnimation.style.display = 'block';
    } else if(loading === false){
        loadingAnimation.style.display = 'none';
    }
};




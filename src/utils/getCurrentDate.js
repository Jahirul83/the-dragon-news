export default function getCurrentData() {
    // Create a new Date object
    var currentDate = new Date();

    // Get the day, month, date, and year
    var day = currentDate.toLocaleString('en-us', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-us', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Display the result
    // console.log("Current day: " + day);
    // console.log("Current month: " + month);
    // console.log("Current date: " + date);
    // console.log("Current year: " + year);
    return `${day} , ${month} ,${date}, ${year}`;
}

// Call the function to display the current date
getCurrentData();

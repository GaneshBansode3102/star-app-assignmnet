// Function to calculate the minimum number of planes required
function minPlanesRequired(fuel) {
    let n = fuel.length;
    
    // If there's only one airport, no planes are needed
    if (n === 1) return 0;

    let planes = 0;            // Keeps track of planes hired
    let current_fuel = 0;      // Maximum distance reachable with current planes
    let next_fuel = 0;         // Maximum possible reach at the next step

    // Loop through each airport
    for (let i = 0; i < n; i++) {
        // If the current position is beyond the reachable fuel, return -1 (not possible)
        if (i > current_fuel) return -1; 
        
        // Update the next max fuel reach
        next_fuel = Math.max(next_fuel, i + fuel[i]);

        // When we reach the limit of the current plane's fuel
        if (i === current_fuel) { 
            planes++;            // Hire a new plane
            current_fuel = next_fuel; // Update the fuel reach
            
            // If we have reached or passed the last airport, return the plane count
            if (current_fuel >= n - 1) return planes;
        }
    }

    return -1; // If unable to reach the last airport
}

// Function to get user input, calculate result, and display it
function calculateMinPlanes() {
    // Get the input value from the text box
    let input = document.getElementById("fuelInput").value;
    
    // Convert the input string into an array of numbers
    let fuelArray = input.split(",").map(Number);
    
    // Call the main function to get the result
    let result = minPlanesRequired(fuelArray);
    
    // Display the result on the web page
    document.getElementById("result").textContent = result === -1 ? "Not Possible" : `Minimum Planes Required: ${result}`;
}

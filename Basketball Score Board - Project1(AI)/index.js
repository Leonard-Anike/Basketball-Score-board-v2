// Add event listeners to all increment buttons

document.querySelectorAll (".increment-btn").forEach (button => {
    button.addEventListener ("click", () => {
        const displayId = button.getAttribute ("data-display") // Get the display id from the button's data attribute
        const incrementValue = +button.value // Get the increment value from the button's value attribute (Also using unary + to convert to number)
        incrementDisplay (displayId, incrementValue) // Call the function to increment the correct display
    })
})

//Function to increment the score base on the button clicked 
//(It is reusable, it increments a specific display based on 
// the value of the button clicked)

function incrementDisplay (displayId, incrementValue) {
    const display = document.getElementById (`display${displayId}`) // Dynamically selects the score-display-el to display result using id 
    let currentDisplayValue = Number (display.textContent) /// Converts string to number
    currentDisplayValue += incrementValue
    display.textContent = currentDisplayValue
}

// Function to reset all score to zero 
const resetBtn = document.getElementById ("reset-btn")
resetBtn.addEventListener ("click", () => {
    const display1 = document.getElementById ("display1")
    const display2 = document.getElementById ("display2")
    display1.textContent = 0
    display2.textContent = 0
})

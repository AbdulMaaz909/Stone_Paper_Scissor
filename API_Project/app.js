// Base API URL for getting exchange rates
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// Selecting required elements from the DOM
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const formCurr = document.querySelector(".form select"); // From currency dropdown
const toCurr = document.querySelector(".to  select");     // To currency dropdown
const msg = document.querySelector(".msg");               // Message area to show result

// Loop through countryList object and log all currency codes
for (code in countryList) {
    console.log(code);
}

// Populate both dropdowns with currency options
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // Set default values for "from" and "to" dropdowns
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    // When currency changes, update flag image
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Function to update the flag icon based on selected currency
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode]; // Get country code from currency code
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // Construct flag URL
    let img = element.parentElement.querySelector("img"); // Find image inside the same parent
    img.src = newSrc; // Set new flag image source
};

// When user clicks the button, fetch exchange rate and show result
btn.addEventListener("click", async (evt) => {
    evt.preventDefault(); // Prevent form from reloading the page

    // Get and validate amount input
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1"; // Default to 1 if input is empty or invalid
    }

    // Build the API URL for the selected "from" currency
    const URL = `${BASE_URL}/${formCurr.value.toLowerCase()}.json`;

    // Fetch data from API
    let response = await fetch(URL);
    let data = await response.json();

    // Get exchange rate for "to" currency from the response
    const rate = data[formCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    // Calculate and display converted amount
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${formCurr.value} = ${finalAmount} ${toCurr.value}`;
});

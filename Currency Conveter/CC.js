let url =
  "https://v6.exchangerate-api.com/v6/d35e571cf5c279e3c3455f04/pair/USD/INR";

// for (let hello in countrylist){
//     console.log (hello, countrylist[hello])
// }

let dropdown = document.querySelectorAll(".dropdown select");
for (selects of dropdown) {
  for (code in countrylist) {
    let options = document.createElement("option");
    selects.append(options);
    options.innerText = code;
    options.value = code;
    if (selects.id === "from" && code === "USD") {
      options.selected = "selected";
    } else if (selects.id === "to" && code === "INR") {
      options.selected = "selected";
    }
  }
  selects.addEventListener("change", (evt) => {
    flagchnage(evt.target); // here we are passing the evt.target to the flagchange function
  });
}

const flagchnage = (hello) => {
  let code = hello.value; // here we are accessing the value of the option (element) which is the code of the country.
  let countrycode = countrylist[code]; //in this countrycode we are accessing the country code using the countrylist object of (codes.js) file.
  let new_link = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = hello.parentElement.querySelector("img");
  img.src = new_link;
};

fetch(url).then((responce) => {
  responce.jason;
});

let exchange = document.querySelector(".exchange-icon");

//ADDING THE FUNCTNALITY OF EXCHANGING THE COUNTRY
const from_parent = document.querySelector(".from");
const to_parent = document.querySelector(".to");
const from = document.querySelector("#select-from");
const to = document.querySelector("#select-to");

//THE ENTIRE SWAP FUNCTION
const swap = () => {
  // swap the selected values
  let temp = dropdown[0].value;
  dropdown[0].value = dropdown[1].value;
  dropdown[1].value = temp;

  // update the flags
  flagchnage(dropdown[0]);
  flagchnage(dropdown[1]);

  // recalculate exchange
  conversition(new Event("submit")); // manually trigger conversion
};
exchange.addEventListener("click", swap);

//CHANGING THE COUNTRY IN THE URL
const conversition = async (hey) => {
  // console.log(hey);
  hey.preventDefault();
  let value1 = dropdown[0].value;
  let value2 = dropdown[1].value;
  const newurl = `https://v6.exchangerate-api.com/v6/d35e571cf5c279e3c3455f04/pair/${value1}/${value2}`;

  //MAKING THE FUNCTION OF GETTING THE EXCHANGE RATE FROM THE URL
  fetch(newurl)
    .then((hello) => {
      return hello.json();
    })
    .then((data) => {
      if ((data.result = "success")) {
        rate = data.conversion_rate;

        //THE CALCULATION OF THE FINAL CHANGE

        let enter_amount = parseInt(
          document.querySelector("form input#enter-amount").value
        );
        let final_amount = document.querySelector("#converted-amount input");
        final_amount.value = enter_amount * rate;
      }
    })
    .catch(() => {
      console.log("something went wrong with the api call");
    });
    
};

const convert = document.querySelector("#convert");
convert.addEventListener("click", conversition);
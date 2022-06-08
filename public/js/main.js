const search = document.getElementById("search");
const submitbtn = document.getElementById("submitbtn");
const cardbody = document.querySelector(".card-body");
let hello = "hello";
console.log("hello", hello);
const getCity = async (e) => {
  e.preventDefault();
  let city = search.value;
  console.log("city", city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${"Lahore"}&appid=1e96e81f766873da2c82ca84982c36e8`;

  if (city === "") {
    alert("search is empty");
    cardbody.innerText = "Please city field cant be empty";
  } else {
    try {
      const response = await fetch(url);
      const data = await response.json;
      console.log("data", data);
      //   return res;
    } catch (error) {
      cardbody.innerText = "Please city field is invalid";
    }
  }
  let text = e.target.value;
  city = text;
};

submitbtn.addEventListener("click", getCity);

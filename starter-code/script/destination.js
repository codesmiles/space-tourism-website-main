const moon = document.querySelector('#moon');
const mars = document.querySelector('#mars');
const europa = document.querySelector('#europa');
const titan = document.querySelector('#titan');

// const arrofDestinations = [moon, mars, europa, titan];

const section1 = document.querySelector("#section1");
const head = document.querySelector("#header");
const body = document.querySelector("#body");

const footer1section2 = document.querySelector("#footer1-section2");
const footer2section2 = document.querySelector("#footer2-section2");


fetch("script/json file/data.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    const { destinations } = data;
    console.log(destinations);
    moon.addEventListener("click", () => {
        head.innerHTML = destinations[0].name;
      body.innerHTML = destinations[0].description;
      footer1section2.innerHTML = destinations[0].distance;
      footer2section2.innerHTML = destinations[0].travel;
     });
    mars.addEventListener('click', () => { 
      head.innerHTML = destinations[1].name;
      body.innerHTML = destinations[1].description;
       footer1section2.innerHTML = destinations[1].distance;
       footer2section2.innerHTML = destinations[1].travel;
    })
    europa.addEventListener('click', () => { 
      head.innerHTML = destinations[2].name;
      body.innerHTML = destinations[2].description;
      footer1section2.innerHTML = destinations[2].distance;
      footer2section2.innerHTML = destinations[2].travel;
    });
    titan.addEventListener('click', () => {
      head.innerHTML = destinations[3].name;
      body.innerHTML = destinations[3].description;
      footer1section2.innerHTML = destinations[3].distance;
      footer2section2.innerHTML = destinations[3].travel;
    
     })

  })

  .catch((err) => console.log("rejected", err));





//   .then((data) => {
//   console.log(data.body)
//   })
// .catch((err) => {
//   console.log("rejected", err)
// })

//In case a promise is returned then .then to display your promise

//  And as your promise is being displayed you can now talk about converting it or manipulating the data u fetched into what ever you want

//console.log to check if the stuff works
//  console.log(data)

//  Will drop errors incase no data was fetched

//  Note theres no terminate button(;) after fetch,.then and .catch because it is in form of a chain and not to be broken

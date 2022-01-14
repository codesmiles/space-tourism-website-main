const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");

const arrofDestinations = [moon, mars, europa, titan];

const section1 = document.querySelector("#section1");
const head = document.querySelector("#header");
const body = document.querySelector("#body");
const img = document.querySelector("#img");

const footer1section2 = document.querySelector("#footer1-section2");
const footer2section2 = document.querySelector("#footer2-section2");

fetch("script/json file/data.json")
  .then((response) => {
    // console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    const { destinations } = data;
    // console.log(destinations);

    arrofDestinations.map((destination, index) => {
     
      destination.addEventListener("click", (e) => {
        head.innerHTML = destinations[index].name;
        body.innerHTML = destinations[index].description;
        footer1section2.innerHTML = destinations[index].distance;
        footer2section2.innerHTML = destinations[index].travel;
        img.src = destinations[index].images.png;
        e.preventDefault();
        // console.log(destination);
      });

    });

    // INCASE YOU WANT TO WORK ON THE SAME CODE IN THE NEXT SECTION
    for (var i = 0; i < arrofDestinations.length; i++) {
      arrofDestinations[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-unordered");
        current[0].className = current[0].className.replace(" active-unordered", "");
        this.className += " active-unordered";
      });
    }
  })

  .catch((err) => console.log("rejected", err));

// document.getElementById("myImageID").src = "images/my_other_image.png";

const portrait = document.querySelector("#portrait");
const landscape = document.querySelector("#landscape");

const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const arrOfLinks = [link1, link2, link3];

const topic = document.querySelector("#topic");
const body = document.querySelector("#body");

fetch("script/json file/data.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const { technology } = data;
    console.log(technology);

    arrOfLinks.map((terms, index) => {
      terms.addEventListener("click", (e) => {
        topic.innerHTML = technology[index].name;
        body.innerHTML = technology[index].description;
        portrait.src = technology[index].images.portrait;
        landscape.src = technology[index].images.landscape;
        e.preventDefault();
      });
    });

    for (var i = 0; i < arrOfLinks.length; i++) {
      arrOfLinks[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-subnavv");
        current[0].className = current[0].className.replace(
          " active-subnavv",
          ""
        );
        this.className += " active-subnavv";
      });
    }
  })

  .catch((err) => console.log("rejected", err));

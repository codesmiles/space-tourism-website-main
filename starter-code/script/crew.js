const role = document.querySelector("#role");
const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
let dp = document.querySelector("#dp");
const img1 = document.querySelector("#imgOne");
const img2 = document.querySelector("#imgTwo");
const img3 = document.querySelector("#imgThree");
const img4 = document.querySelector("#imgFour");

const arrOfImg = [img1, img2, img3, img4];

fetch("script/json file/data.json")
  .then((response) => {
    // console.log("resolved", response);

    return response.json();
  })
  .then((data) => {
    // omo god help me
    // console.log(data);

    const { crew } = data;

    // console.log(crew);

    arrOfData = [role, username, bio, dp];

    arrOfImg.forEach((member, index) => {
      member.addEventListener("click", (e) => {
        role.innerHTML = crew[index].role;
        username.innerHTML = crew[index].name;
        bio.innerHTML = crew[index].bio;
        dp.src = crew[index].images.png;

        e.preventDefault();
      });
    });

      
    //   TO BE CONTINUED
    for (var i = 0; i < arrOfImg.length; i++) {
      arrOfImg[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-img");
        // current[0].src = "/figma img/Oval Copy.svg";

            //  current[0].src = current[0].src.replace(
            //    "/figma img/Oval.svg",
            //    "/figma img/Oval Copy.svg"
            //  );
        this.src = "/figma img/Oval.svg";
      });
    }
  })
  .catch((err) => console.log("rejected", err));

//    img1.src = img1.src.replace(
//      "/figma img/Oval.svg",
//      "/figma img/Oval Copy.svg"
//    );
console.log(img1);
console.log(img2);
console.log(arrOfImg);
//  for (var i = 0; i < arrofDestinations.length; i++) {
//    arrofDestinations[i].addEventListener("click", function () {
//      var current = document.getElementsByClassName("active-unordered");
//      current[0].className = current[0].className.replace(
//        " active-unordered",
//        ""
//      );
//      this.className += " active-unordered";
//    });
//  }

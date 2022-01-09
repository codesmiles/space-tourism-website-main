const data = () => {
    const section1 = document.querySelector('#section1');
    const head = document.querySelector('#header');
    const body = document.querySelector('#body');
    const footer1section1 = document.querySelector('#footer1-section1');
    const footer1section2 = document.querySelector('#footer1-section2');
    const footer2section1 = document.querySelector('#footer2-section1');
    const footer2section2 = document.querySelector('#footer2-section2');
    
 
 
    
};

fetch("starter-code/data.json")
    .then((response) => {
        console.log("resolved", response);
        return response.json();
    })
    .then((data) => {
        console.log("data", data[body]);
     })
    
    //   .then((data) => {
    //   console.log(data.body)
    //   })
      .catch((err) => {
        console.log("rejected", err);
      });

//In case a promise is returned then .then to display your promise

//  And as your promise is being displayed you can now talk about converting it or manipulating the data u fetched into what ever you want

//console.log to check if the stuff works
//  console.log(data)

//  Will drop errors incase no data was fetched

//  Note theres no terminate button(;) after fetch,.then and .catch because it is in form of a chain and not to be broken

const executivesLists = [  //array
  {                       //objects
    name: "Johnson Kolawole Ajayi",
    position: "Director",
    image: "./image/ajayi.jpeg"
  },
  {
  name: "Jonathan Oluwadara Adelakun",
  position: "Business Development Manager",
  image: "./image/dara.jpeg"
  },
  {
  name: "Adeleke Israel Ayooluwa",
  position: "Tech Consultant",
  image: "./image/ayooluwa.jpg"
  }

];




let executivesHTML = '';
executivesLists.forEach((executivesList) => {         
  executivesHTML += `                       
    <div class="executives-information">

      <div class="first-picture">
      <img class="product-image"
      src=" ${executivesList.image}">  
      </div>
  
      <div class="information">
        <p class="full-name">
       ${executivesList.name}
        </p>
        <p class="position">
        ${executivesList.position}
        </p>
      </div>
    </div>
  ` ;                                          
});


document.querySelector('.js-whole').innerHTML = executivesHTML; 




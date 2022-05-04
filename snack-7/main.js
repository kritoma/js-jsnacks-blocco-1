const listName = ["Franco", "Sandro", "Pippo"];
const listSurname = ["Picci", "Piccinini", "Baudo"];

const btn = document.querySelector(".btn");

btn.addEventListener("click", 
    function(){
        const nameRandom = (Math.floor(Math.random) * listName.length);
        const surnameRandom = (Math.floor(Math.random) * listSurname.length);

       let fullName = listName[nameRandom] + " " + listSurname[surnameRandom];
       console.log(fullName);
    }

);


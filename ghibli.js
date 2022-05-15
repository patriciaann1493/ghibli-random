// Pick a random Ghibli Movie

// Getting the list of Ghibli Films from API 
async function getFilm(){
    try{
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        if (!response.ok){
            throw new Error(`Error! status : ${response.status}`);
        }

        let films = await response.json();
        return films;
       
    }catch(err){
        console.log(err)
    }
}

let films = await getFilm();

const min = 0;
const max = films.length + 1;

let randomIndex = Math.floor(Math.random() * (max - min) + min);

console.log(`## Random Ghibli Movie! ##`);
console.log(`Title: ${films[randomIndex].title}`);
console.log(`Description: ${films[randomIndex].description}`);
console.log(`${films[randomIndex].image}`);


document.getElementById("title").textContent = `${films[randomIndex].title}`;
document.getElementById("description").textContent = `${films[randomIndex].description}`;
document.getElementById("myPicture").src = `${films[randomIndex].image}`;

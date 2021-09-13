const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];
  
const colors ={
    food: "red",
    animal: "yellow",
    beverage: "orange"
}


// FUNZIONI
// accetta array icone + il div dove stampare le icone
const printIcons = (arr, container) => {
    container.innerHTML = "";
    arr.forEach(
        (element) => {
            const {name, family, prefix, color} = element;
    
            container.innerHTML += `
            <div class="icon">
                <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                <div class="icon-name">${name}</div>
            </div>
            `;
        
        }
    );
}

// Programma principale
const containerIcons = document.getElementById("icons");


//icone colorate per tipo
const colorIcons = icons.map(
    (element) => {
        return {
            ...element,
            color : colors[element.category]
        };
    }
);

// console.log(colorIcons);

printIcons(colorIcons,containerIcons);

const iconCategories = [];

icons.forEach(
    (element) =>{
        if (iconCategories.includes(element.category) == false){
            iconCategories.push(element.category);
        }

    }
);
console.log(iconCategories);

const selectedCategories = document.getElementById("category");

iconCategories.forEach(
    (element) =>{
        selectedCategories.innerHTML += `<option value="${element}">${element}</option>`
    }
);

// evento change

selectedCategories.addEventListener("change" ,
    function(){
        const iconsFiltered = colorIcons.filter(
            (element) =>{
                if (element.category == selectedCategories.value || selectedCategories.value == ""){
                    return true;
                }
                return false;
            }
        
        )
        printIcons(iconsFiltered,containerIcons);
    }
);
const apiUrl =
"https://www.themealdb.com/api/json/v1/1/search.php?s="

async function consultarApiC(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`fallo la consulta a la api: ${error}`);
    const contError = document.querySelector(".error");
    const contWeather = document.querySelector(".receta");
    contError.style.display = "block";
  }
}

//console.log(value); // Devuelve us, por estar seleccionado por defecto

async function obtenerDatosC(url) {  
  var select = document.getElementById('comida');
  var value = select.options[select.selectedIndex].value;

  const datos = await consultarApiC(url); 

  let meal_01=datos.meals[2].strInstructions 
   //console.log(datos.meals[2].strArea )
   //console.log(value);
   console.log(value);

if (value="recetas") {console.log("0");
  
} else {console.log("1");
  
}










   
   let lee_menu = document.querySelector(".menu"); 
   let receta = document.querySelector(".menu");
   receta.innerHTML = meal_01;
   //console.log(meal_01)
  
  const contError = document.querySelector(".error");
  const contWeather = document.querySelector(".weather");
}

const searchButton = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");
console.log(`a la consulta a la api:`);

searchButton.addEventListener("click", () => {
  //const nombreC = searchInput.value;
  
  const url = `${apiUrl}`;
  //console.log(url);
  obtenerDatosC(url);
  
});

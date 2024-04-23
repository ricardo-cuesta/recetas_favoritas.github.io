const apiUrl =
"https://www.themealdb.com/api/json/v1/1/search.php?s="
const apiUrl2 =
"https://www.themealdb.com/api/json/v1/1/search.php?s="
const apiUrl3 =
"https://www.themealdb.com/api/json/v1/1/list.php?a=list"
let indices = [];
let cuenta=0;let platoN=1;

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

async function obtenerDatosC(url) {  
  var select = document.getElementById('comida');
  var value = select.options[select.selectedIndex].value;

  const datos = await consultarApiC(url); 

  let meal_01=datos.meals[2].strInstructions ;
   console.log(datos.meals[2].strArea );
   

   switch(value){
    case 'nombrePlato':
      limpiarMenu ();
       console.log("nombre del Plato");       
  
       plato_();

       break
    case 'ingredientes':
      limpiarMenu ();
      ingedienteP();
      console.log("ingredientes");
  
      break
    case 'sites':
      limpiarMenu ();
      console.log("sites");
      cargarPais() ;
     break
    case 'categoria':
      limpiarMenu ();
      console.log("categoria");
      categoria() 

      break
 }
 
  const contError = document.querySelector(".error");
  const contWeather = document.querySelector(".weather");
}

const searchButton = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");

console.log(`a la consulta a la api:`);
//plato_()
receta();

searchButton.addEventListener("click", () => {
  
  const url = `${apiUrl}`;
  //console.log(url);
  obtenerDatosC(url);
  
});
async function ingedienteP(){
  console.log("probando ingrediente ");

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const meal_02 = await respuesta2.json();
  //console.log(meal_02);
  console.log(meal_02.meals[0].strIngredient);
  
  for (x=0;x<meal_02.meals.length;x++) {

    let pais = "meals["+x+"].strArea";
    cuenta=x;     

    let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strIngredient+"</a></li>"
    console.log(lista); 
     document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
  }
}

async function cargarPais() {
  console.log("probando cargar apis");
  const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const meal_02 = await respuesta.json();
  console.log(meal_02.meals[0].strArea);
  for (x=0;x<meal_02.meals.length;x++) {
    let pais = "meals["+x+"].strArea";
    cuenta=x;     
    let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strArea+"</a></li>"
     //console.log(lista) 
     document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
  }  }
  
  function limpiarMenu () {
    
        //console.log(cuenta) 
        
        for (x=0;x<cuenta;x++) { console.log(x);
          
          let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+""+"</a></li>"
          //console.log(lista) 
          document.getElementsByClassName("dropdown-menu")[0].innerHTML -= lista; 
                 
        }  
    } 

function limpiarCards() {
  document.getElementById("cuerpo").outerHTML = "";

  try {
      let div = "<div id='cuerpo'>";
      div += "</div>";
      document.getElementById("contenedor").innerHTML += div;
  } catch (error) {
      
  }
}

function limpiarOneCard() {
  document.getElementById("oneCard").outerHTML = "";

  try {
      let div = "<div id='oneCard'>";
      div += "</div>";
      document.getElementById("containerOneCard").innerHTML += div;
  } catch (error) {

  }
}


async function plato_(){
  console.log("probando ingrediente ");

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const meal_02 = await respuesta2.json();
  //console.log(meal_02);
  console.log(meal_02.meals[0].strIngredient);
  
  for (x=0;x<meal_02.meals.length;x++) {

    let pais = "meals["+x+"].strArea";
    cuenta=x;     

    let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strIngredient+"</a></li>";
    console.log(lista) ;
     document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
  }
}



  async function receta() { 
    console.log("probando receta  "); 
    console.log(platoN);
    x=platoN;
  
        const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const meal_02 = await respuesta.json();
      console.log(x);      
        let recetas=meal_02.meals[x].strInstructions
        cuenta=x; 
        document.getElementsByClassName("menu")[0].innerHTML += recetas;
         
        }
        async function categoria() {
          console.log("probando cargar apis");
          const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
          const meal_02 = await respuesta.json();
          console.log(meal_02.meals[0].strArea);
          for (x=0;x<meal_02.meals.length;x++) {
            let pais = "meals["+x+"].strArea";
            cuenta=x; 
            let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strArea+"</a></li>"
           
             document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
          }  }


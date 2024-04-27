const apiUrl =
"https://www.themealdb.com/api/json/v1/1/search.php?s="
const apiUrl2 =
"https://www.themealdb.com/api/json/v1/1/search.php?s="
const apiUrl3 =
"https://www.themealdb.com/api/json/v1/1/list.php?a=list"
let indices = [];
let cuenta=0;let platoN=1;let Menuid=0;

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
       Menuid=0;    
  
       plato_();

       break
    case 'ingredientes':
      limpiarMenu ();
      ingedienteP();
      console.log("ingredientes");
      Menuid=1;
  
      break
    case 'sites':
      limpiarMenu ();
      console.log("sites");
      cargarPais() ;
      Menuid=2;
     break
    case 'categoria':
      limpiarMenu ();
      console.log("categoria");
      categoria(); 
      Menuid=3;

      break
      
 }
 //console.log("id del menu",Menuid);
  const contError = document.querySelector(".error");
  const contWeather = document.querySelector(".weather");
}

const searchButton = document.querySelector(".search button");
const searchInput = document.querySelector(".search input");

console.log(`a la consulta a la api:`);
//fase(1);
//recetaxplato();

searchButton.addEventListener("click", () => {
  
  const url = `${apiUrl}`;
  //console.log(url);
  obtenerDatosC(url);
  
});
async function ingedienteP(){
  Menuid=1;
  console.log("probando ingrediente ");
  

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const meal_02 = await respuesta2.json();
  //console.log(meal_02);
 // console.log(meal_02.meals[0].strIngredient);
  
  for (x=0;x<meal_02.meals.length;x++) {

    let pais = "meals["+x+"].strArea";
    cuenta=x;     

    let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strIngredient+"</a></li>"
    //
     document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
     //console.log(meal_02); 
  }
}

async function cargarPais() {
  Menuid=2;
  console.log("probando cargar apis");
  const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const meal_02 = await respuesta.json();
  //console.log(meal_02.meals[0].strArea);
  for (x=0;x<meal_02.meals.length;x++) {
    let pais = "meals["+x+"].strArea";
    cuenta=x;     
    let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strArea+"</a></li>"
     //console.log(lista) 
     document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
  }  }
  
  function limpiarMenu () {
    
        for (x=0;x<cuenta;x++) { 
          
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
  Menuid=0;
  console.log("buscando plato ");

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const meal_02 = await respuesta2.json();
  //console.log(meal_02);
  //console.log(meal_02.meals[0].srtMeal);
  
  for (x=0;x<meal_02.meals.length;x++) {

    let pais = "meals["+x+"].strArea";
    cuenta=x;     

    let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strMeal+"</a></li>";
    //console.log(lista) ;
     document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
  }
}



  async function receta(x) { 

    console.log("probando receta  ");

    console.log(platoN);
    //x=platoN;
  
        const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const meal_02 = await respuesta.json();
      //console.log(x);      
        let recetas=meal_02.meals[x].strInstructions
        //console.log("plato..",meal_02.meals[x].strMeal);
        cuenta=x; 
        document.getElementsByClassName("menu")[0].innerHTML = recetas;
        
        let recetas2="plato: "+meal_02.meals[x].strMeal;
        //console.log("plato..",meal_02.meals[x].strMeal);
        
        document.getElementsByClassName("plato_")[0].innerHTML = recetas2;

         
  }
        async function categoria(){
          Menuid=3;          
          console.log("probando ingrediente ");
      
          const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
          const meal_02 = await respuesta2.json();
          //console.log(meal_02);
          //console.log(meal_02.meals[0].strCategory);
          //console.log(meal_02.meals);
          for (x=0;x<meal_02.meals.length;x++) {
        
            let pais = "meals["+x+"].strArea";
            cuenta=x;     
        
            let lista="<li><a class='dropdown-item' id='"+x+"' onclick='pintarCard()' href='#'>"+meal_02.meals[x].strCategory+"</a></li>";
            //
             document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 
          }
        }
     
        
function pintarCard(id) {
  //console.log("probando el id...",id);

  var id = event.target.id;
  
  console.log("volver..") ;
  
  switch(Menuid){
    case 0:
      limpiarMenu ();
       console.log("no del Plato");  
       receta(id);
       console.log(id);    
       
       break
       case 1:
        limpiarMenu ();
         
         console.log("case 1 ingrediente",id);
         ingred(id);  
      
         break
       case 2:
        limpiarMenu ();
        console.log("pais__");  
        console.log(id);
        XPais(id);
       
        break
       case 3:
        limpiarMenu ();
        console.log("categoria");
        console.log(id);  
        Xcategoria(id)

       
         break

         
    }


}


async function ingred(id){
 

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const meal_02 = await respuesta2.json();
 
 

     console.log("ingrediente:..",meal_02.meals[id].strIngredient);
     let recetas2="ingrediente: "+meal_02.meals[id].strIngredient;
     document.getElementsByClassName("plato_")[0].innerHTML = recetas2;
     ingrediente=meal_02.meals[id].strIngredient;
     fasePlato(ingrediente);


     
  
}



async function fasePlato(ingrediente){

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingrediente);
  const meal_02 = await respuesta2.json();
 
 

     //console.log("ingrediente:..",meal_02.meals[id].strIngredient);
     let recetas2="plato: "+meal_02;
     //document.getElementsByClassName("plato_")[0].innerHTML = recetas2;
     console.log("plato x ingre_:..",meal_02);


for (x=0;x<meal_02.meals.length;x++) {

  let pais = "meals["+x+"].strArea";
  cuenta=x;     
  Menuid=0;

  let lista="<li><a class='dropdown-item' id='"+x+"' onclick='platoxingred()' href='#'>"+meal_02.meals[x].strMeal+"</a></li>";
  //console.log(lista) ;
   document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 


}


    
  
}

async function platoxingred(){
  var id = event.target.id;
  console.log("platoxingred..") ;

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingrediente);
  const meal_02 = await respuesta2.json();
 
  let lista="<li><a class='dropdown-item' id='"+0+"' onclick='platoxingred()' href='#'>"+meal_02.meals[id].strMeal+"</a></li>";
  let plato_=meal_02.meals[id].strMeal;
  console.log("platoc ing..",plato_) ;
   //document.getElementsByClassName("dropdown-menu")[0].innerHTML = lista; 
   //document.getElementsByClassName("plato_")[id].innerHTML = lista;

   document.getElementsByClassName("plato_")[0].innerHTML = lista;
   //recetaxplato(plato_);

   const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+plato_);
   const meal_05 = await respuesta.json();
   receta=meal_05.meals[0].strInstructions;
   console.log(meal_05.meals[0].strInstructions);
   document.getElementsByClassName("menu")[0].innerHTML = receta;
         
  }




async function XPais(id){
 

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const meal_02 = await respuesta2.json();
 
 

     //console.log("__pais..",meal_02.meals[id].strArea);
     let pais2="  pais: "+meal_02.meals[id].strArea;
     document.getElementsByClassName("plato_")[0].innerHTML = pais2;
     lugar=meal_02.meals[id].strArea;
     PaisxPlato(lugar);
     console.log("el pais es..",lugar);


     
  
}




async function PaisxPlato(lugar){
  console.log("x pais_:..",lugar);


  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+lugar);
  const meal_02 = await respuesta2.json();
 
 

     //console.log("ingrediente:..",meal_02.meals[id].strIngredient);
     let recetas2="plato: "+meal_02;
     //document.getElementsByClassName("plato_")[0].innerHTML = recetas2;
     console.log("plato x pais_:..",meal_02);


for (x=0;x<meal_02.meals.length;x++) {

  let pais = "meals["+x+"].strArea";
  cuenta=x;     
  Menuid=0;

  let lista="<li><a class='dropdown-item' id='"+x+"' onclick='Pais_plato()' href='#'>"+meal_02.meals[x].strMeal+"</a></li>";
  
   document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 

//console.log("..",lista);
}

 

    
  
}


async function Pais_plato(){
  var id = event.target.id;
  //console.log("plato x pais..",lugar) ;

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+lugar);
  const meal_02 = await respuesta2.json();
 console.log(meal_02.meals[id].strMeal);
  let lista="<li><a class='dropdown-item' id='"+0+"' onclick='platoxingred()' href='#'>"+meal_02.meals[id].strMeal+"</a></li>";
  let plato_=meal_02.meals[id].strMeal;
  console.log("platoc ing..",plato_) ;
   //document.getElementsByClassName("dropdown-menu")[0].innerHTML = lista; 
   //document.getElementsByClassName("plato_")[id].innerHTML = lista;

   document.getElementsByClassName("plato_")[0].innerHTML = lista;
   //recetaxplato(plato_);

   const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+plato_);
   const meal_05 = await respuesta.json();
   receta=meal_05.meals[0].strInstructions;
   console.log(meal_05.meals[0].strInstructions);
   document.getElementsByClassName("menu")[0].innerHTML = receta;
         
  }


 
  

async function Xcategoria(id){
 

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const meal_02 = await respuesta2.json();
 
 

     //console.log("__categoria..",meal_02.meals[id].strArea);
     let categoria2="  categoria: "+meal_02.meals[id].strArea;
     document.getElementsByClassName("plato_")[0].innerHTML = categoria2;
     lugar=meal_02.meals[id].strArea;
     categoriaxPlato(lugar);
     console.log("el categoria es..",lugar);


     
  
}




async function categoriaxPlato(lugar){
  console.log("x categoria_:..",lugar);


  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+lugar);
  const meal_02 = await respuesta2.json();
 
 

     //console.log("ingrediente:..",meal_02.meals[id].strIngredient);
     let recetas2="plato: "+meal_02;
     //document.getElementsByClassName("plato_")[0].innerHTML = recetas2;
     console.log("plato x categoria_:..",meal_02);


for (x=0;x<meal_02.meals.length;x++) {

  let categoria = "meals["+x+"].strArea";
  cuenta=x;     
  Menuid=0;

  let lista="<li><a class='dropdown-item' id='"+x+"' onclick='categoria_plato()' href='#'>"+meal_02.meals[x].strMeal+"</a></li>";
  
   document.getElementsByClassName("dropdown-menu")[0].innerHTML += lista; 

//console.log("..",lista);
}

 

    
  
}


async function categoria_plato(){
  var id = event.target.id;
  //console.log("plato x categoria..",lugar) ;

  const respuesta2 = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+lugar);
  const meal_02 = await respuesta2.json();
 console.log(meal_02.meals[id].strMeal);
  let lista="<li><a class='dropdown-item' id='"+0+"' onclick='platoxingred()' href='#'>"+meal_02.meals[id].strMeal+"</a></li>";
  let plato_=meal_02.meals[id].strMeal;
  console.log("platoc ing..",plato_) ;
   //document.getElementsByClassName("dropdown-menu")[0].innerHTML = lista; 
   //document.getElementsByClassName("plato_")[id].innerHTML = lista;

   document.getElementsByClassName("plato_")[0].innerHTML = lista;
   //recetaxplato(plato_);

   const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+plato_);
   const meal_05 = await respuesta.json();
   receta=meal_05.meals[0].strInstructions;
   console.log(meal_05.meals[0].strInstructions);
   document.getElementsByClassName("menu")[0].innerHTML = receta;
         
  }
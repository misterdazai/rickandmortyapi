fetch('https://rickandmortyapi.com/api/character/?page=1')
  .then((response) => {
    return response.json();
    
  })
  .then((data) => {
  
  var list = document.querySelector(".rk-list")
  data.results.forEach( (item) => {
  
  	list.innerHTML += `
    <div class="rk-list__item">
      <div class="content">
        <figure class="item-img">
          <img src="${item.image}" width="200px">
          <figcaption class="rk__item-title">${item.name}</figcaption>
        </figure>
        <div class="item-info">
          <span class="rk-list__item-gender"><b>Пол:</b> ${getGender(item.gender)}</span>
          <span class="rk-list__item-status"><b>Статус:</b> ${getStatus(item.status)}</span>
          <span class="rk-list__item-species"><b>Вид:</b> ${getSpecies(item.species)}</span>
          <span class="rk-list__item-type"><b>Подвид:</b> ${item.type}</span>
          <details>
          	<summary class="rk-list__item-locations"><b>Происхождение:</b> ${item.origin.name}</summary>
            <span></span>
          </details>
        </div>
      </div>
 		</div>`
   
  
//   getOrigin(item.origin.url);
  
  });
  typeHide();
});  
  
 function getGender(gender) {
 
 	switch(gender){
  	case("Male"):
    	return "Мужской";
  		break;
    case("Female"):
    	return "Женский";
  		break;
    case("Genderless"):
    	return "Отсутствует";
  		break;
    case("unknown"):
    	return "Неизвестно";
  		break;
  	default:

    	break;
  }

 }
 function getStatus(status) {
 
 	switch(status){
  	case("Alive"):
    	return "Жив";
  		break;
    case("Dead"):
    	return "Мёртв";
  		break;
    case("unknown"):
    	return "Неизвестно";
  		break;
  	default:
    	break;
  }

 }
 function getSpecies(species){
 
 	switch(species){
  	case("Human"):
    	return "Человек";
  		break;
    case("Alien"):
    	return "Пришелец";
  		break;
    case("Humanoid"):
    	return "Гуманоид";
  		break;
  	default:
    	return species;
    	break;
  }
 }
 function typeHide(){
   document.querySelectorAll(".rk-list__item-type").forEach( (el) => {
      if(!el.textContent.split("Подвид: ")[1]){
        el.style.display = "none";
      }
    });
 }
 function getOrigin(url){
 	let response = fetch(url);
  let commits = response.json();
  
 }

 
 
 
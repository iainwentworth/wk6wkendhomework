document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  const deleteButton = document.querySelector('#delete-all-button');

  const handleDeleteButton = function(event){
    const animalList = document.querySelector('#animal-list');
    animalList.innerHTML = '';
  }

  deleteButton.addEventListener('click', handleDeleteButton);


  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log(event);
    const name = event.target.name.value;
    const species = event.target.species.value;
    const continent = event.target.continent.value;
    const level = event.target.level.value;


    const animalList = document.querySelector('#animal-list');

    const addElement = function(type){
      return document.createElement(type);
    }

    // const animalDetails = document.createElement('div');
    const animalDetails = addElement('div');
    // const namePara = document.createElement('p');
    const namePara = addElement('p');
    // const speciesPara = document.createElement('p');
    const speciesPara = addElement('p');
    // const continentPara = document.createElement('p');
    const continentPara = addElement('p');
    const levelPara = addElement('p');

    namePara.textContent = name;
    speciesPara.textContent = species;
    continentPara.textContent = continent;
    levelPara.textContent = level;

    animalDetails.appendChild(namePara);
    animalDetails.appendChild(speciesPara);
    animalDetails.appendChild(continentPara);
    animalDetails.appendChild(levelPara);


    animalList.appendChild(animalDetails);

    form.reset();
  }

  form.addEventListener('submit', handleFormSubmit);
})

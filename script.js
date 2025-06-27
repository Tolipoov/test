const showModalBtn = document.getElementById('showModalBtn');
const appendCardsBtn = document.getElementById('appendCardsBtn');
const modalContent = document.getElementById('modalContent');
const cardsContainer = document.getElementById('cardsContainer');

// All fetched data
let jsonData = [];
// Cards count
let currentIndex = 0;

fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
  .then(res => res.json())       
  .then(data => {
    jsonData = data;             
  });

// Show in Modal
showModalBtn.addEventListener('click', () => {
  modalContent.innerHTML = '';

  // Get the first 10 items from data
  const items = jsonData.slice(0, 10);

  items.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<p><strong>${item.name}</strong> - ${item.language}</p>`;
    modalContent.appendChild(div);
  });

  // Open modal
  const modal = new bootstrap.Modal(document.getElementById('dataModal'));
  modal.show();
});

// When "Append Cards" button is clicked
appendCardsBtn.addEventListener('click', () => {
  // Get the next 10 items based on currentIndex
  const items = jsonData.slice(currentIndex, currentIndex + 10);

  items.forEach(item => {
    // Create a column element
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 col-12 mb-4'; 

    // Create a Bootstrap card for each item
    col.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.language}</p>
        </div>
      </div>
    `;

    cardsContainer.appendChild(col);
  });

  // Move to the next set of items
  currentIndex += 10;
});


// Load the JSON data
fetch('/final_project_repository/DnD-Character-Generater/src/background.json')
  .then(response => response.json())
  .then(data => {
    // Get the select element from the HTML page
    const backgroundSelect = document.getElementById('background-select');

    // Create an option element for each profession in the JSON data
    data.forEach(background => {
      const option = document.createElement('option');
      option.value = background.name;
      option.text = background.name;
      backgroundSelect.appendChild(option);
    });
  })
  .catch(error => console.error(error));
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the necessary elements
  const inputListName = document.querySelector('.listname');
  const formList1 = document.querySelector('.list1');
  const inputItem = formList1.querySelector('input[type="text"]');
  const inputQuantity = formList1.querySelector('.quantity');
  const buttonAdd = formList1.querySelector('button');
  const listbox = document.querySelector('.listbox');
  const buttonSaveList = document.querySelector('.save');

  // Create an event listener for the "Add" button
  buttonAdd.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the values from the input fields
    const item = inputItem.value.toUpperCase(); // Convert to uppercase
    const quantity = inputQuantity.value;

    // Create a new list item element
    const listItem = document.createElement('div');
    listItem.textContent = `${item} - ${quantity}`;

    // Apply text-transform: uppercase; to the list item
    listItem.style.textTransform = 'uppercase';

    // Create a delete button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    // Append the list item and delete button to the list box
    listItem.appendChild(deleteButton);
    listbox.appendChild(listItem);

    // Clear the input fields
    inputItem.value = '';
    inputQuantity.value = '';
  });

  // Create an event listener for the "Save List" button
  buttonSaveList.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the value of the list name input field
    const listName = inputListName.value;

    // Get the list items from the list box
    const listItems = Array.from(listbox.children).map(function(item) {
      return item.textContent;
    });

    // Store the list data in localStorage
    localStorage.setItem('listName', listName);
    localStorage.setItem('listItems', JSON.stringify(listItems));

    // Redirect to the new HTML page
    window.location.href = 'savedlist.html';
  });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the list container element
  const listContainer = document.getElementById('list-container');

  // Retrieve the list data from localStorage
  const listName = localStorage.getItem('listName');
  const listItems = JSON.parse(localStorage.getItem('listItems'));

  // Display the list name
  const listNameHeading = document.createElement('h2');
  listNameHeading.textContent = listName;
  listContainer.appendChild(listNameHeading);

  // Display the list items
  const listItemsList = document.createElement('ul');
  listItems.forEach(function(itemText) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    listItemsList.appendChild(listItem);
  });
  listContainer.appendChild(listItemsList);
});




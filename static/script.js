document.getElementById('addFieldButton').addEventListener('click', function() {
    createAndAppendInputField();
});

function createAndAppendInputField() {
    var container = document.getElementById('fieldContainer');
    var wrapper = document.createElement('div');
    wrapper.className = 'field-wrapper';

    var input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter something...';

    // Event listener for the Enter key press
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action to handle it manually
            createAndAppendInputField(); // Create a new input field
        }
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        container.removeChild(wrapper);
    };

    wrapper.appendChild(input);
    wrapper.appendChild(deleteButton);
    container.appendChild(wrapper);

    input.focus(); // Focus on the newly created input field
}

document.getElementById('submitFieldsButton').addEventListener('click', function() {
    var inputs = document.getElementById('fieldContainer').getElementsByTagName('input');
    var values = Array.from(inputs).map(input => input.value);
    console.log(values); // This can be replaced with actual submission logic
    alert('Fields submitted: ' + values.join(', '));
});

// Initially create one input field on page load
createAndAppendInputField();

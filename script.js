// It Will redirect to the summary.html page.
document.getElementById("employeeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  saveFormData();
  window.location.href = "summary.html"; //Redirect to summary.html
});

// Function to pre-populate form with stored form data
function prepopulateForm() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
      document.getElementById('employeeId').value = formData.employeeId;
      document.getElementById('employeeEmail').value = formData.employeeEmail;
      document.getElementById('employeeName').value = formData.employeeName;
      document.getElementById('employeePhone').value = formData.employeePhone;
      document.getElementById('joiningDate').value = formData.joiningDate;
      document.getElementById('age').value = formData.age;
      document.getElementById('employmentType').value = formData.employmentType;
      document.getElementById('programmingLanguages').value = formData.programmingLanguages;
      document.getElementById('certificate').value = formData.certificate;
      document.getElementById('city').value = formData.city;
      document.getElementById('alternatePhone').value = formData.alternatePhone;
  }
}

// Pre-populate the form on page load
document.addEventListener('DOMContentLoaded', prepopulateForm);

document.getElementById("employeeForm").addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission
saveFormData();
window.location.href = "summary.html"; // Redirect to summary.html
});

// Retrieve form data
function saveFormData() {
  const employeeId = document.getElementById('employeeId').value;
  const employeeEmail = document.getElementById('employeeEmail').value;
  const employeeName = document.getElementById('employeeName').value;
  const employeePhone = document.getElementById('employeePhone').value;
  const joiningDate = document.getElementById('joiningDate').value;
  const age = document.getElementById('age').value;
  const employmentType = document.getElementById('employmentType').value;
  const programmingLanguages = document.getElementById('multipleSelect').value;
  const certificate = document.getElementById('certificate').value;
  const city = document.getElementById('city').value;
  const alternatePhone = document.getElementById('alternatePhone').value;

  // Create an object to store form data
  const formData = {
      employeeId,
      employeeEmail,
      employeeName,
      employeePhone,
      joiningDate,
      age,
      employmentType,
      programmingLanguages,
      certificate,
      city,
      alternatePhone
  };

  // Store form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));
}






// Handle the required fields
const form_ = document.getElementById('employeeForm');
const inputs = form_.querySelectorAll('input, select');

inputs.forEach(input => {
  input.addEventListener('blur', handleBlur);
  input.addEventListener('input', handleInput);
});

function handleBlur(event) {
  const element = event.target;
  const label = document.querySelector(`label[for=${element.id}]`);

  if (element.required && !element.value.trim()) {
    label.classList.add('error-label');
  } else {
    label.classList.remove('error-label');
  }
}

function handleInput(event) {
  const element = event.target;
  const label = document.querySelector(`label[for=${element.id}]`);

  if (element.required && !element.value.trim()) {
    label.classList.add('error-label');
  } else {
    label.classList.remove('error-label');
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  const formData = new FormData(form_);
  const formDataObj = Object.fromEntries(formData.entries());
  console.log('Form data:', formDataObj);

  // Clear the form
  form.reset();

}



// Handle Joining Date

const joiningDateInput = document.getElementById('joiningDate');
joiningDateInput.addEventListener('input', handleJoiningDateInput);

function handleBlur(event) {
  const element = event.target;
  const label = document.querySelector(`label[for=${element.id}]`);

  if (element.required && !element.value.trim()) {
    label.classList.add('error-label');
  } else {
    label.classList.remove('error-label');
  }
}

function handleInput(event) {
  const element = event.target;
  const label = document.querySelector(`label[for=${element.id}]`);

  if (element.required && !element.value.trim()) {
    label.classList.add('error-label');
  } else {
    label.classList.remove('error-label');
  }
}

function handleJoiningDateInput() {
  const selectedDate = new Date(joiningDateInput.value);
  const currentDate = new Date();
  const minDate = new Date();
  minDate.setMonth(currentDate.getMonth() - 1);

  if (selectedDate < minDate) {
    joiningDateInput.setCustomValidity('Please select a date at least 1 month from the current date.');
  } else {
    joiningDateInput.setCustomValidity('');
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

   // Collect form data
   const formData = new FormData(form);
   const formDataObj = Object.fromEntries(formData.entries());
   console.log('Form data:', formDataObj);
 
   // Clear the form
   form.reset();
}

// ON CLICKING THE SUBMIT BUTTON
const form1 = document.getElementById('employeeForm');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  const formData = new FormData(form1);
  const formDataObj = Object.fromEntries(formData.entries());

  // Redirect to the summary page with form data
  window.location.href = 'summary.html?formData=' + encodeURIComponent(JSON.stringify(formDataObj));
}





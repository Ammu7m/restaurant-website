// Script to handle form validations and dynamic interactions

// Ensure the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Validate form fields before submission
    form.addEventListener('submit', (event) => {
        // Prevent form submission if validation fails
        if (!validateForm()) {
            event.preventDefault();
            alert('Please fill in all required fields correctly.');
        }
    });

    // Form validation function
    function validateForm() {
        let isValid = true;

        // Validate name field
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            setError(name, 'Name is required.');
            isValid = false;
        } else {
            clearError(name);
        }

        // Validate email field
        const email = document.getElementById('email');
        if (!validateEmail(email.value)) {
            setError(email, 'Enter a valid email address.');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate phone field
        const phone = document.getElementById('phone');
        if (!validatePhone(phone.value)) {
            setError(phone, 'Enter a valid phone number.');
            isValid = false;
        } else {
            clearError(phone);
        }

        // Validate date field
        const date = document.getElementById('date');
        if (date.value === '') {
            setError(date, 'Reservation date is required.');
            isValid = false;
        } else {
            clearError(date);
        }

        // Validate time field
        const time = document.getElementById('time');
        if (time.value === '') {
            setError(time, 'Reservation time is required.');
            isValid = false;
        } else {
            clearError(time);
        }

        // Validate guests field
        const guests = document.getElementById('guests');
        if (guests.value === '' || guests.value <= 0) {
            setError(guests, 'Enter a valid number of guests.');
            isValid = false;
        } else {
            clearError(guests);
        }

        return isValid;
    }

    // Utility function to set error messages
    function setError(element, message) {
        const errorDiv = element.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.textContent = message;
        } else {
            const div = document.createElement('div');
            div.className = 'error-message text-danger mt-1';
            div.textContent = message;
            element.parentNode.appendChild(div);
        }
        element.classList.add('is-invalid');
    }

    // Utility function to clear error messages
    function clearError(element) {
        const errorDiv = element.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.remove();
        }
        element.classList.remove('is-invalid');
    }

    // Utility function to validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Utility function to validate phone number
    function validatePhone(phone) {
        const regex = /^[0-9]{10}$/; // Simple validation for 10-digit phone numbers
        return regex.test(phone);
    }
});

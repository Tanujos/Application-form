document.getElementById('doctorForm').addEventListener('submit', function(event) {
    event.preventDefault();
       alert('Form submitted successfully!');
    });
    $(document).ready(function() {
    $('#submitBtn').click(function() {
    var formData = {
    name: $('#name').val(),
    gender: $('#gender').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
    specialization: $('#specialization').val(),
    qualification: $('#qualification').val(),
    experience: $('#experience').val(),
    address: $('#address').val()
    }
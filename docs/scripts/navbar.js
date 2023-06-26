window.addEventListener('DOMContentLoaded', function () {
    // Fetch the navbar.html file
    fetch('navbar.html') // Use the base URL to fetch the navbar.html file
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        // Insert the navbar HTML into the navbarContainer element
      document.getElementById('navbarContainer').innerHTML = html;
      })
      .catch(function (error) {
        console.log('Error fetching navbar:', error);
      });
  });
  



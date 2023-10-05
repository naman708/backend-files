// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => {
        
        data.forEach((appointment) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${appointment.name}, Date: ${appointment.date}, Time: ${appointment.time}`;
            ulist.appendChild(listItem);
          });
  
      })
      .catch((error) => {
        console.error(error);
      });
  });
  
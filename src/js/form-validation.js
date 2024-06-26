import { populateResultsData } from './results';

function showResultsSection() {
  const mainFormSection = document.getElementById('main-form');
  const searchAgainSection = document.getElementById('search-again');
  const featuresSection = document.getElementById('features');
  const resultsSection = document.getElementById('results');

  populateResultsData();

  mainFormSection.classList.add('d-none');
  featuresSection.classList.add('d-none');
  searchAgainSection.classList.remove('d-none');
  resultsSection.classList.remove('d-none');
}

function initInputValidation() {
  document.querySelectorAll('input[type="text"]').forEach(function (input) {
    input.addEventListener('keypress', function (event) {
      var phone;
      // if (isNaN(input.value())){
      //    phone = input.value();
      // }
      if (phoneInput) {
        phone = phoneInput.value;
      }
      var y = true;
      if (y === false){


      
      
      const email = input.value.toLowerCase();
      const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (email.match(regEx)) {
        var x = true;
        input.parentNode.classList.remove('error');
      } else {
        var x = false;
      }}
      // if (phone.length === 10 ){
      //   var y = true;
      //   input.parentNode.classList.remove('error');

      // }
      const keycode = event.keyCode ? event.keyCode : event.which;
      if (keycode == '13') {
        event.preventDefault();
        localStorage.clear();

        if (x === true) {
          const proxyurl = '';
          const url = 'https://ltvdataapi.devltv.co/api/v1/records?email=' + email;
          fetch(proxyurl + url)
            .then(function (response) {
              return response.text();
            })
            .then(function (contents) {
              localStorage.setItem('userObject', contents);
              showResultsSection();
            })
            .catch(function (e) {
              console.log(e);
            });
        } else if (x !== true) {
          input.parentNode.classList.add('error');
        }
        if(y === true){
          const proxyurl = '';
          const url = 'https://ltvdataapi.devltv.co/api/v1/records?phone=' + phone;
          fetch(proxyurl + url)
            .then(function (response) {
              return response.text();
            })
            .then(function (contents) {
              localStorage.setItem('userObject', contents);
              showResultsSection();
            })
            .catch(function (e) {
              console.log(e);
            });
        }
        else if (y !== true) {
          input.parentNode.classList.add('error');
        }
      }
    });
  });
}

function initSearchButton() {
  document.querySelectorAll('.js-btn-search').forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      localStorage.clear(); // Clears storage for next request
      const selector = e.currentTarget.dataset.form;
      const emailInput = document.getElementById(`email-${selector}-input`);
      const email = emailInput.value.toLowerCase();
      const phoneInput = document.getElementById(`phone-${selector}-input`);
      let  phone;
      let x , y;
      
        phone = phoneInput.value;
     
     y = true;
    //  if (phone.length() === 10 ){
    //   y = true;
    //   input.parentNode.classList.remove('error');

    // }

      const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (email.match(regEx)) {
        x = true;
      } else {
        x = false;
      }
      
      if (y === true) {
        emailInput.parentNode.classList.remove('error');
        const proxyurl = '';
        const url = 'https://ltvdataapi.devltv.co/api/v1/records?phone=' + phone;
        fetch(proxyurl + url)
          .then(function (response) {
            return response.text();
          })
          .then(function (contents) {
            localStorage.setItem('userObject', contents);
            showResultsSection();
          })
          .catch(function (e) {
            console.log(e);
          });
      } else if (y !== true) {
        emailInput.parentNode.classList.add('error');
      }

      if (x === true) {
        emailInput.parentNode.classList.remove('error');
        const proxyurl = '';
        const url = 'https://ltvdataapi.devltv.co/api/v1/records?email=' + email;
        fetch(proxyurl + url)
          .then(function (response) {
            return response.text();
          })
          .then(function (contents) {
            localStorage.setItem('userObject', contents);
            showResultsSection();
          })
          .catch(function (e) {
            console.log(e);
          });
      } else if (x !== true) {
        emailInput.parentNode.classList.add('error');
      }
    });
  });
}

export { initInputValidation, initSearchButton };

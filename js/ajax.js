// This file manages the function required to call the API.


// This function is used to make an ajax call to the API. It returns a json object.

function fetchAndDecode(url) {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            return response.json();
        }
    })
    .catch(e => {
      console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
    })
    .finally(() => {
        console.log(`fetch attempt for "${url}" finished.`);
      });
    }
  
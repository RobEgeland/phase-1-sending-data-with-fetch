// Add your code here



function submitData(name, email) {
    const userObj = {
        'name': name,
        'email': email,
    }
   return fetch('http://localhost:3000/users', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json'
       },
       body: JSON.stringify(userObj)
   })
   .then(function (response) {
       return response.json();
   })
   .then(function (object) {
       addID(object.id)
   })
   .catch(function (error) {
       addError(error.message);
   })
}
function addID(newID) {
    document.getElementsByTagName('body')[0].innerHTML = newID
}
function addError(error) {
    document.getElementsByTagName('body')[0].innerHTML = error
}
submitData()



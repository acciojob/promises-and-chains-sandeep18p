document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  if (age.trim() === '' || name.trim() === '') {
    alert("Please fill in all fields.");
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise.then(message => {
    alert(message);
  }).catch(error => {
    alert(error);
  });
});
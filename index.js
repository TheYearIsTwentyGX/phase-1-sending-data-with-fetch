// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({"name": name, "email": email}),
    }).then(resp => resp.json())
    .then(user => {
        document.querySelector('script').textContent = user.id;
    })
    .catch(error => document.querySelector('script').textContent = error.message);
}
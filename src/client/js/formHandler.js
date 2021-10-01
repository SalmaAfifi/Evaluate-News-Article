function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForURL(formText)){

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/test/${formText}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    }
    else {
        document.getElementById('results').innerHTML = "PLEASE INSERT A VALID URL"
    }
}

export { handleSubmit }

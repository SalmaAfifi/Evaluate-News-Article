function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForURL(formText)){

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8081/test/${formText}`)
    .then(res => res.json())
    .then(function(res) {
        var result = ""
        for (const [key, value] of Object.entries(res)) {
            result += `${key}: ${value} <br>`
          }
        document.getElementById('results').innerHTML = result
    })
    }
    else {
        document.getElementById('results').innerHTML = "PLEASE INSERT A VALID URL"
    }
}

export { handleSubmit }

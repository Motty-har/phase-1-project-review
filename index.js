const submitForm = document.getElementById('post')
addEventListener("DOMContentLoaded", submitForm.addEventListener("click", (event) => {
    event.preventDefault()
    const firstName = event.target[0].value
    const lastName = event.target[1].value
    const goals = event.target[2].value
    const assists = event.target[3].value
    const playerStats = {
        firstname: firstName,
        lastname: lastName,
        goals: goals,
        assists: assists
}
}))
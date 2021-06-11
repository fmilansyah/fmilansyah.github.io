function getSnakeCase() {
    let name = document.getElementById('snake_case_field').value
    let result = name.toLowerCase().replace(/\s/g, "_").replace(/[^\w\s]/g, '')
    document.getElementById('snake_case_result').innerHTML = result
}
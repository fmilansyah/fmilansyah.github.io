function getLowerSnakeCase() {
    let name = document.getElementById('lower_snake_case_field').value
    let result = name.toLowerCase().replace(/\s/g, "_").replace(/[^\w\s]/g, '')
    document.getElementById('lower_snake_case_result').innerHTML = result
}

function getLowerKebabCase() {
    let name = document.getElementById('lower_kebab_case_field').value
    let result = name.toLowerCase().replace(/\s/g, "-").replace(/[^\w\s\-]/g, '')
    document.getElementById('lower_kebab_case_result').innerHTML = result
}
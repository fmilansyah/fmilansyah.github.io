function encrypt() {
    let alias = document.getElementById('alias').value
    let text = document.getElementById('text').value
    const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0))
    const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2)
    const applySaltToChar = (code) => textToChars(alias).reduce((a, b) => a ^ b, code)
    let result = text.split('').map(textToChars).map(applySaltToChar).map(byteHex).join('')
    document.getElementById('result').innerHTML = result
}

function decrypt() {
    let alias = document.getElementById('alias').value
    let text = document.getElementById('text').value
    const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0))
    const applySaltToChar = (code) => textToChars(alias).reduce((a, b) => a ^ b, code)
    let result = text.match(/.{1,2}/g).map((hex) => parseInt(hex, 16)).map(applySaltToChar).map((charCode) => String.fromCharCode(charCode)).join('')
    document.getElementById('result').innerHTML = result
}
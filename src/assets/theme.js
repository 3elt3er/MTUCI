let head = window.document.getElementsByTagName('head')[0]

// localStorage.setItem('isDarkMode', true)
function includeCSS(aFile, aRel){
    let style = window.document.createElement('link')
    style.href = aFile
    style.rel = aRel || 'stylesheet'
    style.id = 'theme'
    console.log('includeCSS')
    head.appendChild(style)
}

function deleteCSS(){
    theme.remove();
    console.log('deleteCSS')
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('isDarkMode') !== 'true') {
        deleteCSS()
    }
});

themeIcon.addEventListener('click', ()=> {
    if (localStorage.getItem('isDarkMode') === 'true') {
        deleteCSS()
        localStorage.setItem('isDarkMode', false)
    } else {
        includeCSS('blackTheme.css')
        localStorage.setItem('isDarkMode', true)
    }
})
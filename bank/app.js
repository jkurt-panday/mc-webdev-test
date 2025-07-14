// displaying template elements

const routes = {
    '/login': {templateId: 'login'},
    '/dashboard': {templateId: 'dashboard'},
    '/credit': {templateId: 'credit'}
};

function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
    
    // if a route cannot be found, redirect to 'login' page
    if (!route) {
        return navigate('/login')
    }
  
    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    
    app.innerHTML = '';
    app.appendChild(view);
}

updateRoute()


function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();  
}

// function to get the URL when a link is clicked and prevent the browser's
// default link behavior

function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
}

window.onpopstate = () => updateRoute()
updateRoute()


// register function that sends data to the server
function register() {
    const registerForm = document.getElementById('registerForm');
    // FormData interface is built in
    const formData = new FormData(registerForm);
    console.log(formData)
    const data = Object.fromEntries(formData);
    console.log(data)
    const jsonData = JSON.stringify(data)
    console.log(jsonData);
}
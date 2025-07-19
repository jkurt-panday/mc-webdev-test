// displaying template elements

let account = null;

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


// register function that gets data as key/value pairs
// then convert them to an object
// then serialize data to JSON format
async function register() {
    const registerForm = document.getElementById('registerForm');
    // FormData interface is built in
    const formData = new FormData(registerForm);
    // console.log(formData)
    const data = Object.fromEntries(formData);
    // console.log(data)
    const jsonData = JSON.stringify(data)
    // console.log(jsonData);

    const result = await createAccount(jsonData)

    if (result.error) {
        return console.log('An error occured: ', result.error);
    }

    console.log('Account created', result)
    
    account = result;
    navigate('/dashboard')
}

// createAccount function the sends data to the server
async function createAccount(account) {
    try {
        const response = await fetch('//localhost:5000/api/accounts', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: account
        });
        return await response.json();
    } catch (error) {
        return { error: error.message || 'Unknown error'};
    }
}


// code to login using an existing account, and fetch its data
async function login() {
    const loginForm = document.getElementById('loginForm')
    const user = loginForm.user.value;      // value is accessed by its name attribute

    const data = await getAccount(user);

    if (data.error) {
        return console.log('loginError', data.error);
    }

    account = data
    navigate('/dashboard')
}

async function getAccount(user) {
    try {
        const response = await fetch('//localhost:5000/api/accounts' + encodeURIComponent(user));
        console.log(response.json())
        return await response.json();
    } catch (error) {
        return {error: error.message || 'Unknown error'};
    }
}
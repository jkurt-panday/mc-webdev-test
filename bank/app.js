// displaying template elements

let state = Object.freeze({
    account: null
});

const routes = {
    '/login': {templateId: 'login'},
    '/dashboard': {templateId: 'dashboard', init: updateDashboard},
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

    if (typeof route.init === 'function') {
        route.init();
    }
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
        // return console.log('An error occured: ', result.error);
        return updateElement('regError', result.error)
    }

    console.log('Account created', result)

    // state.account = result;
    updateState('account', result)
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
        // return console.log('loginError', data.error);
        return updateElement('loginError', data.error);
    }

    // state.account = data
    updateState('account', data)
    navigate('/dashboard')
}

async function getAccount(user) {
    try {
        const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
        // console.log(response.json())
        return await response.json();
    } catch (error) {
        return {error: error.message || 'Unknown error'};
    }
}

function updateElement(id, textOrNode) {
    const element = document.getElementById(id);
    element.textContent = '';   // Removes all children
    element.append(textOrNode)
}

function updateDashboard() {
    // refactoring the account variable for the next changes
    const account = state.account

    // check if account exist or not
    if (!account) {
        return logout();
    }

    updateElement('descriptionDash', account.description);
    updateElement('balance', account.balance.toFixed(2));
    updateElement('currency', account.currency);

    const transactionRows = document.createDocumentFragment();
    for (const transaction of account.transactions) {
        const transactionRow = createTransactionRow(transaction);
        transactionRows.appendChild(transactionRow);
    }
    updateElement('transactions', transactionRows);
}

// function creates a new table row and fills in its contents using transaction
// data, to be used in updateDashboard() to populate the table
function createTransactionRow(transaction) {
    const template = document.getElementById('transaction');
    const transactionRow = template.content.cloneNode(true);
    const tr = transactionRow.querySelector('tr');

    tr.children[0].textContent = transaction.date;
    tr.children[1].textContent = transaction.object;
    tr.children[2].textContent = transaction.amount.toFixed(2);
    return transactionRow;
}

// to centralize state change
function updateState(property, newData) {
    state = Object.freeze({
        ...state,
        [property]: newData
    });

    console.log(state)
}

// to exit dashboard and account
function logout() {
    updateState('account', null);
    navigate('/login');
}
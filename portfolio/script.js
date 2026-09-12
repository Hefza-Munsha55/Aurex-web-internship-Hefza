/*console.log("Signup form initialized");
const signupForm = document.getElementById('signupForm');
const errorMsg = document.getElementById('signupError'); // signup wale page ka error

// 1. SIGNUP FORM
if(signupForm){
    signupForm.addEventListener('submit', function(e){
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('ConfirmPassword').value;

        if(password !== confirmPassword){
            errorMsg.innerText = "Password and Confirm Password do not match!";
            return;
        }
        if(password.length < 6){
            errorMsg.innerText = "Password must be at least 6 characters!";
            return;
        }

        const existingUser = localStorage.getItem(email);
        if(existingUser){
            errorMsg.innerText = "This email already exists!";
            return;
        }

        const userData = { name: fullname, email: email, password: password, joined: new Date().toLocaleDateString('en-GB') };
        localStorage.setItem(email, JSON.stringify(userData));

        alert("Account Created Successfully!");
        window.location.href = "index.html"; 
    });
}

// 2. LOGIN FORM
const loginForm = document.getElementById('loginForm'); // <- add kiya
const loginError = document.getElementById('loginError'); // <- add kiya

if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('rememberMe').checked; 
        const userData = JSON.parse(localStorage.getItem(email));

        if(userData && userData.password === password){
            loginError.innerText = ""; 
            
            if(remember){
                localStorage.setItem("loggedInUser", email);
            } else {
                sessionStorage.setItem("loggedInUser", email);
            }
            
            window.location.href = "dashboard.html";
        } else {
            loginError.innerText = "Email or Password is wrong!";
        }
    });
}

// 3. DARK MODE TOGGLE
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Page load hote hi check karo
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode");
    if(themeBtn) themeBtn.innerText = "☀️ Light Mode"; // check lagaya
}

if(themeBtn){ // check lagaya
    themeBtn.addEventListener('click', () => {
        body.classList.toggle("dark-mode");
        
        if(body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
            themeBtn.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerText = "🌙 Dark Mode";
        }
    });
}

// 4. PROFILE INFO LOAD - sirf dashboard pe
const profileName = document.getElementById('profileName'); // check
if(profileName){
    const loggedInUser = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
    if(loggedInUser){
        const userData = JSON.parse(localStorage.getItem(loggedInUser));
        if(userData){
            profileName.innerText = userData.name;
            document.getElementById('profileEmail').innerText = loggedInUser;
            document.getElementById('profileDate').innerText = new Date().toLocaleDateString();
        }
    }
}*/
console.log("Script loaded");

// 1. SIGNUP FORM
const signupForm = document.getElementById('signupForm');
const signupError = document.getElementById('signupError'); // aapke html me id="errorMsg" hai

if(signupForm){
    signupForm.addEventListener('submit', function(e){
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('ConfirmPassword').value;

        signupError.innerText = ""; // error clear

        if(password !== confirmPassword){
            signupError.innerText = "Password and Confirm Password do not match!";
            return;
        }
        if(password.length < 6){
            signupError.innerText = "Password must be at least 6 characters!";
            return;
        }

        const existingUser = localStorage.getItem(email);
        if(existingUser){
            signupError.innerText="This email already exists!";
            return;
        }

        const userData = { name: fullname, email: email, password: password };
        localStorage.setItem(email, JSON.stringify(userData));

        alert("Account Created Successfully!");
        window.location.href = "login.html"; 
    });
}

// 2. LOGIN FORM
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError'); // login page pe ye <p> banana hoga

if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberEl = document.getElementById('rememberMe'); // check karo hai ya nahi
        const remember = rememberEl ? rememberEl.checked : false;
        
        const userData = JSON.parse(localStorage.getItem(email));

        if(userData && userData.password === password){
            if(loginError) loginError.innerText = ""; 
            
            if(remember){
                localStorage.setItem("loggedInUser", email);
            } else {
                sessionStorage.setItem("loggedInUser", email);
            }
            
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            loginError.innerText = "Email or Password is wrong!";
        }
    });
}

// 3. DARK MODE TOGGLE
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode");
    if(themeBtn) themeBtn.innerText = "☀️ Light Mode";
}

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
            themeBtn.innerText = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerText = "🌙 Dark Mode";
        }
    });
}

//solar


// Solar Bill Calculator
function calculate(){
    const bill = document.getElementById('bill').value;
    const result = document.getElementById('result');
    if(bill === "" || bill < 0){
        result.innerText = "Please enter a valid bill amount";
        return;
    }
    const savings = bill * 0.7; // 70% saving
    result.innerText = `You can save approx PKR ${savings.toFixed(0)} per month with Solar!`;
}

// Dark Mode - ye pehle wala hi code hai
const themeBtn = document.getElementById('themeBtn');
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.innerText = "☀️";
}
if(themeBtn){
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
            themeBtn.innerText = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerText = "🌙";
        }
    });
}
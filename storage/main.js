function save_name(){
    localStorage.name = document.getElementById('name').value;
}

function load_name(){
    if (localStorage.name){
        document.getElementById('name').value = localStorage.name;
    }
}

function save_password(){
    localStorage.password = document.getElementById('password').value;
}

function load_password(){
    if (localStorage.senha){
        document.getElementById('password').value = localStorage.password;
    }
}

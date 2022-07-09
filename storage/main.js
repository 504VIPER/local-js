function save_name(){
    var name = document.getElementById('name').value;
    localStorage.name = name;
    console.log(`Name: ${name}`)
};


function load_name(){
    if (localStorage.name){
        document.getElementById('name').value = localStorage.name;
        console.log('Name loaded')
    };
};


function save_password(){
    var password = document.getElementById('password').value;
    localStorage.password = password;
    console.log(`Password: ${password}`)
};


function load_password(){
    if (localStorage.password){
        document.getElementById('password').value = localStorage.password;
        console.log('Password loaded')
    };
};

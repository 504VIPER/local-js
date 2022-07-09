var db = openDatabase('DataBase', "2.0", "Mybase", 4048);

db.transaction(function(criar){
    criar.executeSql("CREATE TABLE main (name TEXT, password TEXT)");
    console.log('table created')
});

function salvar(){

    var name = document.getElementById('namedb').value;
    
    var password = document.getElementById('passworddb').value;

    db.transaction(function(armazenar){
        armazenar.executeSql("INSERT INTO main (name, password) VALUES (?,?)",[name, password]);
        console.log('inserted')
    });

};

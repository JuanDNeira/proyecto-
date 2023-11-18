let mysql = require("mysql");


let conexion = mysql.createConnection({
    host: "localhost",
    database: "bd_datos",
    user: "root",
    password: ""
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
});

conexion.query('SELECT * from productos', (err,rows) =>{
    if(err) throw err
    console.log('lo datos de la tabla son estos');
    console .log(rows);
});
conexion.end();
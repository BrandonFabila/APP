const validation = (userData) => {
    let errors = {};
    //errors
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "Email invalido"
    }
    if(!userData.username){//si esta vacio
        errors.username = "Ingresa el correo"
    }
    if(userData.username.length > 35){
        errors.username  = "El email no puede superar 35 caracteres"
    }
    //password
    if(!userData.password.match(/\d/)){//si no contiene numeros
        errors.password = "La contraseña debe contener al menos un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "La contraseña debe de contener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;
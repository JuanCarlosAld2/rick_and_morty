export default function validation(inputs){
    const regexEmail=/\S+@\S+\.\S+/;
    const regexPassword=new RegExp("[0-9]");
    const errors = {};

    if(!regexEmail.test(inputs.username)){
        errors.username="El nombre debe ser un correo!";
    }
    if(!inputs.username){
        errors.username="El nombre es obligatorio!";
    }
    if(inputs.username.length > 35){
        errors.username="Maximo 35 caracteres!";
    }
    if(regexPassword.test(inputs.password)){
        errors.password="Almenos un numero!";
    }
    if(inputs.password.length < 6 || inputs.password.length > 10){
        errors.password="Entre 6 y 10 caracteres";
    }

    return errors;
}
const contrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function esContrasenaValida (pasword) {
    return contrasena.test(pasword);
}
console.log("Abcdef12:",esContrasenaValida("Abcdef12")); //true
console.log("abcdef12:",esContrasenaValida("abcdef12")); // false (falta mayúscula)
console.log("ABCDEFG1:",esContrasenaValida("ABCDEFG1")); // false (falta minúscula)
console.log("Ab1:",esContrasenaValida("Ab1"));      // false (menos de 8)
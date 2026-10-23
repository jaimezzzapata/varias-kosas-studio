import { buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";
import { setLocalStorage } from "../helpers/local-storage.js";
import { generarToken } from "../helpers/generators.js";

function iniciarSesion() {
    let correo = document.querySelector("#correo").value
    let contrasena = document.querySelector("#clave").value
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        let token = generarToken()
        setLocalStorage("token", token)
        setLocalStorage("usuario", auth)
        generalAlert("Bienvenido al sistema", "Será redireccionao al catálogo de cosas", "success")
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 2000)
        return
    }
    generalAlert("Error", "Usuario y/o contraseña incorrectos", "error")
    setTimeout(() => {
        return window.location.href = "/index.html"
    }, 3000)
}



document.querySelector("#btn-login").addEventListener("click", iniciarSesion)

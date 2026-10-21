const usuarios = [
    {
        nombre: "Jaime Zapata Valencia",
        telefono: "3058577315",
        correo: "correo@correo.com",
        contrasena: "1234567890",
        id: "id1234567890"
    },
    {
        nombre: "Ana Soto Suarez",
        telefono: "3058577567",
        correo: "ana@correo.com",
        contrasena: "0987654321",
        id: "id0987654321"
    }
];

export function guardarUsuario() {

}

export function buscarUsuario(correo, contrasena) {
    let auth = usuarios.some((usuario) => correo == usuario.correo && contrasena == usuario.contrasena)
    return auth
}
let imagenes=["MACUCA", "LUCIANA", "ARACELI", "ATENCION", "GOAT", "CRISTO", "NIGERIANO", "RUBY", "MANGIO", "HOMBROS", "BRAZUCA", "SEMAFORO"]
let participantes= {
    "Grupo": "Macuca",
    "Integrantes": [
        {
            "nombre": "Pedro",
            "apellido": "Rapela",
            "departamento": "Diseño de dispositivos"
        },
        {
            "nombre": "Luciana",
            "apellido": "Cristoforo",
            "departamento": "Diseño de dispositivos"
        },
        {
            "nombre": "Araceli",
            "apellido": "Galloro",
            "departamento": "Diseño de dispositivos"
        },
        {
            "nombre": "Joaquín",
            "apellido": "Saciaimbarrena",
            "departamento": "Marketing"
        },
        {
            "nombre": "Luca",
            "apellido": "Brioschi",
            "departamento": "Desarrollo web"
        },
        {
            "nombre": "Cristofher",
            "apellido": "Chirinos",
            "departamento":"Desarrollo web"
        },
        {
            "nombre": "Ramiro",
            "apellido": "Ríos",
            "departamento": "Desarrollo web"
        },
        {
            "nombre": "Rubí",
            "apellido": "Rendón",
            "departamento":"Desarrollo web"
        },
        {
            "nombre": "Mateo",
            "apellido": "Mangione",
            "departamento": "UX"
        },
        {
            "nombre": "Eros",
            "apellido": "Miranda",
            "departamento": "UX"
        },
        {
            "nombre": "Ayrton",
            "apellido": "Da Silva",
            "departamento": "Datos y estadísticas"
        },
        {
            "nombre": "Joaquín",
            "apellido": "Almaraz",
            "departamento":"Datos y estadísticas"
        }
    ]
}
let perfil= document.getElementById("participantes")
for (let i = 0; i < participantes.Integrantes.length; i++) {
    perfil.innerHTML+="<div class='integrante'><h3>"+
    participantes.Integrantes[i].apellido+"</h3><h4>"+participantes.Integrantes[i].nombre+"</h4>"+"<h4>"+participantes.Integrantes[i].departamento+"</h4>"+"<img src='./FotosMacuca/"+imagenes[i]+".png' alt="+i+">"+"</div>"
  }
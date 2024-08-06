const imagen = ["https://th.bing.com/th/id/OIP.SpeUaTrMUJQ8n9aFLqzYTgHaEo?w=274&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.gWfjlC0BN06ptiDBYsc-4AHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.vQ4f_Y6R5Qwg8pkvO_b-dgHaEe?w=268&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.EJpQNxz_tZxxESpBQTElKAHaEK?w=255&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.chsGVo-8XKM5PvvbiwQO6AHaEK?w=272&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.MODmSNYXYtDAQXk0Q9Qv-wHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.d2rZLncdkS7N5kvXz2fuiQHaEo?w=278&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th/id/OIP.jA30DcxcRiagefvxCFN9_gHaEx?w=237&h=180&c=7&r=0&o=5&pid=1.7","https://th.bing.com/th?id=OIP.v4fPrAq0BnrZN-FmiYpfRwHaGl&w=265&h=235&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"];
function ImagenBackground() {
    const randomImagen = Math.floor(Math.random() * imagen.length);
    const imagenURL = `url(${imagen[randomImagen]})`;
    document.body.style.backgroundImage = imagenURL;
    
    
}
setInterval(ImagenBackground(),10000);
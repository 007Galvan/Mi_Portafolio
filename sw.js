const nombreCache = "portafolio_CDGA";
const archivosCache = [
    "/",
    "/index.html",
    "/css/bootstrap.min.css",
    "/css/style.css",
    "/css/navbar.css",
    "/js/jquery.min.js",
    "/js/script.js",
    "/js/app.js",
    "/fonts/KdamThmorPro-Regular.ttf",
    "/assets/CurriculumVitae-tsu2.0.pdf",
    "/assets/facebook.png",
    "/assets/instagram.png",
    "/img/databases/mysql.png",
    "/img/databases/sql.png",
    "/img/databases/sqlite.png",
    "/img/frameworks/bootstrap.png",
    "/img/frameworks/react.png",
    "/img/frameworks/tailwind.png",
    "/img/frameworks/vue.png",
    "/img/languages/angular.png",
    "/img/languages/css.png",
    "/img/languages/html.png",
    "/img/languages/javascript.png",
    "/img/languages/mongo.png",
    "/img/projects/carfer.png",
    "/img/projects/jugosNaty.png",
    "/img/projects/kangrePonce.jpeg",
    "/img/projects/laEstacion.png",
    "/img/technologies/devops3.png",
    "/img/technologies/git.png",
    "/img/technologies/github.png",
    "/img/technologies/jira.png",
    "/img/technologies/npm.png",
    "/img/back2.png",
    "/img/back3.png",
    "/img/background.jpg",
    "/img/developer.jpg",
    "/img/developer2.jpg",
    "/img/favicon.ico",
    "/img/github2.png",
    "/img/linkedin.png",
    "/img/logoTacos.png",
    "/img/me.jpg",
    "/img/me2.png",
    "/manifest.json"
   
    
]


self.addEventListener('install', e => {
    console.log('El service worker se instaló', e);

    e.waitUntil(
        caches.open(nombreCache).then( cache => {
            console.log("cache guardada correctamente");
            cache.addAll(archivosCache);
        })
    );
});

self.addEventListener('activate', e =>{
    console.log('Service Worker activo',e)

    
    // Actualizar la PWA
    e.waitUntil(
        caches.keys()
            .then(keys => {
                console.log(keys); 

                return Promise.all(keys
                        .filter(key => key !== nombreCache)
                        .map(key => caches.delete(key)) // borrar los demas
                    )
            })
    )
});

self.addEventListener('fetch', e => {
    console.log('Fetch: ', e);
    e.respondWith( 
        caches.match(e.request)
        .then( respuestaCache => {return respuestaCache || fetch(e.request)})
        .catch( error => console.log(error))
        );//respondWith
});
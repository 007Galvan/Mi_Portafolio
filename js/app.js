if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js')
    .then( registrado => console.log('el service worker se registro', registrado))
    .catch( error => console.log('Error al registrar el service worker', error))
}else{
    console.log('el service worker no es compatible');
}
$(document).ready(function() {
    console.log('listo...');
    $( ".holaTyping h1").addClass( "holaTypingTrue" );
    setTimeout( ()=>{
      $(".holaTyping h1").removeClass("holaTypingTrue");
      $( ".holaTyping h4").addClass( "holaTypingTrue" );
      $( ".holaTyping h4").html( "Y soy desarrollador de Software" );
    }, 4000)
  });

  $('#moon-light').change(function() {
    // Check if the checkbox is checked
    if ($(this).prop('checked')) {
      $(':root').css('--background-color', '#28292c');
      $(':root').css('--color-text', '#d8dbe0');
      $('.formBody').css('background-color','#444443');
      $('.container').css('background-color','#b3b4af');
    } else {
      $(':root').css('--background-color', '#d8dbe0');
      $(':root').css('--color-text', '#28292c');
      $('.formBody').css('background-color','#edeee9');
      $('.container').css('background-color','#d8dbce');
    }
  });

  // progress bar
  let numberH = $('#numberH');
  let numberJ = $('#numberJ');
  let numberCS = $('#numberCS');
  let numberJava = $('#numberJava');
  let numberSql = $('#numberSql');
  let numberIngles = $('#numberIngles');
  let counter = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let counter5 = 0;
  let counter6 = 0;
  setInterval(() =>{
    if(counter == 70){
      clearInterval();
    }else{
      counter +=1;
      numberH.html(counter + "%")  ;
    }
  },25)
  setInterval(() =>{
    if(counter2 == 60){
      clearInterval();
    }else{
      counter2 +=1;
      numberCS.html(counter2 + "%")  ;
    }
  },30)
  setInterval(() =>{
    if(counter3 == 50){
      clearInterval();
    }else{
      counter3 +=1;
      numberJ.html(counter3 + "%")  ;
    }
  },30)
  setInterval(() =>{
    if(counter4 == 15){
      clearInterval();
    }else{
      counter4 +=1;
      numberJava.html(counter4 + "%")  ;
    }
  },140)
  setInterval(() =>{
    if(counter5 == 40){
      clearInterval();
    }else{
      counter5 +=1;
      numberSql.html(counter5 + "%")  ;
    }
  },45)
  setInterval(() =>{
    if(counter6 == 45){
      clearInterval();
    }else{
      counter6 +=1;
      numberIngles.html(counter6 + "%")  ;
    }
  },43)

 

  window.addEventListener('scroll', function() {
    var circle = document.getElementsByTagName("circle");
    var section = document.querySelector('#skills');
    var positionTop = section.getBoundingClientRect().top;
    //var positionBottom = section.getBoundingClientRect().bottom;

    // If the element is in the viewport, add the class to trigger the animation
    if (positionTop <= window.innerHeight ) {
      circle[0].classList.add('animationTrueH');
      circle[1].classList.add('animationTrueCS');
      circle[2].classList.add('animationTrueJ');
      circle[3].classList.add('animationTrueJava');
      circle[4].classList.add('animationTrueSql');
      circle[5].classList.add('animationTrueIngles');
    }
  });

  document.addEventListener('submit', sendMail);

  function sendMail(e){
    e.preventDefault();
    let name = $('#name').val();
    let mail = $('#email').val(); 
    let phone = $('#phone').val();
    let subject = $('#subject').val();
    let message = $('#message').val();
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// console.log(name, mail, phone, subject, message);
    if(name == ''){
      alert('Te falta agregar un nombre');
      return;
    }else if(mail == ''){
      alert('Te falta agregar un correo');
      return;
    }else if(phone == ''){
      alert('Te falta agregar un telefono');
      return;
    }else if(subject == ''){
      alert('Te falta agregar un asunto');
      return;
    }else if(message == ''){
      alert('Te falta agregar un mensaje');
      return;
    }else if(validEmail.test(mail)){

      mostrarSpinner();

      let _datos = {
        from: mail,
        to: "danielgalvanastorga@gmail.com", 
        subject: subject,
        text: message,
        name: name,
        phone: phone,
        pass: "oabnoavuvsqfwzze"
      }

      fetch('https://apisendmail-production.up.railway.app/api/sendmail', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(_datos)
        })
        .then(response => response.json()) 
        .then(res => {
          console.log(res);
          alert("se envió el correo, gracias!!!");
          $('.form')[0].reset();
          mostrarButton();
        })
        .catch(err => console.log(err));
    }else{
      alert('Correo no valido');
      return
    }
    }//function sendmail


  //Identificar si sube o baja el scroll
var scrollPos = 0;
const navbarCollapsible = document.body.querySelector('#divNav');
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos)
  navbarCollapsible.classList.add('fixedTop');
  else
  navbarCollapsible.classList.remove('fixedTop');
  scrollPos = (document.body.getBoundingClientRect()).top;
});

function mostrarSpinner(){
  const formSpinner = $('#submit')
  $('#submit button').remove();
  const spinner = $("<div></div>")
  spinner.addClass( "spinner" );
  spinner.html(`
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
  `)
  formSpinner.append(spinner);
}
function mostrarButton(){
  $('#submit .spinner').remove();
  const btnSubmit = $('<button type="submit" class="fourth">Enviar</button>')
  $('#submit').append(btnSubmit);
}
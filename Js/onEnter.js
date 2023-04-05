document.addEventListener("DOMContentLoaded", function(event) {
    Init();
  });

  function Init(){
    AddEvents();
  }

  function AddEvents(){

    //Asigna eventos para llevar con scroll animado a una section
    const buttonsNavBar = document.querySelectorAll(".scroll-page");
    for (const button of buttonsNavBar) {
      button.addEventListener("click", ClickScroll);
    }
    const name_Contact = document.getElementById('name_Contact');
    const email_Contact = document.getElementById('email_Contact');
    const content = document.getElementById('content');
    const btnSend = document.getElementById('btnSend'); 

    btnSend.addEventListener('click', validarCampos);
  }
  function validarCampos(e){
    e.preventDefault();
    let name_state = $(name_Contact).parent().find("#span-name");
    name_state.removeClass("input-state-normal");
    if (name_Contact.value == "") {
      name_state.removeClass("input-state-valid")
        .addClass("input-state-invalid");
    } else {
      name_state.removeClass("input-state-invalid")
        .addClass("input-state-valid");
    }

    let isValid = validaEmail();
    let name_stateContact = $(email_Contact).parent().find("#span-name_Contact");
    name_stateContact.removeClass("input-state-normal")
    if(!isValid || email_Contact.value == ""){
      name_stateContact.removeClass("input-state-valid")
        .addClass("input-state-invalid");
    }else {
      name_stateContact.removeClass("input-state-invalid")
        .addClass("input-state-valid");
    }
    
    SendEmail(name_Contact.value, email_Contact.value, content.value);
  }
  function validaEmail(){
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return validEmail.test(email_Contact.value);
  }

  function ClickScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  function SendEmail(oName_Contact, oEmail_Contact, oContent){
    return;
    emailjs.send("service_qmgjyur","template_spn7f0v",{
      from_name: oName_Contact,
      content: oContent,
      email_contact : oEmail_Contact
      });
  }
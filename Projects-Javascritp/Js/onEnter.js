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

    btnSend.addEventListener('click', validarEmail);
  }
  function validarEmail(e){
    e.preventDefault();
    if(name_Contact.value == ""){
        return;
    }
    if(email_Contact.value == ""){
      return;
    }
    if(content.value == ""){
      return;
    }
    SendEmail(name_Contact.value, email_Contact.value, content.value);
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
    emailjs.send("service_qmgjyur","template_spn7f0v",{
      from_name: oName_Contact,
      content: oContent,
      email_contact : oEmail_Contact
      });
  }
function toggleEmailMenu() {
    document.getElementById("emailMenu").classList.toggle("show");
}

function openEmail(service) {
    const email = "franciscometidieri25@gmail.com";
    const subject = encodeURIComponent("Proposta de Projeto - [Seu Nome/Empresa]");
    const body = encodeURIComponent("Olá Francisco,\n\nGostaria de solicitar um orçamento formal para um projeto de desenvolvimento.\n\nAtenciosamente,");
    
    let url = "";

    switch(service) {
        case 'gmail':
            url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
            break;
        case 'outlook':
            url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`;
            break;
        case 'yahoo':
            url = `https://compose.mail.yahoo.com/?to=${email}&subject=${subject}&body=${body}`;
            break;
        default:
            url = `mailto:${email}?subject=${subject}&body=${body}`;
            break;
    }

    window.open(url, '_blank');
    toggleEmailMenu(); // Fecha o menu após clicar
}

// Fecha o menu se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.contact-link') && !event.target.matches('.contact-link i')) {
        var dropdowns = document.getElementsByClassName("email-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
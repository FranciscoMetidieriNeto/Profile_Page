document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
    <header class="navbar">
        <div class="container">
            <a href="HomePage.html" class="logo-link">
                <img src="./assets/Logo_Metidieri.png" alt="Logotipo do Portfólio" class="logo-img">
            </a>
            <nav>
                <ul>
                    <li><a href="HomePage.html">Home</a></li>
                    <li><a href="Sobre.html">Sobre</a></li>
                    <li><a href="Servicos.html">Serviços</a></li>
                    <li><a href="Contato.html" class="btn-nav">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

    // Injeta a navbar no início do elemento <body>
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    // Lógica para definir a classe 'active' no link da página atual
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (currentPage === linkPage || (currentPage === "" && linkPage === "HomePage.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
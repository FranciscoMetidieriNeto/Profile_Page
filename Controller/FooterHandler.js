document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Francisco Metidieri Neto · Todos os direitos reservados.</p>
        </div>
    </footer>
    `;

    // Injeta o footer no final do elemento <body>
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
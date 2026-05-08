// Funkcija za povratak na vrh [5, 12]
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Glatko skrolanje
    });
}

// Praćenje skrolanja za prikaz gumba [5]
window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Logika za kolačiće koristeći localStorage (slično kao Auth state) [6, 14]
function prihvatiKolacice() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById("cookieBanner").style.display = "none";
}

// Provjera je li korisnik već prihvatio kolačiće pri učitavanju [14]
window.onload = function() {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById("cookieBanner").style.display = "none";
    }
}

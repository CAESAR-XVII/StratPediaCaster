<!-- JS timeline  -->
function showDetails(year) {
    const details = document.getElementById("timeline-details");

    let content = "";

    switch (year) {
        case 1954:
            content = "<h4>1954: La Nascita della Stratocaster</h4><p>Nel 1954, la Fender Stratocaster viene lanciata sul mercato. È subito apprezzata per la sua comodità e il suono distintivo. È dotata di pickup single coil e un design che la rende unica.</p><img src='images/1954.jpeg' alt='Foto della Fender Stratocaster, con tastiera in acero.' style='width:100%'>";
            break;
        case 1965:
            content = "<h4>1965: La CBS Acquista Fender</h4><p>Nel 1965, Fender viene acquistata dalla CBS. Questo periodo segna il passaggio della produzione di Stratocaster a nuovi standard di produzione e materiali. Cambiano alcune caratteristiche estetiche e tecniche, dal '62 è introdotto il palissandro per la tastiera.</p><img src='images/1965.jpeg' alt='Foto della Fender Stratocaster con tastiera in pallissandro, introdotta nel 1965.' style='width:100%'>";
            break;
        case 1979:
            content = "<h4>1979: Il Ritorno alla Qualità</h4><p>Nel 1979, Fender per i suoi primi 25 anni di attività lancia la sua prima limited edition, la \"25 Anniversary\", viene inoltre introdotto l'iconico palettone, per rendere più visibile il marchio del brand.</p><img src='images/1979.jpeg' alt='Foto della Fender Stratocaster 25th anniversary' style='width:100%'>";
            break;
        case 2000:
            content = "<h4>2000: Il Moderno Stile Fender</h4><p>Nel 2000, la Fender Stratocaster diventa sempre più popolare grazie all'innovazione nei materiali e nella costruzione. Si aggiungono nuove varianti di pickup e design, mantenendo comunque l'iconico aspetto originale.</p><img src='images/2000.jpeg' alt='Foto di una Fender Stratocaster del 2000, appartenente alla penultima serie della famiglia.' style='width:100%'>";
            break;
        case 2020:
            content = "<h4>2020: Fender American Ultra</h4><p>Nel 2020, viene lanciata la Fender Stratocaster American Ultra. Questa versione migliora ulteriormente il comfort e la qualità del suono, con alcune modifiche al design e all'hardware.</p><img src='images/2020.jpeg' alt='Foto della Fender Stratocaster American Ultra, qui in configurazione HSS' style='width:100%'>";
            break;
        default:
            content = "<p>Seleziona un anno per vedere i dettagli dei modelli.</p>";
    }

    details.innerHTML = content;
}
<!-- Slide foto  -->
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
<!-- JS Ricerca dublincore  -->
function searchDublinCore() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let items = document.getElementsByClassName('dublin-core-item');
    
    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = '';
        } else {
            items[i].style.display = 'none';
}
}

<!-- js player audio  -->
}function changeTrack(trackSrc) {
  var player = document.getElementById('player');
  player.src = trackSrc;  // Cambia la sorgente dell'audio
  player.play();          // Avvia la riproduzione della nuova traccia
}
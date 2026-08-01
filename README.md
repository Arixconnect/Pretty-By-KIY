# Pretty By KIY

Premium one-page voorbeeldwebsite voor Pretty By KIY, gericht op directe boekingen via Salonized.

## Lokaal bekijken

Open `index.html` rechtstreeks in de browser of start een lokale webserver, bijvoorbeeld met `python3 -m http.server 8000` in deze map.

## Nog aanleveren

- bevestiging dat met “verbana” het lettertype Verdana wordt bedoeld;
- naam, persoonlijke introductie, ervaring en werkwijze van KIY;
- vestigingsplaats, adres en contactgegevens;
- logo of definitief woordmerk;
- portret en uitgelichte hero-foto;
- minimaal 8 echte portfoliofoto’s;
- definitieve Read before booking/boekingsvoorwaarden;
- eventuele echte reviews met toestemming voor plaatsing.

## Foto’s vervangen

De huidige fotovakken zijn bewust neutrale placeholders. Gebruik geen werk van andere nagelstylisten als portfolio. Voeg echte beelden toe onder `assets/images/`, gebruik WebP/AVIF waar mogelijk en vervang daarna de `.photo-slot`- en `.gallery-item`-inhoud door echte `img`-elementen met beschrijvende alt-teksten, vaste afmetingen en lazy loading buiten de hero.

## Voor livegang

1. Verwijder `noindex, nofollow` uit `index.html`.
2. Voeg de definitieve plaatsnaam toe aan title, meta description, zichtbare content en lokale structured data.
3. Voeg canonical-URL, Open Graph-afbeelding, favicon, `robots.txt` en `sitemap.xml` toe.
4. Controleer alle prijzen en boekingsvoorwaarden met de klant.
5. Test de Salonized-link, mobiele navigatie, prijsaccordions en sticky boekingsknop.

Boekingslink: `https://prettybykiy.salonized.com/widget_bookings/new`

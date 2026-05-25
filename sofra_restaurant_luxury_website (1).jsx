<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SOFRA Restaurant</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #050505;
      color: white;
      overflow-x: hidden;
    }

    section {
      padding: 140px 7%;
    }

    .hero {
      height: 100vh;
      background:
        linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.85)),
        url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop') center/cover;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
    }

    .hero-content {
      max-width: 1000px;
      padding: 20px;
    }

    .mini-title {
      color: #666;
      text-transform: uppercase;
      letter-spacing: .45em;
      font-size: 12px;
      margin-bottom: 30px;
    }

    h1 {
      font-size: clamp(70px, 14vw, 180px);
      line-height: .95;
      font-weight: 900;
      letter-spacing: -6px;
    }

    .line {
      width: 90px;
      height: 1px;
      background: #333;
      margin: 40px auto;
    }

    .hero-text {
      max-width: 750px;
      margin: auto;
      color: #8f8f8f;
      font-size: 20px;
      line-height: 1.9;
      font-weight: 300;
    }

    .buttons {
      margin-top: 55px;
      display: flex;
      justify-content: center;
      gap: 18px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 18px 38px;
      border-radius: 999px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: .18em;
      font-size: 12px;
      transition: .35s ease;
      border: 1px solid #2a2a2a;
    }

    .btn-white {
      background: white;
      color: black;
    }

    .btn-white:hover {
      transform: translateY(-3px);
      background: #ddd;
    }

    .btn-dark {
      color: white;
    }

    .btn-dark:hover {
      border-color: white;
    }

    .about {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
    }

    .section-title {
      font-size: clamp(45px, 5vw, 75px);
      line-height: 1.1;
      margin: 25px 0 40px;
    }

    .section-text {
      color: #8b8b8b;
      line-height: 2;
      font-size: 18px;
      font-weight: 300;
      max-width: 600px;
    }

    .about-image {
      position: relative;
    }

    .about-image img {
      width: 100%;
      height: 750px;
      object-fit: cover;
      border-radius: 35px;
      filter: grayscale(100%);
      transition: .7s;
    }

    .about-image img:hover {
      filter: grayscale(0%);
    }

    .experience {
      position: absolute;
      bottom: -30px;
      left: -30px;
      background: #0d0d0d;
      border: 1px solid #1f1f1f;
      padding: 40px;
      border-radius: 30px;
      backdrop-filter: blur(20px);
    }

    .experience h3 {
      font-size: 60px;
      margin-bottom: 10px;
    }

    .experience p {
      color: #666;
      text-transform: uppercase;
      letter-spacing: .25em;
      font-size: 11px;
    }

    .menu {
      background: #080808;
      border-top: 1px solid #111;
      border-bottom: 1px solid #111;
    }

    .menu-grid {
      margin-top: 70px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }

    .card {
      position: relative;
      overflow: hidden;
      border-radius: 35px;
      background: #0d0d0d;
      border: 1px solid #111;
    }

    .card img {
      width: 100%;
      height: 550px;
      object-fit: cover;
      filter: grayscale(100%);
      transition: .8s;
    }

    .card:hover img {
      transform: scale(1.06);
      filter: grayscale(0%);
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, black, transparent 60%);
    }

    .card-content {
      position: absolute;
      bottom: 0;
      padding: 40px;
    }

    .card-content p {
      color: #666;
      text-transform: uppercase;
      letter-spacing: .3em;
      font-size: 11px;
      margin-bottom: 12px;
    }

    .card-content h3 {
      font-size: 38px;
    }

    .gallery-grid {
      margin-top: 70px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .gallery-grid img {
      width: 100%;
      height: 340px;
      object-fit: cover;
      border-radius: 30px;
      filter: grayscale(100%);
      transition: .7s;
    }

    .gallery-grid img:hover {
      transform: scale(1.04);
      filter: grayscale(0%);
    }

    .contact {
      background: #080808;
      border-top: 1px solid #111;
      text-align: center;
    }

    .contact-info {
      margin-top: 40px;
      color: #8a8a8a;
      line-height: 2.5;
      font-size: 18px;
      font-weight: 300;
    }

    footer {
      padding: 40px;
      text-align: center;
      color: #555;
      border-top: 1px solid #111;
      text-transform: uppercase;
      letter-spacing: .2em;
      font-size: 12px;
    }

    @media(max-width: 1100px) {
      .about,
      .menu-grid,
      .gallery-grid {
        grid-template-columns: 1fr;
      }

      .about-image img {
        height: 500px;
      }

      .card img {
        height: 450px;
      }
    }

    @media(max-width: 700px) {
      section {
        padding: 100px 6%;
      }

      .hero-text {
        font-size: 16px;
      }

      .experience {
        left: 15px;
        bottom: 15px;
      }

      .experience h3 {
        font-size: 45px;
      }
    }
  </style>
</head>
<body>

  <section class="hero">
    <div class="hero-content">
      <p class="mini-title">Restaurant • Lounge • Premium Dining</p>

      <h1>SOFRA</h1>

      <div class="line"></div>

      <p class="hero-text">
        Современный ресторан с атмосферой восточной роскоши,
        авторской кухней и минималистичным премиальным интерьером.
      </p>

      <div class="buttons">
        <a href="#contact" class="btn btn-white">Забронировать</a>
        <a href="#menu" class="btn btn-dark">Меню</a>
      </div>
    </div>
  </section>

  <section class="about">
    <div>
      <p class="mini-title">About</p>

      <h2 class="section-title">
        Искусство <br>
        современной кухни
      </h2>

      <p class="section-text">
        Sofra объединяет восточные традиции и современную гастрономию.
        Тёмный интерьер, мягкий свет и авторская подача создают атмосферу
        приватности и премиального отдыха.
      </p>
    </div>

    <div class="about-image">
      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop">

      <div class="experience">
        <h3>10+</h3>
        <p>Years Experience</p>
      </div>
    </div>
  </section>

  <section class="menu" id="menu">
    <p class="mini-title">Signature Dishes</p>

    <h2 class="section-title">Популярные блюда</h2>

    <div class="menu-grid">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1200&auto=format&fit=crop">

        <div class="overlay"></div>

        <div class="card-content">
          <p>Signature</p>
          <h3>Турецкий кебаб</h3>
        </div>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop">

        <div class="overlay"></div>

        <div class="card-content">
          <p>Signature</p>
          <h3>Узбекский плов</h3>
        </div>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop">

        <div class="overlay"></div>

        <div class="card-content">
          <p>Signature</p>
          <h3>Стейк премиум</h3>
        </div>
      </div>
    </div>
  </section>

  <section>
    <p class="mini-title">Interior</p>

    <h2 class="section-title">Атмосфера Sofra</h2>

    <div class="gallery-grid">
      <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop">
      <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop">
      <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop">
    </div>
  </section>

  <section class="contact" id="contact">
    <p class="mini-title">Contact</p>

    <h2 class="section-title">Забронировать стол</h2>

    <div class="contact-info">
      <p>📍 Uzbekistan</p>
      <p>📞 +998 90 000 00 00</p>
      <p>⏰ Ежедневно — 10:00 / 00:00</p>
    </div>

    <div class="buttons">
      <a href="#" class="btn btn-white">Telegram</a>
      <a href="#" class="btn btn-dark">Instagram</a>
    </div>
  </section>

  <footer>
    © 2026 SOFRA Restaurant
  </footer>

</body>
</html>

<script>
export default {
  name: 'BungaCard',
  methods: {
    goToPayment() {
      this.$router.push('/Payment')
    }
  }
}
</script>
<template>
  <ul class="badan">
    <li>
      <div class="bunga-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/QziV7r7.jpg" alt="mawar">
          <h3 class="judul-card">Buket Mawar</h3>
          <div class="center">
            <p>Mawar kami tersedia dalam berbagai warna, masing-masing dengan makna unik. Dari merah yang penuh gairah, putih yang melambangkan kesucian, hingga pink yang lembut dan anggun. Cocok untuk hadiah ulang tahun, pernikahan, atau perayaan cinta lainnya.</p>
          </div>
          <div class="foot">
            <router-link to="/Payment" class="cta">Pesan</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="bunga-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/g6zvOT8.jpg" alt="anggrek">
          <h3 class="judul-card">Buket Anggrek</h3>
          <div class="center">
            <p>Bunga anggrek menghadirkan sentuhan kemewahan dan ketahanan yang luar biasa. Simbol keindahan dan kemewahan, pilihan sempurna untuk dekorasi rumah atau hadiah spesial bagi orang tersayang.</p>
          </div>
          <div class="foot">
            <router-link to="/Payment" class="cta">Pesan</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="bunga-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/DPKI4BF.jpg" alt="lili">
          <h3 class="judul-card">Buket Lili</h3>
          <div class="center">
            <p>Dengan bentuknya yang khas dan aroma lembut, bunga lili adalah pilihan elegan untuk segala acara. Sering digunakan dalam rangkaian bunga untuk melambangkan kesucian, keberuntungan, dan ketenangan.</p>
          </div>
          <div class="foot">
            <router-link to="/Payment" class="cta">Pesan</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="bunga-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/gGUzZxe.jpg" alt="tulip">
          <h3 class="judul-card">Buket Tulip</h3>
          <div class="center">
            <p>Bunga tulip hadir dengan warna-warna cerah yang menyegarkan. Melambangkan kebahagiaan dan awal yang baru, tulip adalah pilihan sempurna untuk hadiah di musim semi atau sebagai ungkapan kasih sayang yang manis.</p>
          </div>
          <div class="foot">
            <router-link to="/Payment" class="cta">Pesan</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="bunga-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/hwcefny.jpg" alt="poeny">
          <h3 class="judul-card">Buket Peony</h3>
          <div class="center">
            <p>Bunga Peony melambangkan kebahagiaan, keberuntungan, dan romansa. Dengan kelopak besar yang mekar indah, Peony sering dipilih untuk dekorasi pernikahan atau hadiah eksklusif untuk orang terkasih.</p>
          </div>
          <div class="foot">
            <router-link to="/Payment" class="cta">Pesan</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="bunga-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/P67LhyP.jpg" alt="carnation">
          <h3 class="judul-card">Buket Carnation</h3>
          <div class="center">
            <p>Anyelir dikenal sebagai simbol kasih sayang, kekaguman, dan cinta ibu. Dengan kelopak berlapis yang indah, bunga ini sering digunakan dalam buket romantis, hadiah Hari Ibu, atau perayaan spesial lainnya.</p>
          </div>
          <div class="foot">
            <router-link to="/Payment" class="cta">Pesan</router-link>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>



<style>

.badan {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
}

.badan li {
  display: block;
  width: 100%;
  height: 100%;
}

.bunga-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  height: 100%;
}

.bunga-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.inner {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  width: 100%;
  height: 100%;
}

.foto {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.bunga-card:hover .foto {
  transform: scale(1.03);
}

.judul-card {
  font-size: 22px;
  font-weight: bold;
  margin: 16px 0 8px;
  color: rgb(10, 36, 75);
  font-family: 'Playfair Display', serif;
}

.center {
  flex-grow: 1;
  padding: 10px 15px;
  margin: 8px 0 16px;
  font-size: 14px;
  line-height: 1.6;
  color: rgb(10, 36, 75);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}

.center p {
  margin: 0;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.foot {
  margin-top: auto;
  padding: 12px;
  background-color: rgb(115, 90, 89);
  border-radius: 8px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.foot:hover {
  background-color: rgb(90, 70, 69);
}

.cta {
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: block;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

@media (max-width: 1100px) {
  .badan {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px;
  }
}

@media (max-width: 900px) {
  .badan {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 25px;
  }
}

@media (max-width: 600px) {
  .badan {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding: 20px;
  }

  .center {
    min-height: 100px;
  }

  .foto {
    height: 200px;
  }
}


</style>

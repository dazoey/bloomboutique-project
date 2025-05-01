<script >
export default {
  name: 'BodyElementor',
  methods: {
    scrollToBunga() {
      const bungaSection = document.getElementById('bunga-section');
      if (bungaSection) {
        bungaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<template>
  <div class="elementor">
    <div class="elementor-hero-section">
      <div class="container-gambar">
        <img class="gambar-background" src="https://imgur.com/DhsMbcs.png" alt="background-brand">
        <div class="overlay-container">
          <div class="overlay">
            <h1 class="elementor-title">Toko Bunga Online dengan Sentuhan Elegan</h1>
            <p class="deskripsi-elementor">
              BloomBoutique adalah toko bunga online yang menghadirkan rangkaian bunga segar dan indah untuk setiap momen spesial Anda...
            </p>
            <button class="cta-button" @click="scrollToBunga">Lihat Koleksi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.elementor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.elementor-hero-section {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.container-gambar {
  position: relative;
  width: 100%;
  height: 100%;
}

.gambar-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}


.overlay-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.overlay {
  text-align: center;
  color: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 80%;
}

.elementor-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.deskripsi-elementor {
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.cta-button {
  background-color: rgb(115,90,89);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: rgb(151, 125, 125);
}

@media (max-width: 768px) {
  .elementor-hero-section {
    height: 450px;
  }

  .overlay {
    padding: 20px;
  }

  .elementor-title {
    font-size: 1.8rem;
  }

  .deskripsi-elementor {
    font-size: 1rem;
  }
}
</style>

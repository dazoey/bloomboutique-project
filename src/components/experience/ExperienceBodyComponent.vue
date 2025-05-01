<script >
export default {
  name: 'ExperienceBodyComponent',
  methods: {
    scrollToFooter() {
      const bungaSection = document.getElementById('footer-section');
      if (bungaSection) {
        bungaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}



</script>

<template>
  <div class="experience-section">
    <div class="experience-container">
      <div class="image-container">
        <img src="https://imgur.com/LyPfaXx.jpg" alt="Bunga Segar" class="experience-image">
      </div>
      <div class="experience-content">
        <h2 class="experience-title">Kenapa harus memilih kami</h2>
        <p class="experience-description">Kami menyediakan berbagai macam bunga segar dengan kualitas terbaik.</p>
        <ul class="experience-features">
          <li>Bunga segar setiap hari</li>
          <li>Pengiriman cepat dan aman</li>
          <li>Pilihan desain rangkaian eksklusif</li>
          <li>Pelayanan ramah dan profesional</li>
        </ul>
        <button class="experience-button" @click="scrollToFooter">Lihat Selengkapnya</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.experience-section {
  padding: 80px 20px;
  background-color: #fff;
}

.experience-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  gap: 40px;
}

.image-container {
  flex: 1;
  max-width: 50%;
}

.experience-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.experience-content {
  flex: 1;
  text-align: left;
  padding: 0 20px;
}

.experience-title {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  position: relative;
}

.experience-title::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #735a59;
  left: 0;
  bottom: -10px;
}

.experience-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 25px;
  line-height: 1.6;
}

.experience-features {
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
}

.experience-features li {
  margin-bottom: 12px;
  padding-left: 30px;
  position: relative;
}

.experience-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #735a59;
  font-weight: bold;
}

.experience-button {
  background-color: #735a59;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.experience-button:hover {
  background-color: #5d4847;
}


@media (max-width: 768px) {
  .experience-container {
    flex-direction: column;
  }

  .image-container {
    max-width: 100%;
    margin-bottom: 30px;
  }

  .experience-content {
    padding: 0;
  }

  .experience-title {
    font-size: 1.8rem;
  }
}
</style>

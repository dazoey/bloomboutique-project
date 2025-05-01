<script >
export default {
  name: 'FooterCard'
};
</script>
 <template>

<div class="content-section">
      <div class="container-content-section">
        <h2>Keunggulan Bloom Boutique</h2>
        <div class="content-grid">
          <div class="content-item">
            <h3>Bunga Segar Pilihan</h3>
            <p>Kami menyediakan bunga berkualitas tinggi yang dipetik langsung dari kebun.</p>
          </div>
          <div class="content-item">
            <h3>Pengiriman Cepat</h3>
            <p>Layanan pengiriman tepat waktu ke seluruh wilayah Jakarta.</p>
          </div>
          <div class="content-item">
            <h3>Desain Eksklusif</h3>
            <p>Setiap rangkaian bunga dibuat dengan sentuhan seni dan keindahan.</p>
          </div>
        </div>
      </div>
</div>


 </template>

<style scoped>

.content-section {
  padding: 60px 20px;
  background-color: #f9f9f9;
}

.container-content-section {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.content-grid {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.content-item {
  flex: 1;
  padding: 20px;
  margin: 0 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content-item h3 {
  color: rgb(115,90,89);
  margin-bottom: 15px;
  font-family: 'Times New Roman', Times, serif;
}

.content-item p {
  color: black;
  font-family: 'Times New Roman', Times, serif;
}

@media (max-width: 768px) {
  .content-grid {
    flex-direction: column;
  }

  .content-item {
    margin: 15px 0;
  }
}

</style>


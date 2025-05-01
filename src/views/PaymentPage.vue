<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import HeaderComponent from '@/components/header/HeaderComponent.vue';
export default {
  data() {
    return {
      predefinedAmounts: [200000],
      selectedAmount: null,
      customAmount: null,
      donorName: '',
      donorEmail: '',
      paymentMethod: '',
      isRecurring: false
    }
  },
  name: 'PaymentPage.vue',
  components: {
    HeaderComponent
  },
  methods: {
    selectAmount(amount) {
      this.selectedAmount = amount
      this.customAmount = null
    },
    selectCustomAmount() {
      if (this.customAmount) {
        this.selectedAmount = this.customAmount
      }
    },
    submitDonation() {
      if (this.isFormValid) {
        console.log('Donation submitted:', {
          amount: this.selectedAmount,
          name: this.donorName,
          email: this.donorEmail,
          paymentMethod: this.paymentMethod,
          recurring: this.isRecurring
        })
        alert('Terima kasih atas donasi Anda!')
      }
    }
  }
}
</script>
<template>
   <HeaderComponent/>
  <div class="donation-container">
    <h1 class="page-title">Donasi Sekarang</h1>

    <div class="donation-amounts">
      <h2 class="section-title">Pilih Jumlah Donasi</h2>
      <div class="amount-buttons">
        <button
          v-for="amount in predefinedAmounts"
          :key="amount"
          @click="selectAmount(amount)"
          :class="{ 'selected': selectedAmount === amount }"
        >
          Rp {{ amount.toLocaleString() }}
        </button>
        <input
          type="number" v-model="customAmount" @input="selectCustomAmount" placeholder="Lainnya" class="custom-amount-input" />
      </div>
    </div>

    <form @submit.prevent="submitDonation" class="donation-form">
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input
          type="text" v-model="donorName" required
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          type="email" v-model="donorEmail" required />
      </div>

      <div class="form-group">
        <label>Metode Pembayaran</label>
        <select v-model="paymentMethod" >
          <option value="">Pilih Metode Pembayaran</option>
          <option value="gopay">GoPay</option>
          <option value="dana">DANA</option>
          <option value="ovo">OVO</option>
        </select>
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="submit-button"
      >
        Lanjutkan Donasi
      </button>
    </form>
  </div>
</template>
<style scoped>
.donation-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 120px;
}

.page-title {
  text-align: center;
  color: #2c8c43;
  margin-bottom: 20px;
  font-size: 24px;
}

.section-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.donation-amounts {
  margin-bottom: 20px;
}

.amount-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.amount-buttons button {
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.amount-buttons button.selected,
.amount-buttons button:hover {
  background-color: #2c8c43;
  color: white;
}

.custom-amount-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.donation-form .form-group {
  margin-bottom: 15px;
}

.donation-form label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.donation-form input:not([type="checkbox"]),
.donation-form select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.checkbox-group input {
  margin-right: 10px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #2c8c43;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #25a03b;
}

.submit-button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>

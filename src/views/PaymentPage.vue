<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue';

export default {
  name: 'PaymentPage.vue',
  components: {
    HeaderComponent
  },
  data() {
    return {
      predefinedAmounts: [250000, 200000, 150000, 100000],
      selectedAmount: null,
      customAmount: null,
      donorName: '',
      donorEmail: '',
      paymentMethod: '',
      isRecurring: false
    };
  },
  computed: {
    isFormValid() {
      return (
        this.donorName.trim() !== '' &&
        this.donorEmail.trim() !== '' &&
        this.paymentMethod.trim() !== '' &&
        this.selectedAmount !== null
      );
    }
  },
  methods: {
    selectAmount(amount) {
      this.selectedAmount = amount;
      this.customAmount = null;
    },
    selectCustomAmount() {
      if (this.customAmount) {
        this.selectedAmount = this.customAmount;
      }
    },
    submitPayment() {
      if (this.isFormValid) {
        console.log('Pembayaran submitted:', {
          amount: this.selectedAmount,
          name: this.donorName,
          email: this.donorEmail,
          paymentMethod: this.paymentMethod,
          recurring: this.isRecurring
        });
        alert('Terimakasih Order anda Sedang Kami Proses');
      }
    }
  }
};
</script>

<template>
  <HeaderComponent/>
  <div class="pembayaran-container">
    <h1 class="page-title"></h1>

    <div class="pembayaran-amounts">
      <h2 class="section-title">Pilih Harga Buket</h2>
      <div class="amount-buttons">
        <button
          v-for="amount in predefinedAmounts"
          :key="amount"
          @click="selectAmount(amount)"
          :class="{ 'selected': selectedAmount === amount }">
          Rp {{ amount.toLocaleString() }}
        </button>
      </div>
    </div>

    <form @submit.prevent="submitPayment" class="pembayaran-form">
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input type="text" v-model="donorName" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="donorEmail" required />
      </div>

      <div class="form-group">
        <label>Metode Pembayaran</label>
        <select v-model="paymentMethod">
          <option value="">Pilih Metode Pembayaran</option>
          <option value="gopay">GoPay</option>
          <option value="dana">DANA</option>
          <option value="ovo">OVO</option>
        </select>
      </div>

      <button
        type="submit"
        :disabled="!isFormValid"
        class="submit-button">Lanjutkan Pembayaran</button>
    </form>
  </div>
</template>

<style scoped>
.pembayaran-container {
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
  color: rgb(115, 90, 89);
  margin-bottom: 20px;
  font-size: 24px;
}

.section-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.pembayaran-amounts {
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
  background-color: rgb(115, 90, 89);
  color: white;
}

.custom-amount-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.pembayaran-form .form-group {
  margin-bottom: 15px;
}

.pembayaran-form label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.pembayaran-form input:not([type="checkbox"]),
.pembayaran-form select {
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
  background-color: rgb(115, 90, 89);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: rgb(115, 90, 89);
}

.submit-button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>

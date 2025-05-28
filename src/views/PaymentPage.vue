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
      donorPhone: '',
      paymentMethod: '', 
      isRecurring: false
    };
  },
  computed: {
    isFormValid() {
      const baseValid = (
        this.donorName.trim() !== '' &&
        this.donorEmail.trim() !== '' &&
        this.paymentMethod.trim() !== '' &&
        this.selectedAmount !== null
      );

      if (this.paymentMethod && this.paymentMethod !== '') {
        return baseValid && this.donorPhone.trim() !== '';
      }

      return baseValid;
    },

    shouldShowPhoneField() {
      return this.paymentMethod && this.paymentMethod !== '';
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

    onPaymentMethodChange() {
      this.donorPhone = '';
    },
    submitPayment() {
      if (this.isFormValid) {
        console.log('Pembayaran submitted:', {
          amount: this.selectedAmount,
          name: this.donorName,
          email: this.donorEmail,
          phone: this.donorPhone,
          paymentMethod: this.paymentMethod,
          recurring: this.isRecurring
        });
        alert('Terimakasih Order anda Sedang Kami Proses');
      }
    },
    paymentChoice() {
      if (this.paymentMethod === 'gopay') {
        this.$router.push({ name: 'GopayPayment' });
      } else if (this.paymentMethod === 'dana') {
        this.$router.push({ name: 'DanaPayment' });
      } else if (this.paymentMethod === 'ovo') {
        this.$router.push({ name: 'OvoPayment' });
      } else {
        alert('Silahkan Pilih Metode Pembayaran');
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
        <select v-model="paymentMethod" @change="onPaymentMethodChange">
          <option value="">Pilih Metode Pembayaran</option>
          <option value="gopay">GoPay</option>
          <option value="dana">DANA</option>
          <option value="ovo">OVO</option>
        </select>
      </div>

      <div class="form-group phone-field" v-if="shouldShowPhoneField">
        <label>Nomor Telepon {{ paymentMethod.toUpperCase() }}</label>
        <input
          type="tel"
          v-model="donorPhone"
          :placeholder="`Masukkan nomor ${paymentMethod.toUpperCase()} Anda`"
          required
        />
        <small class="field-hint">
          Pastikan nomor {{ paymentMethod.toUpperCase() }} Anda aktif untuk menerima notifikasi pembayaran
        </small>
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
  font-weight: 500;
}

.pembayaran-form input:not([type="checkbox"]),
.pembayaran-form select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

/* Styling khusus untuk phone field */
.phone-field {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  animation: slideDown 0.3s ease-out;
}

.phone-field label {
  color: rgb(115, 90, 89);
  font-weight: 600;
}

.phone-field input {
  border: 2px solid #ddd;
  transition: border-color 0.3s ease;
}

.phone-field input:focus {
  border-color: rgb(115, 90, 89);
  outline: none;
}

.field-hint {
  display: block;
  margin-top: 5px;
  color: #6c757d;
  font-size: 12px;
  font-style: italic;
}

/* Animasi untuk phone field */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  font-size: 16px;
  font-weight: 500;
}

.submit-button:hover:not(:disabled) {
  background-color: rgb(95, 70, 69);
}

.submit-button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>

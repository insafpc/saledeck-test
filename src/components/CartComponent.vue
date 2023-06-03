<script setup lang="ts">
import { useDiscountsStore } from '@/stores/discounts'
import { useCurrency } from '@/composable/useCurrency'
import { computed } from 'vue';
import { discountDurationType, discountValueType } from '@/types/common';

const discountsState = useDiscountsStore()
const { eurCurrencyFormat } = useCurrency()
const productAmount = 10000
const monthlyAmount = 10

const oneTimeTotalDiscountAmount = computed(() => {
  const discounts = discountsState.onetimeActiveDiscounts
  const fixedAmt = discounts.filter((discount) => discount.discountValueType === discountValueType.Fixed).reduce((amount, discount) => amount + discount.price, 0);
  const percentageAmt = discounts.filter((discount) => discount.discountValueType === discountValueType.Percentage).reduce((amount, discount) => amount + (productAmount * discount.discount / 100), 0);

  return fixedAmt + percentageAmt;
})

const monthlyTotalDiscountAmount = computed(() => {
  const discounts = discountsState.monthlyActiveDiscounts
  const fixedAmt = discounts.filter((discount) => discount.discountValueType === discountValueType.Fixed).reduce((amount, discount) => amount + discount.price, 0);
  const percentageAmt = discounts.filter((discount) => discount.discountValueType === discountValueType.Percentage).reduce((amount, discount) => amount + (productAmount * discount.discount / 100), 0);

  return fixedAmt + percentageAmt;
})

</script>
<template>
  <aside>
    <div class="cart-item">
      <img src="../assets/img/warmtewinner-roze 1.png">
      <h3>Overview</h3>
      <div class="cart-item--details">
        <p>Webasto Pure II laadpaal type 2</p>
        <p>{{ eurCurrencyFormat(productAmount) }}</p>
      </div>
      <div class="cart-item--details">
        <p><i>Maandelijkse prijs</i></p>
        <p>{{ eurCurrencyFormat(monthlyAmount) }}</p>
      </div>
      <a class="btn-transparant">Edit</a>
    </div>
    <div class="cost-monthly">
      <div v-for="discount in discountsState.monthlyActiveDiscounts" :key="discount.id">
        <p><i>{{ discount.description }}</i></p>
        <p v-if="discount.discountValueType === discountValueType.Fixed">- {{ eurCurrencyFormat(discount.price) }}</p>
        <p v-else>- {{ eurCurrencyFormat(productAmount * discount.discount / 100) }}</p>
      </div>
      <div>
        <b>Eventually per month excl. btw</b>
        <b>{{ eurCurrencyFormat(productAmount - monthlyTotalDiscountAmount) }}</b>
      </div>
    </div>
    <div class="cost-onetime">
      <template v-if="discountsState.onetimeActiveDiscounts.length">
        <div>
          <p>Subtotal onetime costs excl. btw</p>
          <p>{{ eurCurrencyFormat(productAmount) }}</p>
        </div>
        <div v-for="discount in discountsState.onetimeActiveDiscounts" :key="discount.id">
          <p><i>{{ discount.description }}</i></p>
          <p v-if="discount.discountValueType === discountValueType.Fixed">- {{ eurCurrencyFormat(discount.price) }}</p>
          <p v-else>- {{ eurCurrencyFormat(productAmount * discount.discount / 100) }}</p>
        </div>
      </template>
      <div>
        <b>Onetime costs excl. btw</b>
        <b>{{ eurCurrencyFormat(productAmount - oneTimeTotalDiscountAmount) }}</b>
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside {
  width: 350px;
  background: #FFFFFF;
  box-shadow: 1px 1px 3px rgba(51, 51, 51, 0.1);
  align-self: self-start;

}

.cart-item {
  padding: 20px;
}

.cart-item img {
  margin: auto;
  display: block;
}

.cart-item h3 {
  color: #8A8A8A;
}

.cart-item--details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #333333;
}

aside p,
aside b {
  margin: 6px 0;
  padding: 0;
}

.cost-monthly {
  margin-bottom: 30px;
}

.cost-monthly,
.cost-onetime {
  background-color: #EDF6FB;
  padding: 25px 20px;
  font-size: 14px;
  color: #333333;
}

.cost-monthly>div,
.cost-onetime>div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
<script setup lang="ts">
import Toggle from '@vueform/toggle'
import penIcon from './icons/PenIco.vue';
import AddNewComponent from './AddNewComponent.vue';
import { discountDurationType, discountValueType } from '@/types/common';
import { useDiscountsStore } from '@/stores/discounts'
import { ref } from 'vue';

const discountsState = useDiscountsStore()
const pagination = ref(8)
const showAddNew = ref(false)

function setPage(isForward: boolean) {
    if (isForward) {
        if ((pagination.value) < (discountsState.discounts.length)) return pagination.value = pagination.value + 8
    } else {
        if (pagination.value > 8) return pagination.value = pagination.value - 8
    }
}

</script>
<template>
    <aside>
        <div class="step active">Discounts</div>
        <div class="step-content">
            <div class="action">
                <button class="btn btn-transparant" @click="showAddNew = true">+ Add manual discount</button>
            </div>
            <div class="discount-item" v-for="discount in discountsState.discounts.slice(pagination - 8, pagination)"
                :key="discount.id">
                <p>{{ discount.description }}</p>
                <div class="discount-item-details">
                    <penIcon />
                    <p> -
                        {{ discount.discountValueType === discountValueType.Percentage ? discount.discount + '%' : '€ ' +
                            discount.price }}
                        <span v-if="discount.durationType === discountDurationType.Monthly">
                            monthly first {{ discount.duration }} months
                        </span>
                        <span v-else>one time</span>
                    </p>
                </div>
                <Toggle v-model="discount.isEnabled" />
            </div>
            <div class="footer-action">
                <button class="btn btn-transparant" @click="setPage(false)">Previous</button>
                <button class="btn btn-primary" @click="setPage(true)">Next</button>
            </div>
        </div>
        <div class="step">Klantgegevens</div>
        <div class="step">Productgegevens</div>
        <div class="step">Checkout</div>
    </aside>

    <AddNewComponent @cancel="showAddNew = false" v-if="showAddNew" />
</template>
  
<style scoped>
aside {
    flex: 1;
    background-color: aqua;
}

.step {
    width: 100%;
    height: 47px;
    background-color: #CACACA;
    padding: 0px 16px 0px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #767676;
}

.step.active {
    background-color: #26B7CD;
    color: #fff;
}

.step-content {
    background-color: #fff;
}

.discount-item-details {
    display: flex;
    align-items: center;
}

.action {
    height: 82px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 28px;
    box-sizing: border-box;
}

.discount-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px;
    box-sizing: border-box;
    border-top: 1px solid #F3F3F5;

}

.footer-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px;
    box-sizing: border-box;
    border-top: 1px solid #F3F3F5;
}
</style>
<style src="@vueform/toggle/themes/default.css"></style>
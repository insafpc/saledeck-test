<script setup lang="ts">
import { ref } from 'vue';
import CheckIcon from './icons/CheckIcon.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const isOnetime = ref(false)
const emit = defineEmits(['confirm', 'cancel'])

const schema = yup.object({
    discount: yup.number().required(),
    duration: yup.number().required().min(0),
});

function onSubmit(values: any) {
    console.log(values);

}
</script>

<template>
    <div class="modal-container">
        <Form class="modal-body" @submit="onSubmit" :validation-schema="schema">
            <span class="modal-close" @click="emit('cancel')">🗙</span>
            <h2>Add discount</h2>
            <p>For which price do you calculate the discount?</p>
            <div class="duration-type-selector">
                <button class="btn btn-switch" :class="{ 'btn-primary': isOnetime }" @click="isOnetime = true">One time
                    price
                    <span class="checked">
                        <CheckIcon v-if="isOnetime"></CheckIcon>
                    </span></button>
                <button class="btn btn-switch" :class="{ 'btn-primary': !isOnetime }" @click="isOnetime = false">Monthly
                    price
                    <span class="checked">
                        <CheckIcon v-if="!isOnetime"></CheckIcon>
                    </span></button>
            </div>
            <div class="inputs">
                <label>
                    Discount
                    <Field name="discount" class="input-text" type="text" />
                    <ErrorMessage class="error" name="discount" />
                </label>
                <label>
                    Duration
                    <Field name="duration" class="input-text" type="text" />
                    <ErrorMessage class="error" name="duration" />
                </label>
                <label>
                    New price
                    <input class="input-text" type="text" />
                </label>
                <label>
                    Discription
                    <input class="input-text" type="text" />
                </label>
            </div>
            <div class="modal-action">
                <button class="btn btn-transparant" @click="emit('cancel')">Cancel</button>
                <button class="btn btn-primary" type="submit">Save</button>
            </div>
        </Form>
    </div>
</template>
  

  
<style scoped>
.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #cececeb5;
}

.modal-body {
    background-color: #fff;
    padding: 20px 40px;
    min-width: 750px;
    display: flex;
    flex-direction: column;
}

.modal-action {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: space-between;
    margin-top: 30px;
}

.modal-close {
    cursor: pointer;
    position: relative;
    align-self: end;
    right: -33px;
    top: -17px;
}

.checked {
    background-color: #fff;
    border-radius: 50%;
    padding: 2px;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    display: inline-block;
}

.duration-type-selector {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}
</style>
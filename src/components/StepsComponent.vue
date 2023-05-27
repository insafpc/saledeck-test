<template>
    <aside>
        <div class="step active">Discounts</div>
        <div class="step-content">
            <div class="action">
                <button class="btn btn-transparant">+ Add manual discount</button>
            </div>
        </div>
        <div class="step">Klantgegevens</div>
        <div class="step">Productgegevens</div>
        <div class="step">Checkout</div>
    </aside>
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

.action {
    height: 82px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 28px;
    box-sizing: border-box;
}
</style>
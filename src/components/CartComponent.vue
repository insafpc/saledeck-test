<template>
  <aside>
    <div class="cart-item">
      <img src="../assets/img/warmtewinner-roze 1.png">
      <h3>Overview</h3>
      <div class="cart-item--details">
        <p>Webasto Pure II laadpaal type 2</p>
        <p>€ 1.0000,00</p>
      </div>
      <div class="cart-item--details">
        <p><i>Maandelijkse prijs</i></p>
        <p>€ 10,00</p>
      </div>
      <a class="btn-transparant">Edit</a>
    </div>
  </aside>
</template>

<style scoped>
aside {
  width: 350px;
  background: #FFFFFF;
  box-shadow: 1px 1px 3px rgba(51, 51, 51, 0.1);
  align-self: self-start;
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

.cart-item--details p {
  margin: 6px 0;
  padding: 0;
}
</style>
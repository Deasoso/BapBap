<template>
  <div id="app">
    <div>当前价格：{{price}}</div>
    <button class="button" @click="buy">买入</button>
    <button class="button" @click="sell">卖出</button>
    <button class="button" @click="draw">抽卡</button>
  </div>
</template>

<script>
import * as web3 from '@/contract/web3.js'

export default {
  name: 'App',
  data: function () {
    return {
      price: 0
    }
  },
  methods: {
    buy: function () {
      web3.buy(10)
    },
    sell: function () {
      web3.sell(10)
    },
    draw: function () {
      web3.draw();
    }
  },
  created: async function () {
    this.price = await web3.getprice()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

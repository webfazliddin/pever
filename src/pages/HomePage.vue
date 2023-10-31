<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import { ref } from 'vue'

const isSHowLogin = ref(false)

const showLoginPage = () => {
  isSHowLogin.value = !isSHowLogin.value
}
</script>
<template>
  <main class="page-content">
    <div class="container">
      <div class="wrapper">
        <div>
          <div class="wrapper__title">Printers are waiting for your command</div>
          <div>
            <div class="button" @click="showLoginPage">Command now</div>
          </div>
          <div v-if="isSHowLogin"><AuthLayout /></div>
        </div>
        <div class="wrapper__img">
          <img src="../assets/home-page/machine.png" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-direction: column-reverse;
  gap: 54px;

  @include breakpoint('lg') {
    flex-direction: row;
    text-align: inherit;
  }

  &__title {
    color: #000;
    font-family: Raleway;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 50px;

    @include breakpoint('md') {
      font-size: 100px;
    }
   
  }

  &__img {
    img {
      width: 350px;
      height: 250px;

      @include breakpoint('md') {
        width: 600px;
        height: 600px;
      }

      @include breakpoint('lg') {
        width: 400px;
        height: 400px;
      }
      @include breakpoint('xl') {
        width: 600px;
        height: 550px;
      }
    }
  }
}

.button {
  border-radius: 30px;
  border: 3px solid #000;
  width: auto;
  padding: 16px;
  font-family: $base-font;
  font-weight: 400;
  text-align: center;
  background: #000;
  color: #fff;
  cursor: pointer;

  &:hover {
    border: 3px solid #000;
    background: #fff;
    color: #000;
  }

  @include breakpoint('lg') {
    width: 40%;
  }
}
.el-dialog {
  border-radius: 16px !important;
  width: 90%;
  padding: 0 !important;

  @include breakpoint('md') {
    width: 770px;
    padding: 0 100px !important;
  }
}
</style>

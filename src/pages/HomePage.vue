<script setup lang="ts">
import { ref } from 'vue'

const showAddModal = ref(false)

const addModalClick = () => {
  toggleAddModal()
}

const toggleAddModal = () => {
  showAddModal.value = !showAddModal.value
}
</script>
<template>
  <main class="page-content">
    <div class="container">
      <div class="wrapper">
        <div>
          <div class="wrapper__title">Printers are waiting for your command</div>
          <div class="button">
            <div class="buttonText" @click="addModalClick">Command now</div>
          </div>
        </div>
        <div class="wrapper__img">
          <img src="../assets/home-page/machine.png" />
        </div>
        <Login :visible="showAddModal" @on-close="toggleAddModal" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 54px;

  &__title {
    color: #000;
    font-family: Raleway;
    font-weight: 400;
    font-size: 100px;
    margin-bottom: 50px;
  }

  &__img {
    img {
      width: 600px;
      height: 500px;
    }
  }
}

.button {
  border-radius: 30px;
  border: 3px solid #000;
  padding: 16px;
  width: 300px;
  font-family: Raleway;
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
}
</style>

<template>
  <div class="login-title">Login</div>
  <div>
    <div class="login-buttons">
      <button
        class="login-button"
        @click="activeTab = 'tab1'"
        :class="{ active: activeTab === 'tab1' }"
      >
        Phone number
      </button>
      <button
        class="login-button"
        @click="activeTab = 'tab2'"
        :class="{ active: activeTab === 'tab2' }"
      >
        Email
      </button>
    </div>

    <div v-show="activeTab === 'tab1'">
      <div>
        <div>
          <BaseButton :placeholder="'Enter your number'" />
        </div>

        <div>
          <BaseButton :placeholder="'Enter code'" />
        </div>
      </div>
    </div>

    <div v-show="activeTab === 'tab2'">
      <p>This is the content of Tab 2.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('tab1')
</script>

<style lang="scss">
.login-title {
  display: flex;
  justify-content: center;
  margin-top: -20px;
  color: #373535;
  font-family: $base-font;
  font-size: 40px;
  font-weight: 500;
  line-height: normal;
}
.login-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border: 2px solid #000;
  padding: 8px;
  border-radius: 25px;
}
.login-button {
  color: #000;
  font-family: $base-font;
  font-size: 30px;
  font-weight: 500;
  background: transparent;
  border-radius: 20px;
  padding: 20px;
  border: none;
  cursor: pointer;
}
.login-button.active {
  background: #000;
  color: #fff;
}
</style>

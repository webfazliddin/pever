<script setup lang="ts">
import classnames from 'classnames'
import { withDefaults } from 'vue'

export interface IBaseButton {
  type?: 'button' | 'submit'
  disabled?: boolean
  variant?: 'black' | 'primary-outline' | 'danger' | 'danger-outline' | 'none'
  loading?: boolean
}

const emit = defineEmits<{
  (e: 'on-click'): void
}>()

withDefaults(defineProps<IBaseButton>(), {
  type: 'button',
  disabled: false,
  variant: 'black',
  loading: false
})

const handleButtonClick = () => {
  emit('on-click')
}
</script>

<template>
  <button
    :type="type"
    :class="classnames($style.btn, $style[variant])"
    :disabled="disabled"
    @click="handleButtonClick"
  >
    <BaseSpinner v-if="loading" variant="white" />
    <slot v-else />
  </button>
</template>

<style module lang="scss">
.btn {
  cursor: pointer;
  font-size: 18px;
  line-height: 20px;
  font-family: $base-font;
  font-weight: 400;
  padding: 16px;
  border-radius: 25px;
  color: $color-white;
  background-color: $color-primary;
  border: none;
  transition: 0.4s;

  &:hover {
    opacity: 0.7;
  }
}

.black {
  background-color: black;
  border: none;
  color: $color-white;
}

.primary-outline {
  background-color: $color-white;
  border: 1px solid $color-primary;
  box-shadow: none;
  color: $color-primary;
}

.danger {
  background-color: $color-error;
  border: none;
  color: $color-white;
}

.danger-outline {
  background-color: $color-white;
  border: 1px solid $color-error;
  box-shadow: none;
  color: $color-error;
}

.none {
  cursor: pointer;
  border: none;
  background: none;
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-left: 32px;
  color: $color-grey;
}

:disabled {
  cursor: not-allowed;
  background-color: $color-white;
  border: 1px solid $color-grey;
  box-shadow: none;
  color: $color-grey;
}
</style>

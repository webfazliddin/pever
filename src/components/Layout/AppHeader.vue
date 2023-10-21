<script setup lang="ts">
import classnames from 'classnames'
import { ref } from 'vue'

export interface IAppHeader {
  elevated?: boolean
}

withDefaults(defineProps<IAppHeader>(), {
  elevated: false
})
</script>

<template>
  <header
    :class="
      classnames($style.header, {
        [$style.isElevated]: elevated
      })
    "
  >
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.logo">
          <RouterLink style="text-decoration: none; color: #000" to="/"> Pever </RouterLink>
        </div>

        <div :class="$style.link">
          <div>
            <RouterLink to="/" style="text-decoration: none; color: #000">How we work</RouterLink>
          </div>
          <div>
            <RouterLink to="/" style="text-decoration: none; color: #000">Services</RouterLink>
          </div>
          <div>
            <RouterLink to="/" style="text-decoration: none; color: #000">Blog</RouterLink>
          </div>
          <div>
            <RouterLink to="/" style="text-decoration: none; color: #000">Careers</RouterLink>
          </div>
        </div>

        <div :class="$style.button">
          <div>Be a partner</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style module lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  min-height: 80px;
  background-color: $color-white;
  border-bottom: 1px solid $color-primary-light;
  transition: box-shadow 0.25s ease-in-out;

  &.isElevated {
    box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: Righteous;
  font-size: 45px;
  font-weight: 400;
  cursor: pointer;
}

.link {
  font-family: $base-font;
  display: flex;
  gap: 108px;
  display: none;

  @include breakpoint('lg') {
    display: flex;
  }
}
.button {
  border-radius: 30px;
  border: 3px solid #000;
  padding: 16px;
  cursor: pointer;
  font-family: $base-font;
  text-align: center;
  width: auto;

  &:hover {
    border: 3px solid #000;
    background: #000;
    color: $color-white;
  }

  @include breakpoint('lg') {
    width: 25%;
  }
}
</style>

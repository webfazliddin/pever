<template>
  <el-dialog v-model="dialogVisible">
    <div v-show="activeTab2 === 'login'">
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
            <BaseAlert
              v-if="!!serverError.message"
              class="baseAlert"
              variant="danger"
              :message="serverError.message"
            />
          </div>

          <BaseAlert
            v-if="!!serverSuccess.message"
            class="baseAlert"
            variant="success"
            :message="serverSuccess.message"
          />

          <div>
            <BaseInput :placeholder="'Enter your number'" :value="formData.phoneNumber" />
          </div>

          <div>
            <BaseInput :placeholder="'Enter code'" :value="formData.code" />
          </div>

          <div class="forgot-link">
            <div class="login-link">Forgot Password</div>
          </div>
          <div class="login-btn">
            <BaseButton class="baseButton" :loading="isLoading">Login</BaseButton>
          </div>
        </div>
      </div>

      <div v-show="activeTab === 'tab2'">
        <div>
          <BaseInput
            label="Email"
            type="email"
            placeholder="name@example.com"
            :value="formData.email"
            :error="errors.email"
            :disabled="isLoading"
            @on-input="(value) => changeField('email', value)"
          />
        </div>

        <div>
          <BaseInput
            class="baseInput"
            label="Password"
            type="password"
            placeholder="min.8 characters"
            :value="formData.password"
            :showPassword="showPassword"
            :error="errors.password"
            :disabled="isLoading"
            @onPasswordToggle="showPasswordClick"
            @on-input="(value) => changeField('password', value)"
          />
        </div>

        <div class="login-btn">
          <BaseButton class="baseButton" :loading="isLoading"> Login </BaseButton>
        </div>
      </div>
    </div>
    <div v-show="activeTab2 === 'register'">
      <div class="login-title">Register</div>

      <BaseAlert
        v-if="!!serverError.message"
        variant="danger"
        class="alert"
        :message="serverError.message"
      />

      <BaseAlert
        v-if="!!serverSuccess.message"
        class="alert"
        variant="success"
        :message="serverSuccess.message"
      />

      <div>
        <div class="login-buttons">
          <button
            class="login-button"
            @click="activeTab = 'tab1'"
            :class="{ active: activeTab === 'tab1' }"
          >
            Phone Number
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
              <BaseInput
                :placeholder="'Name'"
                :value="formData.firstName"
                :error="errors.firstName"
                @on-input="(value) => changeField('firstName', value)"
              />
            </div>

            <div>
              <BaseInput
                :placeholder="'Number'"
                :value="formData.phoneNumber"
                :error="errors.number"
                @on-input="(value) => changeField('phoneNumber', value)"
              />
            </div>

            <BaseInput
              class="baseInput"
              type="password"
              placeholder="Password"
              :value="formData.password"
              :showPassword="showPassword"
              :error="errors.password"
              :disabled="isLoading"
              @onPasswordToggle="showPasswordClick"
              @on-input="(value) => changeField('password', value)"
            />
          </div>

          <div>
            <BaseInput
              class="baseInput"
              type="password"
              placeholder="Confirm Password"
              :value="formData.confirmPassword"
              :showPassword="showConfirmPassword"
              :error="errors.confirmPassword"
              :disabled="isLoading"
              @onPasswordToggle="showConfirmPasswordClick"
              @on-input="(value) => changeField('confirmPassword', value)"
            />
          </div>
          <div class="login-btn">
            <BaseButton class="baseButton">Register</BaseButton>
          </div>
        </div>
      </div>

      <div v-show="activeTab === 'tab2'">
        <div>
          <BaseInput
            label="Email"
            type="email"
            placeholder="name@example.com"
            :value="formData.email"
            :error="errors.email"
            :disabled="isLoading"
            @on-input="(value) => changeField('email', value)"
          />
        </div>

        <div>
          <BaseInput
            class="baseInput"
            label="Password"
            type="password"
            placeholder="min.8 characters"
            :value="formData.password"
            :showPassword="showPassword"
            :error="errors.password"
            :disabled="isLoading"
            @onPasswordToggle="showPasswordClick"
            @on-input="(value) => changeField('password', value)"
          />
        </div>

        <div class="login-btn">
          <BaseButton class="baseButton" :loading="isLoading"> Register </BaseButton>
        </div>
      </div>
    </div>

    <div
      class="login-page"
      @click="activeTab2 = 'login'"
      :class="{ active: activeTab2 === 'login' }"
    >
      Login
    </div>

    <div
      class="login-page"
      @click="activeTab2 = 'register'"
      :class="{ active: activeTab2 === 'register' }"
    >
      Register
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const dialogVisible = ref(true)
const activeTab = ref('tab1')
const activeTab2 = ref('login')
const showPassword = ref(false)
const isLoading = ref<boolean>(false)
const showConfirmPassword = ref<boolean>(false)

export interface ILoginView {
  email?: string
  password?: string
  phoneNumber?: number
  code?: number
  firstName?: string
  confirmPassword?: number
}

const serverError = reactive({
  message: ''
})
const serverSuccess = reactive({
  message: ''
})

const formData = ref({
  email: '',
  password: '',
  phoneNumber: '',
  code: '',
  firstName: '',
  confirmPassword: ''
})

const errors = reactive({
  email: '',
  password: '',
  phoneNumber: '',
  code: '',
  firstName: '',
  number: '',
  confirmPassword: ''
})

const changeField = (
  propertyName: 'email' | 'password' | 'phoneNumber' | 'code' | 'firstName' | 'confirmPassword',
  value: string
) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const showPasswordClick = () => {
  showPassword.value = !showPassword.value
}
const showConfirmPasswordClick = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
</script>

<style lang="scss">
.login-title {
  display: flex;
  justify-content: center;
  margin-top: -50px;
  color: #373535;
  font-family: $base-font;
  font-size: 25px;
  font-weight: 500;
  line-height: normal;
}
.login-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border: 1px solid #000;
  padding: 4px;
  border-radius: 25px;
  margin: 20px 0;
}
.login-button {
  color: #000;
  font-family: $base-font;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  border-radius: 20px;
  padding: 15px;
  border: none;
  cursor: pointer;
}
.login-button.active {
  background: #000;
  color: #fff;
}
.login-page {
  display: flex;
  justify-content: center;
  font-family: $base-font;
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}
.login-page.active {
  display: none;
}

.login-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.baseButton {
  width: 302px;
}
.login-link {
  font-family: $base-font;
  color: #373535;
  font-size: 14px;

  &:hover {
    color: $color-primary;
  }
}
.forgot-link {
  margin-bottom: 20px;
}
.registar {
  display: flex;
  justify-content: center;
}
.login {
  display: flex;
  justify-content: center;
}
</style>

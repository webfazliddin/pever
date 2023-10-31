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
              v-if="!!serverError.error"
              class="baseAlert"
              variant="danger"
              :message="serverError.error"
            />
          </div>

          <BaseAlert
            v-if="!!serverSuccess.error"
            class="baseAlert"
            variant="success"
            :message="serverSuccess.error"
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
            <BaseButton class="baseButton">Login</BaseButton>
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
          <BaseButton class="baseButton" :loading="isLoading" @on-click="login"> Login </BaseButton>
        </div>
      </div>
    </div>
    <div v-show="activeTab2 === 'register'">
      <div class="login-title">Register</div>

      <BaseAlert
        v-if="!!serverError.error"
        variant="danger"
        class="alert"
        :message="serverError.error"
      />

      <BaseAlert
        v-if="!!serverSuccess.error"
        class="alert"
        variant="success"
        :message="serverSuccess.error"
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
            type="username"
            placeholder="username"
            :value="formData.username"
            :error="errors.username"
            :disabled="isLoading"
            @on-input="(value) => changeField('username', value)"
          />
        </div>
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
          <BaseButton class="baseButton" :loading="isLoading" @on-click="register">
            Register
          </BaseButton>
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
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()
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
  error: ''
})
const serverSuccess = reactive({
  error: ''
})

const formData = ref({
  email: '',
  username: '',
  phoneNumber: '',
  code: '',
  firstName: '',
  password: '',
  confirmPassword: ''
})

const errors = reactive({
  email: '',
  username: '',
  phoneNumber: '',
  code: '',
  firstName: '',
  number: '',
  password: '',
  confirmPassword: ''
})

const showPasswordClick = () => {
  showPassword.value = !showPassword.value
}
const showConfirmPasswordClick = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const changeField = (
  propertyName:
    | 'email'
    | 'password'
    | 'phoneNumber'
    | 'code'
    | 'firstName'
    | 'confirmPassword'
    | 'username',
  value: string
) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const login = () => {
  isLoading.value = true
  authStore
    .login({
      email: formData.value.email,
      password: formData.value.password
    })
    .then((response) => {
      serverError.error = ''
      serverSuccess.error = response.data.error
      router.push('/')
    })
    .catch((error) => {
      const apiError = error.response.data
      serverError.error = apiError.error

      if (apiError.errors.email) {
        errors.email = apiError.email
      }

      if (apiError.errors.password) {
        errors.password = apiError.password
      }
    })
    .finally(() => {
      isLoading.value = false
    })
}

const register = () => {
  isLoading.value = true
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
  border: 4px solid #000;
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
  padding: 25px;
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
  height: 70px;
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

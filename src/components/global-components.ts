import type { App } from 'vue'

// UI components
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'

//Base
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'
import BaseAlert from '@/components/Base/BaseAlert.vue'

export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here

    app.component('AppHeader', AppHeader)
    app.component('AppFooter', AppFooter)
    app.component('BaseInput', BaseInput)
    app.component('BaseButton', BaseButton)
    app.component('BaseSpinner', BaseSpinner)
    app.component('BaseAlert', BaseAlert)
  }
}

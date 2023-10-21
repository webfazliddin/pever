// Layout components
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppFooter from '@/components/Layout/AppFooter.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'
import BaseAlert from '@/components/Base/BaseAlert.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Layout components
    AppHeader: typeof AppHeader
    AppFooter: typeof AppFooter
    BaseInput: typeof BaseInput
    BaseButton: typeof BaseButton
    BaseSpinner: typeof BaseSpinner
    BaseAlert: typeof BaseAlert
  }
}

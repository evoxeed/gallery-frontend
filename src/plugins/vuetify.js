import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { VIcon, VAvatar, VImg, VCol, VBtn, VRow, VContainer } from 'vuetify/components'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

export default createVuetify({
  components: {
    VIcon,
    VAvatar,
    VImg,
    VCol,
    VBtn,
    VRow,
    VContainer,
    VSkeletonLoader
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

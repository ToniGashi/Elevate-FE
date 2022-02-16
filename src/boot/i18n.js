import { createI18n } from 'vue-i18n'
import { Quasar, Cookies } from 'quasar'
import messages from 'src/i18n'

export default async ({ app, ssrContext }) => {
  const langIso = Cookies.has('locale')
    ? Cookies.get('locale') : 'bg'
  try {
    await import(
      /* webpackInclude: /(bg|en-US)\.js$/ */
      'quasar/lang/' + langIso
    ).then(lang => {
      Quasar.lang.set(lang.default, ssrContext)
      // Create I18n instance
      const i18n = createI18n({
        locale: langIso,
        messages
      })
      // Tell app to use the I18n instance
      app.use(i18n)
    })
  } catch (error) {
    console.log(error)
  }
}

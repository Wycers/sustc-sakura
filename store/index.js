export const state = () => ({
  locales: ['English', '简体中文', '繁體中文'],
  locale: 'en'
})

export const mutations = {
  SET_LANG (state, locale) {
    const locales_ = ['en', 'zh-cmn-Hans', 'zh-cmn-Hant']
    const index = state.locales.indexOf(locale)
    if (index !== -1) {
      state.locale = locales_(index)
    }
  }
}

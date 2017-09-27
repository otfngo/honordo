const DEFAULT_LANGUAGE = 'zh'

const LANGUAGE_LIST = [
  {lang: 'zh', name: '中文简体'},
  {lang: 'en', name: 'English'}
]

const ABOUT_LINK_LIST = [
  {lang: 'zh', link: '#/zh/about-us'},
  {lang: 'en', link: '#/en/about-us'}
]

const CAN_USE_WEBP = (() => {
  let elem = document.createElement('canvas')
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  return false
})()

const WEBP_EXT = '.webp'

export {
  DEFAULT_LANGUAGE,
  LANGUAGE_LIST,
  ABOUT_LINK_LIST,
  CAN_USE_WEBP,
  WEBP_EXT
}

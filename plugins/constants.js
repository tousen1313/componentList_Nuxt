const PROFILE_NAME = `Tousen`
const PROFILE_JOB = `Job: Front-End Engineer`
const PROFILE_LOCATION = `Location: Nigata/Japan`

const PROFILE_MESSAGE = `
  I'm Tousen.\n
  Interested in Front-End of web technology.\n
  work while having fun!!\n
  This is made with nuxt.js.\n
  In the future, I am eager to work with more enthusiastic Front-End engineers.\n
  I think developers can bring to a great experience for more people.\n
  In order to reach my goal, I think it is essential to learn about React.js and Vue.js.\n
  `

const SITE_DOMAIN = 'kokota_example.com'
const IPA = {
  fe: '基本情報技術者試験',
  ap: '応用情報技術者試験',
  sa: 'システムアーキテクト試験',
  nw: 'ネットワークスペシャリスト試験',
  db: 'データベーススペシャリスト試験',
  pm: 'プロジェクトマネージャ試験'
}

export default (context, inject) => {
  inject('PROFILE_NAME', PROFILE_NAME)
  inject('PROFILE_JOB', PROFILE_JOB)
  inject('PROFILE_LOCATION', PROFILE_LOCATION)
  inject('PROFILE_MESSAGE', PROFILE_MESSAGE)
  inject('SITE_DOMAIN', SITE_DOMAIN)
  inject('IPA', IPA)
}
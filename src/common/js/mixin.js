import {mapGetters} from 'vuex'

let caseMixin = {
  data() {
    return {
      currentIndex: 0,
      caseList: []
    }
  },
  created() {
    this.caseList = this._getCaseList()
  },
  methods: {
    handleListClick(event) {
      this.currentIndex = event.currentTarget.dataset['index']
    },
    _getCaseList() {
      let list = [
        {name: '软件开发'},
        {name: 'IT系统服务'},
        {name: '项目管理'},
        {name: '服务支持'}
      ]

      return list
    }
  }
}

let contactMixin = {
  computed: {
    contactInfo() {
      return this._getContactData().find(value => value.lang === this.lang).items
    },
    ...mapGetters([
      'lang'
    ])
  },
  methods: {
    _getContactData() {
      let list = [
        {
          lang: 'zh',
          items: {
            phone: {name: '电话', value: '0755-2322-0387'},
            email: {name: '邮箱', value: 'info@honordo.com'},
            fax: {name: '传真', value: '0755-2322-0387'},
            address: {name: '地址', value: '深圳市龙华新区金龙路华富锦大厦'}
          }
        },
        {
          lang: 'en',
          items: {
            phone: {name: 'Tel', value: '0755-2322-0387'},
            email: {name: 'Email', value: 'info@honordo.com'},
            fax: {name: 'Fax', value: '0755-2322-0387'},
            address: {
              name: 'Address', value: 'Huafujin Building, Jinlong Road, Longhua New District, Shenzhen, China'
            }
          }
        }
      ]

      return list
    }
  }
}

export {
  caseMixin,
  contactMixin
}

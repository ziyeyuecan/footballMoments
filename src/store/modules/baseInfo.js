// import { axiosAjax } from '../../../static/axiosHttp'
const state = {
  baseInfo: {}
}
const getters = {
  /** 登录信息 **/
  getToken: state => state.token
}

const actions = {
  /*
  fetchBaseInfo ({ commit, state }, param) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'GET',
        success: (data) => {
          commit('updateBaseInfo', data)
          resolve()
        },
        error: (errMsg) => {
          // reject(errMsg)
          alert(errMsg)
        }
      }
      if (JSON.stringify(state.baseInfo) === '{}' || state.baseInfo === '') {
        axiosAjax(Constant.GET_BASEINFO, param, options)
      } else {
        resolve()
      }
    })
  }
  */
}

const mutations = {
  saveToken (state, token) {
    state.token = token
  },
  updateBaseInfo (state, baseInfo) {
    const tempBaseInfo = {}
    // 转换 关系 数据结构
    const tempRelationList = []
    for (const key in baseInfo.relationShipList) {
      if (baseInfo.relationShipList.hasOwnProperty(key)) {
        const element = baseInfo.relationShipList[key]
        let obj = { id: element.relationship, value: element.description }
        tempRelationList.push(obj)
      }
    }
    tempBaseInfo['relationShip'] = tempRelationList
    state.baseInfo = tempBaseInfo
    // localStorage.setItem('baseInfo', JSON.stringify(tempBaseInfo))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

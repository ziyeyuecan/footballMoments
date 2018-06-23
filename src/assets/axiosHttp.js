/*
  option参数格式
  options{
    method: get,
    success: function(),
    error:function()
  }
*/
import axios from 'axios'
import loadingImg from '../assets/img/loading.gif'
import $ from 'jquery'
const qs = require('qs')
var baseURL = ''

export function axiosAjax (url, data, options) {
  let loading = {
    start: () => {
      let htmlLevel1 = '<div id="loadingContainer" class="loadingContainer" style="z-index: 5;width: 100%;height: 100%;position: fixed;background: #E0E0E0;bottom: 0;text-align: center;opacity: 0.5;">'
      let hmtlLevel2 = '<img src=' + loadingImg + ' class="loadingImg" style="display: inline-block;width: 1.3rem; height: 1.3rem;position: absolute;top: 50%; left: 48%;"></div>'
      if ($('#loadingContainer')) {
        $('#loadingContainer').remove()
        $('body').append(htmlLevel1 + hmtlLevel2)
      }
    },
    end: () => {
      if ($('#loadingContainer')) {
        $('#loadingContainer').remove()
      }
    }
  }

  loading.start()
  let method = options.method || 'GET'

  let ajaxObj = {
    method: method,
    url: baseURL + url
  }

  // let token = localStorage.getItem('token')
  // if (token !== '' && token !== null) ajaxObj.headers = {'Authorization': 'Bearer ' + token}

  if (method === 'GET' || method === 'get') {
    axios.get(ajaxObj.url, {params: data, headers: ajaxObj.headers})
      .then((response) => {
        loading.end()
        if (response.status >= 200 && response.status < 300) {
          if (options.success) {
            options.success(response.data)
          }
        }
      })
      .catch((error) => {
        loading.end()
        if (options.error) {
          options.error(error.response)
        }
      })
  } else {
    ajaxObj.data = qs.stringify(data)
    axios(ajaxObj)
      .then((response) => {
        loading.end()
        if (response.status >= 200 && response.status < 300) {
          if (options.success) {
            options.success(response.data)
          }
        }
      })
      .catch((error) => {
        loading.end()
        if (error.response) {
          if (options.error) {
            options.error(error.response)
          }
        }
      })
  }
}

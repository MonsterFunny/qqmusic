import jsonp from 'assets/js/jsonp.js'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend () {
  const url = ''
  const data = Object.assign({}, commonParams, {})
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    sin: 0,
    ein: 59,
    categoryId: 10000000,
    sortId: 5,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getRankList () {
  const url = '/api/getRankList'
  const data = Object.assign({}, {}, {
    page: 'index',
    tpl: 'macv4',
    v8debug: 1,
    format: 'html'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  }).then(result => {
    const start = result.indexOf('[')
    const end = result.lastIndexOf(']')
    const getdata = result.slice(start, end + 1)
    const json = JSON.parse(getdata)
    return json
  })
}

export function getMenuList () {
  const url = '/api/getMenuList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getRadioList () {
  const url = '/api/getRadioList'
  const data = Object.assign({}, {}, {
    channel: 'radio',
    format: 'json',
    page: 'index',
    tpl: 'wk',
    new: 1,
    p: Math.random(),
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getFirstList () {
  const url = '/api/getFirstList'
  const data = Object.assign({}, commonParams, {
    tpl: 'v12',
    format: 'json',
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    rnd: Math.random(),
    page: 'other'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSingerList () {
  const url = 'api/getSingerList'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq',
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

// noinspection JSUnresolvedVariable,JSCheckFunctionSignatures

const CryptoJs = require('crypto-js')
import { cryptojsConfig } from '@/settings'
const { secret } = cryptojsConfig

export const CryptoJsEncode = string => CryptoJs.AES.encrypt(string, secret).toString()

export const CryptoJsDecode = string => CryptoJs.AES.decrypt(string, secret).toString(CryptoJs.enc.Utf8)


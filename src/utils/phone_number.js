export function isvalidPhone(phone) {
  // 验证手机号是否真实
    const reg = /^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/
    return reg.test(phone)
  }
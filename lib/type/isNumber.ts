import getType from '../lang/getType'

// 判断是否为数字
const isNumber = (it: any): it is Number => {
    return getType(it) === 'number'
}

export default isNumber
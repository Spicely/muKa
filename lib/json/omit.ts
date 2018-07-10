// 移除指定数组对象 返回一个浅复制对象
const omit = (obj: object, fields: string[]): object  => {
    const shallowCopy = {
        ...obj
    }
    fields.map((i) => {
        delete shallowCopy[i]
    })
    return shallowCopy
}

export default omit
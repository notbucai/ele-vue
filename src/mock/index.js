// 使用 Mock
import Mock from 'mockjs'
Mock.mock('/api/data', (req, res) => {
    return {
        data: ['a','b']
    }
})
// 输出结果
console.log(JSON.stringify(data, null, 4))

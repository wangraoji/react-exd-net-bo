import request from '@/utils/request'
let api = "http://106.54.195.124:3001/testApi/"
// let api = "testApi/"
export function getData(url: string) {
    return request({
        url: api + url,
        method: 'get',
    })
}
export function actionRow(url: string, data: any) {
    return request({
        url: api + url,
        method: 'post',
        data: data
    })
}


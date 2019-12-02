import request from '@/utils/request'
let api = "http://127.0.0.1:3001/testApi/"
export function getData(url: string, param: any) {
    return request({
        url: api + url,
        method: 'post',
        data: param
    })
}

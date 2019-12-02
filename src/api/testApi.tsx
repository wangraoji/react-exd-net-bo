import request from '@/utils/request'
// let api = "http://127.0.0.1:3001/"
export function getData(url: string, param: any) {
    console.log(1);
    return request({
        url: "/data",
        method: 'get',
        // data: param
        // params: params
    })
}



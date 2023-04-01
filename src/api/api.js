import service from "@/service";

//登录
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data,
    });
}
import service from "@/service";

//登录
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data,
    });
}

//获取学生列表
export function getStudentList(params) {
    return service({
        method: 'get',
        url: '/students',
        params,
        //params是用来携带请求参数的，它以key-value的形式放在URL后面，是一个对象。
        //data是用来携带请求数据的，它以key-value的形式放在请求体中，是一个对象。
        //一般来说，GET请求使用params，POST请求使用data，注意区分！
    })
}

//学生数据删除
export function deleteStudent(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`,
    })
}
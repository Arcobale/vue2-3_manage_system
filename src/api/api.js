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
export function getStudentList() {
    return service({
        method: 'get',
        url: '/students',
    })
}

//学生数据删除
export function deleteStudent(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`,
    })
}
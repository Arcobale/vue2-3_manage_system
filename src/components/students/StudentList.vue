<template>
  <div>
    <el-table :data="studentList" border style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="age" label="年龄">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别">
      </el-table-column>
      <el-table-column prop="number" label="学号">
      </el-table-column>
      <el-table-column prop="class" label="班级">
      </el-table-column>
      <el-table-column prop="state_text" label="状态">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="phone" label="手机号">
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getStudentList } from '@/api/api';
export default {
  data() {
    return {
      studentList: [],
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      getStudentList().then((res) => {
        if (res.data.status == 200) {
          this.studentList = res.data.data;
          this.studentList.forEach(item => {
            // 尽量不要修改原数据，添加新字段
            item.sex_text = item.sex == 1 ? "男" : "女";
            item.state_text = item.state == 1 ? "已入学" : item.state == 2 ? "未入学" : "休学中";
          })
        }
      });
    }
  }
}
</script>

<style></style>
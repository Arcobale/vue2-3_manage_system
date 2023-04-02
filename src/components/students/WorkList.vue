<template>
  <div class="workList">
    <!-- 内容展示区域 -->
    <el-table :data="workList" border style="width: 100%">
      <el-table-column prop="id" label="用户ID">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级">
      </el-table-column>
      <el-table-column prop="title" label="作业名称">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getWorkList } from '@/utils/table';
export default {
  data() {
    return {
      workList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      formInline: {
        id: '',
        userId: '',
        title: '',
        completed: '',
      }
    }
  },
  mounted() {
    getWorkList(this, '/works');
  },
}
</script>

<style lang="scss">
.workList {
  .demo-form-inline {
    text-align: left;
  }

  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
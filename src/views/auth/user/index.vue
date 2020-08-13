<template>
    <div>
      <pageHeader title="用户列表"> </pageHeader>
      <el-table
        :data="userData"
        border
        style="width: 100%">
        <el-table-column
          prop="full_name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="username"
          label="name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="180">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱">
        </el-table-column>
        <el-table-column label="操作">
          <el-button
            size="medium" type="text"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="medium"
            type="text" style="color: #ea3e3e"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>

        </el-table-column>
      </el-table>
      <br>
      <pagination :total="total" :pageSize="params.limit" :currentPage="params.page_num" @pagination="paginationChange"></pagination>
    </div>

</template>

<script>

import { getUserList } from "@/api/user"
import pagination from '@/components/Pagination/index'
import pageHeader from '@/components/PageHeader/index'

export default {
    name: "index",
    components: { pagination,pageHeader },
    data() {
        return {
          userData: [],
          params: {
            limit:10,
            page_num:1
          },
          total:0
        }
    },
    created() {
        this.getUserList(this.params)
    },
    methods:{
        getUserList(params){
          getUserList(params).then(res=>{
            if (res.code==200){
              this.userData = res.data
              this.total = res.total
            }
          }).catch(error=>{

          })
        },
        async paginationChange(data){
            this.params.limit = data.limit
            // console.log(data.limit)
            this.params.page_num = data.currentPage
            await this.getUserList(this.params)
        },
        handleEdit(){

        },
        handleDelete(){

        }

  }


}
</script>

<style scoped>

</style>

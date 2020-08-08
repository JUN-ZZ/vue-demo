<template>
    <div>
      用户列表：<br>
      <el-table
        :data="userData"
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
      </el-table>
      <pagination :total="total" :pageSize="params.limit" :currentPage="params.page_num" @pagination="paginationChange"></pagination>
    </div>

</template>

<script>

import {getUserList} from "@/api/user"
import pagination from '@/components/Pagination/index'

export default {
    name: "index",
    components: { pagination },
    data() {
        return {
          userData: [],
          params: {
            limit:1,
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
        }

  }


}
</script>

<style scoped>

</style>

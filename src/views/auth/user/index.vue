<template>
    <div>
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
      <pagination></pagination>
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
          userData: []
        }
    },
    created() {
        this.getUserList()
    },
    methods:{

       getUserList(){
          getUserList().then(res=>{
            if (res.code==200){
              this.userData = res.data
            }
          }).catch(error=>{

          })

        }

  }


}
</script>

<style scoped>

</style>

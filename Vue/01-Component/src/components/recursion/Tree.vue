<template>
  <div class="kkb-tree">
    <TreeNode v-for="item in data" :key="item.title" :model="item"></TreeNode>
  </div>
</template>

<script>
import TreeNode from "@/components/recursion/TreeNode.vue";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    TreeNode
  },
  created(){
    console.log(JSON.parse(JSON.stringify(this.data)))
  }
};
</script>

<style scoped>
.kkb-tree {
  text-align: left;
}
</style>

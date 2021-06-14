<template>
  <div class="container" id="todo-app">
    <task-form></task-form>
    <tasks-list></tasks-list>
  </div>
</template>

<script>
// import {EventBus} from "@/main";

import TaskForm from "@/components/TaskForm";
import TasksList from "@/components/TasksList";

export default {
  name: 'ToDoApp',
  components: {
    TasksList,
    TaskForm
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
.container {
  max-width: 1200px;
  min-width: 700px;
  margin: 20px auto;

  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>

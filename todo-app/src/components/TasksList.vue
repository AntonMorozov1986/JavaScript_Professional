<template>
<div class="tasks-list">
  <button class="btn" @click="deleteCompletedTasks">Удалить завершенные задачи</button>
  <task-item
    v-for="task of sortedTaskList"
    :key="task.id"
    :task="task"
    @deleteTask="deleteTask(task)"
    @changeTaskStatus="changeTaskStatus(task)"
  ></task-item>
</div>
</template>

<script>
import { EventBus } from "@/main";
import TaskItem from "@/components/TaskItem";

export default {
  name: "TasksList",
  components: {
    TaskItem
  },
  data() {
    return {
      tasksList: []
    }
  },
  computed: {
    sortedTaskList() {
      const list = [...this.tasksList]
      return list.sort((a, b) => {
        return new Date(a.endDate) - new Date(b.endDate);
      });
    }
  },

  methods: {
    makePOSTRequest({url: url, requestData: requestData}) {
      return fetch(`http://localhost:3001${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
    },

    deleteTask(...tasks) {
      this.makePOSTRequest({url: '/deleteTask', requestData: tasks})
        .then(response => response.json())
        .then(fileJSON => this.tasksList = fileJSON.tasksList);
    },

    changeTaskStatus(task) {
      this.makePOSTRequest({url: '/changeTaskStatus', requestData: task})
          .then(response => response.json())
          .then(fileJSON => this.tasksList = fileJSON.tasksList);
    },

    deleteCompletedTasks() {
      const completedTasksList = this.tasksList.filter(task => task.isDone === true);
      this.deleteTask(...completedTasksList);
    }
  },


  created() {
    EventBus.$on('updateTasksList', data => {
      this.tasksList = data;
    });
  },

  mounted() {
    fetch(`http://localhost:3001/getTasks`)
      .then(response => response.json())
      .then(data => this.tasksList = data.tasksList);
  }
}
</script>

<style lang="scss" scoped>
  .tasks-list {
    margin: 30px 0 0 0;
    padding: 0;
  }

  .btn {
    box-sizing: border-box;
    display: block;
    padding: 10px;

    border: 1px solid black;

    font-size: 17px;
    font-weight: bold;
    line-height: 20px;

  &:hover {
     background-color: gray;
     color: white;
   }

  &:active {
     background-color: white;
     color: black;
   }
  }
</style>
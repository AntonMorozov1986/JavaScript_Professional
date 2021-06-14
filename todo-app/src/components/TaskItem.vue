<template>
  <div
      class="task-item"
      :class="{
                'task-item-done': task.isDone,
                'task-item-expired': taskExpired
              }"
  >
    <button
        class="task-item-status item"
        @click="changeTaskStatus(task)"
    >готово</button>
    <span class="task-item-title item">{{ task.title }}</span>
    <span class="task-item-start-date item">{{ new Date(task.startDate).toLocaleDateString() }}</span>
    <span class="task-item-end-date item">{{ new Date(task.endDate).toLocaleDateString() }}</span>
    <button
        class="task-item-delete item"
        @click="deleteTask(task)"
    >удалить</button>
  </div>

</template>

<script>
export default {
  name: "TaskItem",
  data() {
    return {
      // isDone: false
    }
  },

  props: {
    task: {
      type: Object,
      required: true
    }
  },

  computed: {
    taskExpired() {
      const taskEndDate = new Date(this.task.endDate);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0)
      if (taskEndDate < currentDate && !this.task.isDone) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    deleteTask(task) {
      this.$emit('deleteTask', task);
    },

    changeTaskStatus(task) {
      this.$emit('changeTaskStatus', task);
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    box-sizing: border-box;
    display: block;
    padding: 10px;
    align-self: stretch;

    font-size: 17px;
    line-height: 20px;
  }

  .task-item {
    position: relative;
    display: grid;
    grid-template-columns: 100px auto 155px 155px 100px;
    margin: 15px 0 0 0;

    border: 1px solid black;

    &:first-child {
      margin: 0;
    }

    &-status {
      border: none;
      align-self: stretch;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        background-color: gray;
        color: white;
      }

      &:active {
        background-color: white;
        color: black;
      }
    }

    &-done {
      background-color: lightgreen;
    }

    &-expired {
      background-color: lightcoral;
    }

    &-title:before {
      content: 'Задача:';
      display: block;
      margin: 0 0 10px 0;
    }

    &-start-date:before {
      content: 'Дата начала:';
      display: block;
      margin: 0 0 10px 0;
    }

    &-end-date:before {
      content: 'Дата окончания:';
      display: block;
      margin: 0 0 10px 0;
    }



    &-delete {
      border: none;
      align-self: stretch;
      text-transform: uppercase;
      font-weight: bold;

      &:hover {
        background-color: gray;
        color: white;
      }

      &:active {
        background-color: white;
        color: black;
      }
    }

  }
</style>
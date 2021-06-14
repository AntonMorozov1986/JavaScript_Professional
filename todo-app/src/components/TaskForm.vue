<template>
  <form class="form"  @submit.prevent="createTask">
    <fieldset>
      <label class="form-element" for="task-title">Название задачи</label>
      <input
          class="form-element"
          :class="{'is-invalid': $v.title.$error}"
          type="text"
          id="task-title"
          v-model="title"
          @blur="$v.title.$touch()"
      >
      <p class="err-message" v-if="!$v.title.required && $v.title.$error">Это поле обязательное. Введите название задачи</p>
      <p class="err-message" v-if="!$v.title.minLength && $v.title.$error">Название задачи должно быть длиной не менее 10 символов</p>

      <label class="form-element" for="task-end-date">Дата завершения</label>
      <input
          class="form-element"
          :class="{'is-invalid': $v.endDate.$error}"
          type="date"
          id="task-end-date"
          v-model="endDate"
          @blur="$v.endDate.$touch()"
      >
      <p class="err-message" v-if="!$v.endDate.required && $v.endDate.$error">Это поле обязательное. Введите дату выполнения задачи</p>
      <p class="err-message" v-if="!$v.endDate.notInPast && $v.endDate.$error">Дата выполнения задачи не может быть в прошлом</p>

      <button class="form-element" type="submit" :disabled="$v.$invalid">Добавить</button>
      <legend>Введите новую задачу</legend>
    </fieldset>
  </form>
</template>

<script>
import {EventBus} from "@/main";
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "TaskForm",
  data() {
    return {
      title: '',
      endDate: null
    }
  },

  validations: {
    title: {
      required,
      minLength: minLength(10)
    },
    endDate: {
      required,
      notInPast: (date) => {
        const userDate = new Date(date);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0)
        if (userDate < currentDate) {
          return false;
        } else {
          return true;
        }
      }
    }
  },

  methods: {
    createTask() {
      const task = {
        title: this.title,
        endDate: new Date(this.endDate),
        startDate: new Date(),
        isDone: false
      }
      this.makePOSTRequest({url: '/addTask', requestData: task})
        .then(response => response.json())
        .then(data => EventBus.$emit('updateTasksList', data.tasksList))
        .then(() => {
          this.title = '';
          this.endDate = null;
        });
    },

    makePOSTRequest({url: url, requestData: requestData}) {
      return fetch(`http://localhost:3001${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
    }
  }

}
</script>

<style lang="scss" scoped>
.form > fieldset {
  margin: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  font-size: 17px;
}

.form-element {
  margin: 10px 0 0 0;

&:first-child {
   margin: 0;
 }
}

.is-invalid {
  border: 2px solid red;
}

.err-message {
  margin: 2px 0 0 0;
  color: red;
  font-size: 12px;
}
</style>
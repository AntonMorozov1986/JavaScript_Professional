const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('Server started on 3001 port!');
});

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(`tasksData${filePath}`, 'utf8', (err, data) => {
      if (err) {
        reject('{"result": 0}');
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`tasksData${filePath}`, JSON.stringify(data), err => {
        if (err) {
          // console.log('Ошибка');
          reject(`{"Ошибка": ${err}`)
        } else {
          // console.log('ОК');
          resolve(JSON.stringify(data));
        }
      });
  });
}

/**
 * GET-запрос на получение списка задач
 */
app.get('/getTasks', (req, res) => {
  readFile('/tasksList.json')
    .then(data => res.send(data))
    .catch(err => res.send(`"result" = 0, "error" = ${JSON.stringify(err)}`));
});



/**
 * POST-запрос на добавление задачи в список
 */
app.post('/addTask', (req, res) => {
  readFile('/tasksList.json')
    .then(data => {
      const fileJSON = JSON.parse(data);
      console.log('it is fileJSON');
      console.log(fileJSON);
      fileJSON.lastId += 1;
      // console.log(tasksList);
      // console.log(lastId);
      const newTask = Object.assign({id: fileJSON.lastId}, req.body);
      // console.log(newTask)
      fileJSON.tasksList.push(newTask);
      console.log('it is fileJSON after write');
      console.log(fileJSON);

      return fileJSON;
    })
    .then(fileJSON => writeFile('/tasksList.json', fileJSON))
    .then(data => res.send(data));
});

/**
 * POST-запрос на удаление задачи из списка
 */
app.post('/deleteTask', (req, res) => {
  readFile('/tasksList.json')
    .then(data => {
      const fileJSON = JSON.parse(data);

      for (const task of req.body) {
        fileJSON.tasksList = fileJSON.tasksList.filter(element => element.id !== task.id)
      }

      return fileJSON;
    })
    .then(fileJSON => writeFile('/tasksList.json', fileJSON))
    .then(data => res.send(data));
});


/**
 * POST-запрос на изменение статуса задачи
 */
app.post('/changeTaskStatus', (req, res) => {
  readFile('/tasksList.json')
    .then(data => {
      const fileJSON = JSON.parse(data);
      console.log('it is fileJSON');
      console.log(fileJSON);

      const foundedTask = fileJSON.tasksList.find(element => element.id === req.body.id)
      foundedTask.isDone = !foundedTask.isDone


      console.log('it is fileJSON after write');
      console.log(fileJSON);

      return fileJSON;
    })
    .then(fileJSON => writeFile('/tasksList.json', fileJSON))
    .then(data => res.send(data));
});

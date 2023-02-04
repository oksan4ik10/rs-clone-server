# rs-clone-server

Для установки сервера:

1. Скачайте репозиторий https://github.com/oksan4ik10/rs-clone-server/tree/develope
2. Установите зависимоcти npm i
3. Запустите сервер командой npm start

## Запросы для книг

### GET /api/books/

Выбор всех книг из базы данных

### GET /api/books/id

Выбор книги по id (Например, http://localhost:3000/api/books/63da9b85ef7a8be965942753)

## Регистрация

<details>

- **URL**

  /api/login

- **Method:**

  `POST`

- **Headers:**

  `'Content-Type': 'application/json'`

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**

  ```typescript
    {
      name: string,
      email: string,
      password: string
    }
  ```

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    ```json
    {
      "email": "1235@mail.ru",
      "password": "$2a$10$gnDxenM9579YTPQv5L7G1edPoPKITTHQSKm1bfoyjle0iAEQIycaO",
      "name": "admin",
      "img": "url",
      "books": [],
      "_id": "63dc3545eaf0ee58cae97a94",
      "__v": 0
    }
    ```

- **Error Response:**

  - **Code:** 409 <br />
    **Content:**

  ```json
  {
    "message": "Пользователь с таким email уже существует"
  }
  ```

- **Notes:**

  None

</details>

## Авторизация

<details>

- **URL**

  /api/auth

- **Method:**

  `POST`

- **Headers:**

  `'Content-Type': 'application/json'`

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**

  ```typescript
    {
      email: string,
      password: string
    }
  ```

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    ```json
    {
      "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2RjMzU0NWVhZjBlZTU4Y2FlOTdhOTQiLCJpYXQiOjE2NzU0NjAzMjgsImV4cCI6MTY3NTQ2MzkyOH0.EcJOglI5SYuwcPQE5U6fN1Gjkn7XXEFZFSYZPf1ZFXo"
    }
    ```

- **Error Response:**

  - **Code:** 404 <br />
    **Content:**

  ```json
  {
    "message": "Пользователь с таким email не найден"
  }
  ```

  - **Code:** 401 <br />
    **Content:**

  ```json
  {
    "message": "Пароль не верный. Попробуйте снова"
  }
  ```

- **Notes:**

  None

</details>

## Оценки

Поставить оценку книге для авторизованного пользователя <br>
Пересчитывается рейтинг книги

<details>

- **URL**

  /api/grades

- **Method:**

  `POST`

- **Headers:**

  `'Content-Type': 'application/json'`
  `'Authorization': '${token}' `

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**
  value - оценка для книги

  ```typescript
    {
      bookId: string,
      value: Number
    }
  ```

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    ```json
    {
      "raiting": 5,
      "_id": "63dbd4fe942b52bc2a107c35",
      "title": "Стрелок",
      "author": "Стивен Кинг",
      "img": "https://fantlab.ru/images/editions/big/310370?r=1619868610",
      "year": 1982,
      "desc": "Где-то на краю света стоит таинственная Черная Башня — воплощение всего Зла. Стрелок Роланд отправляется в путешествие, полное опасностей и нелегких решений, чтобы найти ее. Препятствует ему человек в черном, который должен раскрыть стрелку тайны мироздания, но только это потом... А сейчас предначертанный и сложный путь предстоит отпрыску великого рода Эльда...",
      "genre": "Ужасы"
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  None

</details>

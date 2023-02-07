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

### Получить 7 книг с лучшим рейтингом <br>

<details>

- **URL**

  /api/books/best/list

- **Method:**

  `GET`

- **Headers:**
  None
- **URL Params**

  None

- **Query Params**

  None

- **Data Params**
  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    [
      {
        "raiting": 5,
        "_id": "63dbd4fe942b52bc2a107c35",
        "title": "Стрелок",
        "author": "Стивен Кинг",
        "img": "https://fantlab.ru/images/editions/big/310370?r=1619868610",
        "year": 1982,
        "desc": "Где-то на краю света стоит таинственная Черная Башня — воплощение всего Зла. Стрелок Роланд отправляется в путешествие, полное опасностей и нелегких решений, чтобы найти ее. Препятствует ему человек в черном, который должен раскрыть стрелку тайны мироздания, но только это потом... А сейчас предначертанный и сложный путь предстоит отпрыску великого рода Эльда...",
        "genre": "Ужасы"
      },
      {
        //...
      }
    ]
    ```

- **Error Response:**

  - **Code:** 500 <br />
    **Content:**

- **Notes:**

  None

</details>

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

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "email": "1235@mail.ru",
      "password": "$2a$10$gnDxenM9579YTPQv5L7G1edPoPKITTHQSKm1bfoyjle0iAEQIycaO",
      "name": "admin",
      "img": "url",
      "books": [],
      "_id": "63dc3545eaf0ee58cae97a94",
      "__v": 0,
      "booksLike": []
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

  - **Code:** 200 CREATED <br />
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

  - **Code:** 200 CREATED <br />
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

Получить оценку пользователя по книге <br>

<details>

- **URL**

  /api/grades/:bookId

- **Method:**

  `GET`

- **Headers:**

`'Content-Type': 'application/json'`

- **URL Params**

  bookId:string - id книги

- **Query Params**

  None

- **Data Params**

  ```typescript
    {
      userId: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "_id": "63deb8eff9151e79eb689963",
      "bookId": "63dbd4fe942b52bc2a107c35",
      "userId": "63de41cd9d58adb2022c92cf",
      "value": 7,
      "__v": 0
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized
    - **Code:** 404 <br />
      **Content:**
      ```json
      {
        "message": "Нет оценки"
      }
      ```

- **Notes:**

  None

</details>

## Пользователи

Получить данные о пользователе <br>

<details>

- **URL**

  /api/users/personal

- **Method:**

  `GET`

- **Headers:**

  `'Authorization': '${token}' `

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "_id": "63dfbf89025b6e369e73986c",
      "email": "admin@mail.ru",
      "password": "$2a$10$PM8ZUfpqLW.kOLeReWNMIeJUqr3bqSJl8hgNfSCLpGSBbwmgwBkiW",
      "name": "Oksana",
      "img": "./images/avatar.jpg",
      "books": ["63dbd4fe942b52bc2a107c35", "63dbd4fe942b52bc2a107c37"],
      "__v": 0,
      "booksLike": ["63dbd4fe942b52bc2a107c36"]
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  None

</details>

Добавить книгу в **прочитанное** пользователем<br>

<details>

- **URL**

  /api/users

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

  ```typescript
    {
      bookId: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "modifiedCount": 1
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

    - **Code:** 409 <br />
      **Content:**
      ```json
      {
        "message": "Книга уже есть в разделе 'Хочу почитать' "
      }
      ```

- **Notes:**

  modifiedCount - если книга уже была у пользователя, то вернется значение 0, иначе - 1

</details>

Удалить книгу из **прочитанного** пользователем<br>

<details>

- **URL**

  /api/users/delete

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

  ```typescript
    {
      bookId: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "modifiedCount": 1
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  modifiedCount - если книги нет у пользователя, то вернется значение 0, иначе - 1

</details>

Проверка есть ли книга у пользователя в **прочитанном** <br>

<details>

- **URL**

  /api/users/books/:bookId

- **Method:**

  `GET`

- **Headers:**

  `'Authorization': '${token}' `

- **URL Params**

  bookId - идентификатор книги

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "status": true
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  "status": true - если книга есть у пользователя, false если нету

</details>

Добавить книгу в **хочу прочитать** пользователем<br>

<details>

- **URL**

  /api/users/booksLike

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

  ```typescript
    {
      bookId: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "modifiedCount": 1
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

    - **Code:** 409 <br />
      **Content:**
      ```json
      {
        "message": "Книга уже есть в разделе прочитанное "
      }
      ```

- **Notes:**

  modifiedCount - если книга уже была у пользователя, то вернется значение 0, иначе - 1

</details>

Удалить книгу из **хочу почитать** пользователем<br>

<details>

- **URL**

  /api/users/booksLike/delete

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

  ```typescript
    {
      bookId: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "modifiedCount": 1
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  modifiedCount - если в избранном книги нет у пользователя, то вернется значение 0, иначе - 1

</details>

Проверка есть ли книга у пользователя в **хочу прочитать** <br>

<details>

- **URL**

  /api/users/booksLike/:bookId

- **Method:**

  `GET`

- **Headers:**

  `'Authorization': '${token}' `

- **URL Params**

  bookId - идентификатор книги

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "status": true
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  "status": true - если книга есть у пользователя в избранном, false если нету

</details>

## Рецензии

Добавить или изменить рецензию

<details>

- **URL**

  /api/reviews

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

  ```typescript
    {
      "bookId": string,
      "text": string
    }
  ```

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "bookId": "63dbd4fe942b52bc2a107c35",
      "userImg": "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg",
      "userName": "admin",
      "userId": "63dfbf89025b6e369e73986c",
      "text": "Я прочитала книгу за три дня. Возможно, сыграло то, что друзья давали очень восторженные отзывы, или предисловие автора вызвало такой жгучий интерес, но я ни о чем думать не могла, кроме книги, пока читала. Жутко интересно что будет дальше)",
      "date": "2023-02-06T23:49:27.429Z",
      "_id": "63e193d5b37e7a1f250fff82",
      "__v": 0
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  Если пользователь попытается добавить еще одну рецензию на книгу, то данные перезапишутся

</details>

Удалить рецензию

<details>

- **URL**

  /api/reviews/:reviewId

- **Method:**

  `DELETE`

- **Headers:**

  `'Authorization': '${token}' `

- **URL Params**

  reviewId:string - id рецензии

- **Query Params**

  None

- **Data Params**
  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    ```json
    {
      "success": true
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized
  - **Code:** 404 <br />
    **Content:**
    ```json
    {
      "success": false,
      "message": "Книга с таким id не найдена"
    }
    ```

- **Notes:**
404 возможно не понадобится
</details>

Получить рецензию пользователя по книге <br>

<details>

- **URL**

  /api/reviews/user/:bookId

- **Method:**

  `GET`

- **Headers:**

  `'Authorization': '${token}' `

- **URL Params**

  bookId - идентификатор книги

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "_id": "63dfc79f143594051e3c7cf5",
      "bookId": "63dbd4fe942b52bc2a107c35",
      "userId": "63dfbf89025b6e369e73986c",
      "text": "Хотя я читал «Властелина» в 1966 и 1967 годах, я все же воздерживался от того, чтобы писать самому. Я сразу проникся (чистосердечно и искренне) размахом воображения Толкиена – честолюбивыми замыслами его книги, – но мне хотелось писать свое, и если бы я начал писать тогда, я написал бы не свою, а его историю. А это, как любил говорить покойный Ловкий Дик Никсон, было бы в корне неправильно. Благодаря мистеру Толкиену двадцатый век получил свою необходимую порцию магов и эльфов.",
      "date": "2023-02-05T15:13:31.781Z",
      "__v": 0
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  None
  </details>

Получить все рецензии книги <br>

<details>

- **URL**

  /api/reviews/book/:bookId

- **Method:**

  `GET`

- **Headers:**

None

- **URL Params**

  bookId - идентификатор книги

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    [
      {
          "bookId": "63dbd4fe942b52bc2a107c35",
          "userImg": "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg",
          "userName": "admin",
          "userId": "63dfbf89025b6e369e73986c",
          "text": "Я прочитала книгу за три дня. Возможно, сыграло то, что друзья давали очень восторженные отзывы, или предисловие автора вызвало такой жгучий интерес, но я ни о чем думать не могла, кроме книги, пока читала. Жутко интересно что будет дальше)",
          "date": "2023-02-06T23:49:27.429Z",
          "_id": "63e193d5b37e7a1f250fff82",
          "__v": 0
      },
    {...}
    ]
    ```

- **Error Response:**
  None

- **Notes:**

  None
  </details>

  Получить последние 10 рецензий <br>

<details>

- **URL**

  /api/reviews/last

- **Method:**

  `GET`

- **Headers:**

None

- **URL Params**

  None

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    [
      {
          "bookId": "63dbd4fe942b52bc2a107c35",
          "userImg": "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg",
          "userName": "admin",
          "userId": "63dfbf89025b6e369e73986c",
          "text": "Я прочитала книгу за три дня. Возможно, сыграло то, что друзья давали очень восторженные отзывы, или предисловие автора вызвало такой жгучий интерес, но я ни о чем думать не могла, кроме книги, пока читала. Жутко интересно что будет дальше)",
          "date": "2023-02-06T23:49:27.429Z",
          "_id": "63e193d5b37e7a1f250fff82",
          "__v": 0
      },
    {...}
    ]
    ```

- **Error Response:**
  None

- **Notes:**

  None
  </details>

  Проверка есть ли рецензия у пользователя на книгу <br>

<details>

- **URL**

  /api/reviews/check/:bookId

- **Method:**

  `GET`

- **Headers:**

  `'Authorization': '${token}' `

- **URL Params**

  bookId - идентификатор книги

- **Query Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 CREATED <br />
    **Content:**
    ```json
    {
      "status": true
    }
    ```

- **Error Response:**

  - **Code:** 401 <br />
    **Content:**
    Unauthorized

- **Notes:**

  "status": true - если рецензия есть у пользователя, false если нету

</details>

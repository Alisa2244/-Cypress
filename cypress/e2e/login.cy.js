describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зайти на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
         cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
         cy.get('#mail').type('german@dolnikov.ru'); // Найти поле "Логин", ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Найти поле "Пароль", ввести верный пароль
         cy.get('#loginButton').click(); //Нажать "Войти"
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что текст отображается
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    })  
    
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#mail').type('german@dolnikov.ru'); // Найти поле "Логин", ввести верный логин
        cy.get('#pass').type('iLoveqastudio'); // Найти поле "Пароль", ввести неверный пароль
        cy.get('#loginButton').click(); //Нажать "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
   })  

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#mail').type('german@dolnik.ru'); // Найти поле "Логин", ввести неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле "Пароль", ввести верный пароль
        cy.get('#loginButton').click(); //Нажать "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 
     
    it('Неверный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#mail').type('german@dolnik.ru'); // Найти поле "Логин", ввести неверный логин
        cy.get('#pass').type('iLoveqastud'); // Найти поле "Пароль", ввести неверный пароль
        cy.get('#loginButton').click(); //Нажать "Войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 

    it('Верный пароль и неверная валидация логина', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#mail').type('germandolnikov.ru'); // Найти поле "Логин", ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле "Пароль", ввести верный пароль
        cy.get('#loginButton').click(); //Нажать "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
   }) 

    it('Верный пароль и неверная валидация логина - почта без @', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#mail').type('german@dolnikovru'); // Найти поле "Логин", ввести логин без .
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле "Пароль", ввести верный пароль
        cy.get('#loginButton').click(); //Нажать "Войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Найти поле ввода почты и ввести правильную почту
        cy.get('#restoreEmailButton').click(); // Нажать на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 

    it('Восстановление пароля, почта без @', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль?"
        cy.get('#mailForgot').type('germandolnikov.ru'); // Найти поле ввода почты и ввести невалидную почту (без @)
        cy.get('#restoreEmailButton').click(); // Нажать на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 

    it('Восстановление пароля, почта без точки', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль?"
        cy.get('#mailForgot').type('german@dolnikovru'); // Найти поле ввода почты и ввести невалидную почту (без точки)
        cy.get('#restoreEmailButton').click(); // Нажать на кнопку "Отправить код"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    })

    it('Восстановление пароля, пустая поччта', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль?"
        cy.get('#restoreEmailButton').click(); // Нажать на кнопку "Отправить код" (Поле ввода почты оставить пустым)
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 

    it('Верный пароль и логин с разным регистром', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get('#forgotEmailButton').should('be.visible') // Кнопка видна пользователям
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Найти поле "Логин", ввести неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле "Пароль", ввести верный пароль
        cy.get('#loginButton').click(); //Нажать "Войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что текст отображается
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка, что крестик виден пользователю
    }) 
 })
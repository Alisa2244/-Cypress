import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_password from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зайти на сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка правильного цвета кнопки
        cy.get(main_page.fogot_pass_btn).should('be.visible') // Кнопка видна пользователям
    });

    afterEach('Конец теста', function () {
        cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
        cy.get(result_page.close).should('be.visible') // Проверка, что крестик виден пользователю
    });

    it('Верный пароль и верный логин', function () {
         cy.get(main_page.email).type(data.login); // Найти поле "Логин", ввести верный логин
         cy.get(main_page.password).type(data.password); // Найти поле "Пароль", ввести верный пароль
         cy.get(main_page.login_button).click(); //Нажать "Войти"
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что текст отображается
    })  
    
    it('Неверный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); // Найти поле "Логин", ввести верный логин
        cy.get(main_page.password).type('iLoveqastudio'); // Найти поле "Пароль", ввести неверный пароль
        cy.get(main_page.login_button).click(); //Нажать "Войти"
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что текст отображается
   })  

    it('Верный пароль и неверный логин', function () {
        cy.get(main_page.email).type('german@dolnik.ru'); // Найти поле "Логин", ввести неверный логин
        cy.get(main_page.password).type(data.password); // Найти поле "Пароль", ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать "Войти"
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что текст отображается
    }) 
     
    it('Неверный пароль и неверный логин', function () {
        cy.get(main_page.email).type('german@dolnik.ru'); // Найти поле "Логин", ввести неверный логин
        cy.get(main_page.password).type('iLoveqastud'); // Найти поле "Пароль", ввести неверный пароль
        cy.get(main_page.login_button).click(); //Нажать "Войти"
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка, что текст отображается
    }) 

    it('Верный пароль и неверная валидация логина', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // Найти поле "Логин", ввести логин без @
        cy.get(main_page.password).type(data.password); // Найти поле "Пароль", ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать "Войти"
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
   }) 

    it('Верный пароль и неверная валидация логина - почта без @', function () {
        cy.get(main_page.email).type('german@dolnikovru'); // Найти поле "Логин", ввести логин без .
        cy.get(main_page.password).type(data.password); // Найти поле "Пароль", ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать "Войти"
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
    }) 

    it('Восстановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажать "Забыли пароль?"
        cy.get(recovery_password.email).type(data.login); // Найти поле ввода почты и ввести правильную почту
        cy.get(recovery_password.send_button).click(); // Нажать на кнопку "Отправить код"
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверка, что текст отображается
    }) 

    it('Восстановление пароля, почта без @', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажать "Забыли пароль?"
        cy.get(recovery_password.email).type('germandolnikov.ru'); // Найти поле ввода почты и ввести невалидную почту (без @)
        cy.get(recovery_password.send_button).click(); // Нажать на кнопку "Отправить код"
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
    }) 

    it('Восстановление пароля, почта без точки', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажать "Забыли пароль?"
        cy.get(recovery_password.email).type('german@dolnikovru'); // Найти поле ввода почты и ввести невалидную почту (без точки)
        cy.get(recovery_password.send_button).click(); // Нажать на кнопку "Отправить код"
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
    })

    it('Восстановление пароля, пустая поччта', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажать "Забыли пароль?"
        cy.get(recovery_password.send_button).click(); // Нажать на кнопку "Отправить код" (Поле ввода почты оставить пустым)
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка, что текст отображается
    }) 

    it('Верный пароль и логин с разным регистром', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Найти поле "Логин", ввести логин с заглавными бкувами
        cy.get(main_page.password).type(data.password); // Найти поле "Пароль", ввести верный пароль
        cy.get(main_page.login_button).click(); //Нажать "Войти"
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка, что текст отображается
    }) 
 })
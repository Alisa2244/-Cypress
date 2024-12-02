describe('Покупка премиума', function () {
    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('alisaandrianova2244@yandex.ru'); // Найти поле "Логин", ввести верный логин
         cy.get('#password').type('Alisa2244'); // Найти поле "Пароль", ввести верный пароль
         cy.get('.auth__button').click(); //Нажать "Войти"
         cy.get('.header__container > .header__id').click(); // Перейти на страницу тренера
         cy.get('[href="/premium"]').click(); // Перейти на страницу "Покупка премиума"
         cy.get('.auth__input').type('1'); // Ввести в инпут "1"
         cy.get('.auth__form > .button_to_down > .profile__button').click(); // Нажать кнопку "Перейти к оплате"
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); // Ввести номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1127'); // Ввести дату
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввести код успеха
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('alisa'); // Ввести имя
         cy.get('.pay-btn').click(); // Нажать кнопку "Оплатить"
         cy.get('#cardnumber').type('56456'); // Ввести СМС-пароль
         cy.get('.payment__submit-button').click(); // Нажать кнопку "Отправить"
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Надпись отображается
         cy.get('.payment__font-for-success').should('be.visible'); // Надпись видна пользователю
        })  
 })
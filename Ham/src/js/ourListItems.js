export default [
  {
    title: "Web Design",
    image: "https://picsum.photos/id/1003/200/140.jpg",
    text:
      "Хоча, така інкапсуляція є бажаною для компонентів, які описують певну закінчену частину додатка, наприклад, FeedStory або Comment, це може бути незручним для часто перевикористовуваних “дрібних” компонентів, таких як FancyButton та MyTextInput. Ці компоненти використовуються в додатку подібно до звичайних DOM button чи input і доступ до їхніх DOM-вузлів може бути необхідним для управління фокусом, виділенням або анімацією. Таким чином, компоненти, що використовують FancyButton можуть отримати реф внутрішнього DOM-вузла button і якщо потрібно, мати доступ до DOM button подібно до того, якби він використовувався напряму.",
  },
  {
    title: "Graphic Design",
    image: "https://picsum.photos/id/1002/200/140.jpg",
    text:
      "Ми довго обговорювали це рішення і, судячи з нашого досвіду, гірше було б залишити пошкоджений UI на місці, ніж повністю його вилучити. Наприклад, в такому продукті як чат (Facebook Messenger), відображення пошкодженого UI може призвести до того, що хтось надіслав би повідомлення не тій людині. Аналогічно, ще гірше у додатку з проведення платежів відобразити невірну суму, ніж не відобразити взагалі нічого.",
  },
  {
    title: "Online Support",
    image: "https://picsum.photos/id/1001/200/140.jpg",
    text:
      "Вирішуйте на ваш розсуд, як часто ставити запобіжники. Було б доцільно обгорнути компоненти маршрутів найвищого рівня, щоб показати користувачеві повідомлення «Щось пішло не так», так само, як це часто робиться в фреймворках на стороні сервера. Ви також можете обгорнути в запобіжник окремі віджети, щоб захистити решту додатку від збоїв в них. Таким чином, компоненти, що використовують FancyButton можуть отримати реф внутрішнього DOM-вузла button і якщо потрібно, мати доступ до DOM button подібно до того, якби він використовувався напряму.",
  },
  {
    title: "App Design",
    image: "https://picsum.photos/id/1000/200/140.jpg",
    text:
      "Створюйте інкапсульовані компоненти, які керують власним станом, а з них будуйте складні інтерфейси. Оскільки логіка компонентів написана на JavaScript, замість шаблонів, ви з легкістю можете передавати складні дані у вашому додатку і зберігати стан окремо від DOM. Таким чином, компоненти, що використовують FancyButton можуть отримати реф внутрішнього DOM-вузла button і якщо потрібно, мати доступ до DOM button подібно до того, якби він використовувався напряму.",
  },
  {
    title: "Online Marketing",
    image: "https://picsum.photos/id/999/200/140.jpg",
    text:
      "React спрощує створення інтерактивних інтерфейсів. Вам потрібно лише описати, як різні частини інтерфейсу виглядають у кожному стані вашого додатку і React ефективно оновить та відрендерить лише потрібні компоненти, коли ваші дані зміняться. Декларативні інтерфейси роблять ваш код більш передбачуваним і його набагато легше налагоджувати. Таким чином, компоненти, що використовують FancyButton можуть отримати реф внутрішнього DOM-вузла button і якщо потрібно, мати доступ до DOM button подібно до того, якби він використовувався напряму.",
  },
  {
    title: "Seo Service",
    image: "https://picsum.photos/id/998/200/140.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

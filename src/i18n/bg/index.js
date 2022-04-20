export default {
  isoName: 'bg',
  nativeName: 'български език',
  label: {
    clear: 'Изчисти',
    ok: 'OK',
    cancel: 'Отказ',
    close: 'Затвори',
    set: 'Задай',
    select: 'Избери',
    reset: 'Отначало',
    remove: 'Изтрий',
    update: 'Обнови',
    create: 'Създай',
    search: 'Търси',
    filter: 'Филтър',
    refresh: 'Презареди',
    formCard: {
      h3: 'Имате въпрос',
      subtitle: 'Не се колебайте да се свържете с нас'
    },
    headerCard: {
      h5: 'Набиране на средства за устойчиви проекти',
      h6: 'За да създадем заедно една по-добра планета',
      buttonLabel: 'Разгледай проектите'
    },
    aboutCard: {
      aboutLabel: 'Кои сме ние',
      aboutText: 'Ние сме ГрийнФъндс, екип от трима студенти от Американския университет в България (АУБ), обединени от желанието си да проправим път към една по-зелена България.',
      aim: 'Защо го правим',
      aim_subtext: 'Последиците от глобалното затопляне са необратими, а сегашните потребителски навици вредят все повече на планетата ни. България, редом с други държави в Югоизточна Европа, закъснява с изпълнението на целите си по отношение на климатичните промени, устойчивите градове и чистотата на водите според множество доклади на ООН. Ние целим да променим тази реалност, ускорявайки постигането на едно по-зелено бъдеще чрез предоставянето на възможности за финансиране на устойчиви проекти.',
      vision: 'Ще създадем платформа, в която всеки може да допринесе за устойчивото развитие на България.',
      team: 'Нашият Екип'
    },
    projectCard: {
      location: 'Локация',
      type: 'Тип',
      availableSince: 'Наличен от',
      website: 'Уебсайт'
    },
    projectPanels: {
      about: 'За',
      goals: 'Цели',
      business_model: 'Бизнес модел',
      history: 'История',
      description: 'Описание',
      team: 'Екип',
      certifications: 'Сертификация'
    },
    projectListCard: {
      location: 'Локация',
      type: 'Тип',
      availableSince: 'Наличен от'
    },
    contactForm: {
      buttonLabel: 'Изпрати',
      names: 'Вашите имена',
      email: 'Имейл',
      message: 'Съобщение'
    },
    footer: {
      copyright: 'Всички права запазени',
      privacyPolicy: 'Политика на поверителност',
      termsOfUse: 'Условия на ползване'
    },
    navLink: {
      home: 'Начало',
      projects: 'Проекти',
      contact: 'Контакти',
      about: 'За нас',
      signUp: 'Регистрация',
      profile: 'Потребителски профил'
    },
    signUpForm: {
      h5: 'Вход в',
      email: 'Имейл',
      password: 'Парола',
      logInButton: 'Влез',
      signUpButton: 'Регистрирай се',
      toSignUp: 'Обратно към страницата за регистрация',
      confirmPassword: 'Повтори парола',
      registration: 'Регистрация',
      name: 'Име',
      lastName: 'Фамилия',
      toLogIn: 'Към страницата за вход'
    },
    errorPage: {
      buttonLabel: 'Обратно към началната страница'
    },
    homePage: {
      activeProjects: 'Активни проекти'
    },
    profile: {
      logOut: 'Изход'
    },
    marketplace: {
      availableProjects: 'Налични проекти'
    },
    teamListCard: {
      learnMore: 'Научете повече'
    },
    notification: {
      successMessage: 'Съобщението ви беше изпратено успешно',
      failureMessage: 'Възникна грешка при изпращането на съобщението',
      wrongCredentials: 'Грешен имейл или парола',
      alreadyRegistered: 'Потребител с този имейл вече е регистриран',
      failureCountryFlag: 'Възникна грешка при откриването на държавното знаме'
    }
  },
  error: {
    enterNames: 'Моля, въведете вашите имена',
    enterMessage: 'Съобщението трябва да се състои от поне 6 символа',
    enterFirstName: 'Моля, попълнете полето Име',
    enterLastName: 'Моля, попълнете полето Фамилия',
    invalidEmail: 'Моля, въведете валиден имейл',
    invalidPassword: 'Паролата трябва да се състои от поне 6 символа',
    invalidConfirmPassword: 'Паролите трябва да съвпадат',
    error404: 'Страницата не е намерена...'
  },
  date: {
    days: 'Неделя_Понеделник_Вторник_Сряда_Четвъртък_Петък_Събота'.split('_'),
    daysShort: 'Нд_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    months: 'Януари_Февруари_Март_Април_Май_Юни_Юли_Август_Септември_Октомври_Ноември_Декември'.split('_'),
    monthsShort: 'Яну_Фев_Мар_Апр_Май_Юни_Юли_Авг_Сеп_Окт_Ное_Дек'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true,
    pluralDay: 'дни'
  },
  table: {
    noData: 'Няма данни',
    noResults: 'Нищо не е намерено',
    loading: 'Зареждане...',
    selectedRecords: rows => (
      rows > 1
        ? rows + ' избрани реда.'
        : (rows === 0 ? 'Няма' : '1') + ' избрани редове.'
    ),
    recordsPerPage: 'Редове на страница:',
    allRows: 'Всички',
    pagination: (start, end, total) => start + '-' + end + ' от ' + total,
    columns: 'Колони'
  },
  editor: {
    url: 'URL',
    bold: 'Удебелен',
    italic: 'Курсив',
    strikethrough: 'Задраскан',
    underline: 'Подчертан',
    unorderedList: 'Неподреден списък',
    orderedList: 'Номериран списък',
    subscript: 'Долен индекс',
    superscript: 'Горен индекс',
    hyperlink: 'Хипер-линк',
    toggleFullscreen: 'На цял екран',
    quote: 'Цитат',
    left: 'Ляво подравняване',
    center: 'Центриране',
    right: 'Дясно подравняване',
    justify: 'Подравняване по ширина',
    print: 'Отпечатване',
    outdent: 'Намали отстъпа',
    indent: 'Увеличи отстъпа',
    removeFormat: 'Без форматиране',
    formatting: 'Форматиране',
    fontSize: 'Размер на шрифта',
    align: 'Подравняване',
    hr: 'Вмъкни хоризонтална линия',
    undo: 'Отмени',
    redo: 'Повтори',
    heading1: 'Заглавие 1',
    heading2: 'Заглавие 2',
    heading3: 'Заглавие 3',
    heading4: 'Заглавие 4',
    heading5: 'Заглавие 5',
    heading6: 'Заглавие 6',
    paragraph: 'Параграф',
    code: 'Програмен код',
    size1: 'Много малък',
    size2: 'Малък',
    size3: 'Нормален',
    size4: 'Среден',
    size5: 'Голям',
    size6: 'Много голям',
    size7: 'Огромен',
    defaultFont: 'Шрифт по подразбиране',
    viewSource: 'Виж HTML кода'
  },
  tree: {
    noNodes: 'Няма повече възли',
    noResults: 'Нищо не е намерено'
  }
}

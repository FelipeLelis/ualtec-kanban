import dateFns from 'date-fns/locale/ru';

export default {
  dateFns,

  format: {
    date: 'P',
    time: 'HH:mm',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd MMM',
    longDateTime: "d MMMM 'в' p",
  },

  translation: {
    common: {
      account: 'Учетная запись',
      actions: 'Действия',
      addAttachment: 'Добавление вложения',
      addComment: 'Добавление комментария',
      addMember: 'Добавление участника',
      addUser: 'Добавление пользователя',
      administrator: 'Администратор',
      all: 'Все',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Все изменения сохранятся автоматически,<br />как только подключение восстановится',
      areYouSureYouWantToDeleteThisAttachment: 'Вы уверены, что хотите удалить это вложение?',
      areYouSureYouWantToDeleteThisBoard: 'Вы уверены, что хотите удалить эту доску?',
      areYouSureYouWantToDeleteThisCard: 'Вы уверены, что хотите удалить эту карточку?',
      areYouSureYouWantToDeleteThisComment: 'Вы уверены, что хотите удалить этот комментарий?',
      areYouSureYouWantToDeleteThisLabel: 'Вы уверены, что хотите удалить эту метку?',
      areYouSureYouWantToDeleteThisList: 'Вы уверены, что хотите удалить этот список?',
      areYouSureYouWantToDeleteThisProject: 'Вы уверены, что хотите удалить этот проект?',
      areYouSureYouWantToDeleteThisTask: 'Вы уверены, что хотите удалить эту задачу?',
      areYouSureYouWantToDeleteThisUser: 'Вы уверены, что хотите удалить этого пользователя?',
      areYouSureYouWantToRemoveThisMemberFromProject:
        'Вы уверены, что хотите удалить этого участника из проекта?',
      attachment: 'Вложение',
      attachments: 'Вложения',
      authentication: 'Аутентификация',
      board: 'Доска',
      boardNotFound: 'Доска не найдена',
      cardActions: 'Действия с карточкой',
      cardNotFound: 'Карточка не найдена',
      cardOrActionAreDeleted: 'Карточка или действие удалены',
      color: 'Цвет',
      connectionRestored: 'Соединение восстановлено',
      createBoard: 'Создание доски',
      createLabel: 'Создание метки',
      createNewOneOrSelectExistingOne: 'Создайте новую или выберите<br />уже существующую',
      createProject: 'Создание проекта',
      createTextFile: 'Создание текстового файла',
      currentPassword: 'Текущий пароль',
      date: 'Дата',
      dueDate: 'Срок',
      deleteAttachment: 'Удаление вложения',
      deleteBoard: 'Удаление доски',
      deleteCard: 'Удаление карточки',
      deleteComment: 'Удаление комментария',
      deleteLabel: 'Удаление метки',
      deleteList: 'Удаление списка',
      deleteProject: 'Удаление проекта',
      deleteTask: 'Удаление задачи',
      deleteUser: 'Удаление пользователя',
      description: 'Описание',
      dropFileToUpload: 'Перетяните файл, чтобы загрузить',
      editAttachment: 'Изменение вложения',
      editAvatar: 'Изменение аватара',
      editBoard: 'Изменение доски',
      editBackground: 'Изменение фона',
      editDueDate: 'Изменение срока',
      editEmail: 'Изменение e-mail',
      editLabel: 'Изменения метки',
      editPassword: 'Изменение пароля',
      editTimer: 'Изменение таймера',
      editTitle: 'Изменение названия',
      editUsername: 'Изменение имени пользователя',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail уже занят',
      enterCardTitle: 'Введите заголовок для этой карточки...',
      enterDescription: 'Введите описание...',
      enterFilename: 'Введите название файла',
      enterListTitle: 'Введите заголовок списка...',
      enterProjectTitle: 'Введите название проекта',
      enterTaskDescription: 'Введите описание задачи...',
      filterByLabels: 'Фильтр по меткам',
      filterByMembers: 'Фильтр по участникам',
      fromComputer: 'С компьютера',
      hours: 'Часы',
      invalidCurrentPassword: 'Неверный текущий пароль',
      labels: 'Метки',
      list: 'Список',
      listActions: 'Действия со списком',
      members: 'Участники',
      minutes: 'Минуты',
      moveCard: 'Перемещение карточки',
      name: 'Имя',
      newEmail: 'Новый e-mail',
      newPassword: 'Новый пароль',
      newUsername: 'Новое имя пользователя',
      noConnectionToServer: 'Нет соединения с сервером',
      noBoards: 'Досок нет',
      noLists: 'Списков нет',
      noProjects: 'Проектов нет',
      notifications: 'Уведомления',
      noUnreadNotifications: 'Уведомлений нет',
      openBoard: 'Откройте доску',
      optional_inline: 'необязательно',
      organization: 'Организация',
      phone: 'Телефон',
      preferences: 'Предпочтения',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Совет: нажмите Ctrl-V (Cmd-V на Mac), чтобы добавить вложение из буфера обмена.',
      project: 'Проект',
      projectActions: 'Действия с проектом',
      projectNotFound: 'Проект не найден',
      removeMember: 'Удаление участника',
      seconds: 'Секунды',
      selectBoard: 'Выберите доску',
      selectList: 'Выберите список',
      selectProject: 'Выберите проект',
      settings: 'Настройки',
      subscribeToMyOwnCardsByDefault: 'По умолчанию подписаться на мои собственные карточки',
      taskActions: 'Действия с задачей',
      tasks: 'Задачи',
      time: 'Время',
      timer: 'Таймер',
      title: 'Название',
      userActions_title: 'Действия с пользователем',
      userAddedThisCardToList: '<0>{{user}}</0><1> добавил(а) эту карточку в {{list}}</1>',
      userLeftNewCommentToCard: '{{user}} оставил(а) комментарий «{{comment}}» к <2>{{card}}</2>',
      userMovedCardFromListToList:
        '{{user}} переместил(а) <2>{{card}}</2> из {{fromList}} в {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> переместил(а) эту карточку из {{fromList}} в {{toList}}</1>',
      username: 'Имя пользователя',
      usernameAlreadyInUse: 'Имя пользователя уже занято',
      users: 'Пользователи',
      writeComment: 'Напишите комментарий...',
    },

    action: {
      addAnotherCard: 'Добавить еще одну карточку',
      addAnotherList: 'Добавить еще один список',
      addAnotherTask: 'Добавить еще одну задачу',
      addCard: 'Добавить карточку',
      addComment: 'Добавить комментарий',
      addList: 'Добавить список',
      addMoreDetailedDescription: 'Добавить более подробное описание',
      addTask: 'Добавить задачу',
      addToCard: 'Добавить на карточку',
      addUser: 'Добавить пользователя',
      createBoard: 'Создать доску',
      createFile: 'Создать файл',
      createLabel: 'Создать метку',
      createNewLabel: 'Создать новую метку',
      createProject: 'Создать проект',
      delete: 'Удалить',
      deleteAttachment: 'Удалить вложение',
      deleteAvatar: 'Удалить аватар',
      deleteBoard: 'Удалить доску',
      deleteCard: 'Удалить карточку',
      deleteComment: 'Удалить комментарий',
      deleteImage: 'Удалить изображение',
      deleteLabel: 'Удалить метку',
      deleteList: 'Удалить список',
      deleteProject: 'Удалить проект',
      deleteTask: 'Удалить задачу',
      deleteUser: 'Удалить пользователя',
      edit: 'Изменить',
      editBackground: 'Изменить фон',
      editDueDate: 'Изменить срок',
      editDescription: 'Изменить описание',
      editEmail: 'Изменить e-mail',
      editPassword: 'Изменить пароль',
      editTask: 'Изменить задачу',
      editTimer: 'Изменить таймер',
      editTitle: 'Изменить название',
      editUsername_title: 'Изменить имя пользователя',
      logOut: 'Выйти',
      makeCover: 'Сделать обложкой',
      move: 'Переместить',
      moveCard: 'Переместить карточку',
      remove: 'Убрать',
      removeBackground: 'Убрать фон',
      removeCover: 'Убрать обложку',
      removeFromProject: 'Удалить из проекта',
      removeMember: 'Удалить участника',
      save: 'Сохранить',
      showAllAttachments: 'Показать все вложения ({{hidden}} скрыто)',
      showFewerAttachments: 'Показать меньше вложений',
      start: 'Начать',
      stop: 'Остановить',
      subscribe: 'Подписаться',
      unsubscribe: 'Отписаться',
      uploadNewAvatar: 'Загрузить новый аватар',
      uploadNewImage: 'Загрузить новое изображение',
    },
  },
};

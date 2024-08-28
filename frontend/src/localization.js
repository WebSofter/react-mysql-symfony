import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    sr: {
        base: {
            profile: {
                name: 'Имя',
                surname: 'Фамилия',
                email: 'E-Mail',
                username: 'Логин',
                password: 'Пароль',
                role: 'Роль',
                userType: 'Тип'
            },
            table: {
                actions: 'Действия',
                edit: 'Изменить',
                delete: 'Удалить'
            },
            filter: {
                sort: {
                    sortType: 'Метод сортировки',
                    datetimeDesc: 'От нового к старому',
                    datetimeAsc: 'От старого к новому',
                }
            },
            role: {
                user: 'Пользователь',
                moderator: 'Модератор',
                admin: 'Админ'
            },
            userType: {
                individual: 'Individual',
                company: 'Company',
            }
        },
        forms: {
            common: {
                save: 'Сохранить',
                login: 'Вход',
                logout: 'Выход',
                register: 'Регистрация',
                thisFieldIsRequired: 'Это поле обязательно',
                emailFormatError: 'Ошибка формата Email',
                reactApp: 'React app'
            },
            editUser: {
                title: 'Изменить юзера',
            },
            addUser: {
                title: 'Добавить юзера',
            }
        },
        components: {
            FileUpload: {
                upload: 'Загрузить',
                files: 'Файлы',
                dragDrop: 'Перетащите сюда несколько файлов или нажмите, чтобы выбрать',
            },
            yesNoDialog: {
                yes: 'Да',
                no: 'нет',
                confirmDelete: 'Подтвердить удаление',
                confirmDeleteMessage: 'Вы уверены, что хотите удалить это поле?',
            }
        },
        pages: {
            register: {
                registration: 'Регистрация',
                alreadyHaveAccount: 'У вас уже есть аккаунт?'
            },
            login: {
                createNewAccount: 'Создать новую учетную запись',
                wrongUsernameOrPassword: 'Неверное имя пользователя или пароль',
            },
            home: {
                title: 'Главная страница',
                welcome: 'Добро пожаловать'
            },
            boardUser: {
                title: 'Панель пользователя'
            },
            boardModerator: {
                title: 'Панель модерации'
            },
            boardAdmin: {
                title: 'Панель админа'
            },
        }
    }
});

export default strings;

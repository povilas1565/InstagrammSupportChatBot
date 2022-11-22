module.exports = async function() {

 greeting : Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о приложении', 'Информация о приложении')
    ],
     [
        Markup.button.url('Связаться с оператором', 'https://www.supportbot.com/'),
        Markup.button.callback('Наши контакты', 'Наши контакты')
    ],
    [
        Markup.button.callback('Получить бонус', 'Получить бонус')
    ]
])

 bonus_key : Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе')
    ],
    [
        Markup.button.callback('Подать заявку на получения бонуса', 'Подать заявку на получения бонуса')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

    info : Markup.inlineKeyboard([
        [
            Markup.button.callback('Тизер программы', 'Тизер программы'),
        ],
        [
            Markup.button.callback('Назад', 'back_to_main_menu'),
        ]
    ])

 contacts : Markup.inlineKeyboard([
    [
        Markup.button.callback('Vkontakte', 'Vkontakte'),
    ],
    [
        Markup.button.callback('Facebook', 'Facebook')
    ],
    [
        Markup.button.callback('Cсылка на приложение', 'Cсылка на приложение')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 Vkontakte: Markup.inlineKeyboard([
   [
        Markup.button.url("Vkontakte", "https://vk.com/public215826928")
    ],
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])

 Facebook : Markup.inlineKeyboard([
    [
        Markup.button.url("Facebook", "https://www.facebook.com/Pre-recover-111201958394228")
    ],
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])


 program : Markup.inlineKeyboard([
    [
        Markup.button.url("Приложение", "https://www.youtube.com/watch?v=ql9-82oV2JE")
    ],
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])


 bonus : Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе'),
    ],
    [
        Markup.button.callback('Подать заявку на получение бонуса', 'Подать заявку на получение бонуса')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 back_to_main_menu : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 back_to_info : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_info')
    ]
])


 back_to_bonus : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_bonus')
    ]
])

 back_to_contacts : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])

}
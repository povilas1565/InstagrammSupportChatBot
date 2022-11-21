const {session, Markup, Scenes, Instagram} = require('instagram-api-web-node')
const bot = new Instagram("IGQVJYRHR1MElWd092elFpLUVua2pDdmdHcDVVR0t1UV9lMW5QaFk4amx6STdoTXBNZA0dpdjI5aXdWNXZAtSC1IRGhUTGg2dUFFUWtjNE9hcFRqR1NOR1hubE82WTlTa0IxYzBXRk56ZA21LYUl2NnBhbQZDZD")
const Sheets = require("./Sheet.js")
const sheets = new Sheets();

//кнопки
const greeting = Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о приложении', 'Информация о приложении')
    ],
    [
        Markup.button.callback('Связаться с оператором', 'Связаться с оператором'),
        Markup.button.callback('Наши контакты', 'Наши контакты')
    ],
    [
        Markup.button.callback('Получить бонус', 'Получить бонус')
    ]
])

const bonus_key = Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе')
    ],
    [
        Markup.button.callback('Подать заявку на бонус', 'Подать заявку на бонус')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const info = Markup.inlineKeyboard([
    [
        Markup.button.callback('Тизер программы', 'Тизер программы'),
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const request_for_bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Подписаться на рассылку', 'Подписаться на рассылку'),
    ],
    [
        Markup.button.callback('Назад', 'back_to_bonus')
    ]
])

const bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе'),
    ],
    [
        Markup.button.callback('Подать заявку на бонус', 'Подать заявку на бонус')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const back_to_main_menu = Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const back_to_info = Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_info')
    ]
])


const back_to_bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_bonus')
    ]
])
const cancel_bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Отмена', 'Отмена')
    ]
])
const bonus_sex = Markup.inlineKeyboard([
    [
        Markup.button.callback('Отмена', 'Отмена')
    ]
])

function main_menu(ctx) {
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id - 1).catch(err => { })
    ctx.reply("«Здравствуйте! Сегодня вы стали участником сообщества ‘prerecover07’. Мы рады, что вы стали его частью!»", greeting)
}

function info_cicle(ctx) {
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    bot.sendPhoto(ctx.from.id, "AgACAgEAAxkBAAEYtZtjPSBuyd7eBtXEa9_EFVJchffB8wACM6wxG5EzoUWBxXfGxBZ3nAEAAwIAA3kAAyoE").then(() =>
        ctx.reply("Текст", info))
}


function bonus_cicle(ctx) {
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Бонус", bonus_key)
}

function contacts_cicle(ctx) {

    let contacts = Markup.inlineKeyboard([
        [
            Markup.button.url("Vkontakte", "https://game.helpervk.ru/url/?path=public215826928&network=www.instagram.com&id="+ctx.chat.id+"&username="+ctx.from.username),
        ],
        [
            Markup.button.url("Facebook", "https://game.helpervk.ru/url/?path=Pre-recover-111201958394228&network=www.facebook.com&id="+ctx.chat.id+"&username="+ctx.from.username),
        ],
        [
            Markup.button.url("Приложение", "https://www.youtube.com/watch?v=ql9-82oV2JE"),
        ],
        [
            Markup.button.callback('Назад', 'back_to_main_menu'),
        ]
    ])


    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Выберите ту социальную сеть, которая интересна вам", contacts)
}

bot.start(async ctx => {
    sheets._save("Нажали старт", ctx)
    await ctx.reply("Здравствуйте! Я бот - консультант, отвечающий на заранее заготовленные вопросы посетителей нашей компании и формируем информационные запросы и заявки.")
    await ctx.reply("Все заявки с собранными контактными данными отправляются на заранее указанную электронную почту сразу после прошедшего диалога.")
    await ctx.reply("В случае возникновения вопроса - наш консультант может подключиться к беседе посетителя сайта с чат ботов и продолжить диалог.")
    ctx.reply("«Здравствуйте! Сегодня вы стали участником сообщества ‘prerecover07’. Мы рады, что вы стали его частью!»", greeting)
})

bot.action("Тизер программы", ctx => {
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id - 1).catch(err => { })
    ctx.reply("Какой тебе нужен тизер? ", back_to_info)
})

bot.action("Информация о приложении", ctx => {
    info_cicle(ctx)
})

bot.action("Связаться с оператором", ctx => {
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Оператор свяжется с вами", back_to_main_menu)
    bot.sendMessage(749663551, 'Пользователь https://vk.com/' + ctx.chat.id + ' захотел связаться с вами');
})

bot.action("Наши контакты", async ctx => {
    contacts_cicle(ctx)
})

bot.action("Получить бонус", ctx => {
    bonus_cicle(ctx)
})

bot.action("Информация о бонусе", ctx => {
    ctx.v.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Информация", back_to_bonus)
})

bot.action("Подать заявку на бонус", ctx => {
    sheets._search("Заполнили анкету", ctx.from.id).then(function (row) {
        if (row == false) {
            ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
            ctx.reply("Для получения бонуса требуется подписка на рассылку", request_for_bonus)
        } else {
            ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
            ctx.reply("Вы уже заполнили анкету на получение бонуса", back_to_bonus)
        }
    });
})


bot.action("Подписаться на рассылку", ctx => {
    sheets._search("Заполнили анкету", ctx.from.id).then(function (row) {
        if (row == false) {
            sheets._save("Заполнили анкету", ctx)
            ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
            ctx.reply("Заполните анкету: \nВведите имя:", cancel_bonus)

        }
    });
})


bot.on('text', (ctx) => {
    sheets._search("Заполнили анкету", ctx.from.id).then(function (row) {
        if (row != false && ctx.message.text != "Подписаться на рассылку" && ctx.message.text != "Отмена") {
            if (row[1].сity) {
                sheets._update("Заполнили анкету", row[0], "country", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Анкета на бонус успешно заполнена \n", back_to_bonus)
            } else if (row[1].data) {
                sheets._update("Заполнили анкету", row[0], "сity", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите вашу страну:", cancel_bonus)
            } else if (row[1].problem) {
                sheets._update("Заполнили анкету", row[0], "date", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите ваш город:", cancel_bonus)
            } else if (row[1].phone_number_social) {
                sheets._update("Заполнили анкету", row[0], "problem", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите дату, когда возникла проблема:", cancel_bonus)
            } else if (row[1].phone_number) {
                sheets._update("Заполнили анкету", row[0], "phone_number_social", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите вашу проблему:", cancel_bonus)
            } else if (row[1].date_of_birth) {
                sheets._update("Заполнили анкету", row[0], "phone_number", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите ваш номер телефона для связи в социальных сетях:", cancel_bonus)
            } else if (row[1].sex) {
                sheets._update("Заполнили анкету", row[0], "date_of_birth", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите Вашу дату рождения:", cancel_bonus)
            } else if (row[1].id == ctx.from.id) {
                sheets._update("Заполнили анкету", row[0], "name", ctx.message.text)
                ctx.instagram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите Ваш пол :", cancel_bonus)
            }
        }
    });
})

bot.action("Отмена", ctx => {
    sheets._search("Заполнилу анкету", ctx.from.id).then(function (row) {
        if (row != false && typeof row[1].country === 'undefined') {
            sheets._delete("Заполнили анкету", row[0])
            bonus_cicle(ctx)
        }
    });
})


bot.action("back_to_main_menu", ctx => {
    ctx.instagram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    main_menu(ctx)
})

bot.action("back_to_info", ctx => {
    info_cicle(ctx)
})

bot.action("back_to_bonus", ctx => {
    bonus_cicle(ctx)
})

bot.action("back_to_type_of_uslugi", ctx => {
    price(ctx)
})

bot.action("back_to_contacts", ctx => {
    contacts_cicle(ctx)
})


bot.launch()


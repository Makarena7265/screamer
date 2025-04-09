const messagesForm = document.querySelector("form.message-panel")
const messageTemplate = document.querySelector("#message-template")
const messagesContainer = document.querySelector(".messages-container")
const screamer = document.querySelector(".screamer")
const screamerAudio = new Audio("audio/skrimery-657.mp3")
let messageCounter = 0


messagesForm.addEventListener("submit", () => {
  const descriptionWrapper = document.querySelector(".description-wrapper")
  descriptionWrapper.remove()
}, { once: true })


messagesForm.addEventListener("submit", (event) => {
  event.preventDefault()//Отменяет стандартное поведение формы(перезагрузку страницы)
  const inputEl = event.target.querySelector("input")//Это форма, которая сработала(event.target). Инпут элемент это поле для ввода внутри формы
  const messageText = inputEl.value//value - значение, тот текст, который введён в инпут
  inputEl.value = ""//Очищаем его, даём пустую строку

  if (messageText.trim() === "") return;//Проверяем, что сообщение не пустое. Если пустое, то прерываем выполнение функции

  sendMessage({ text: messageText, sender: "user" })
  if (messageCounter === 3) {

  }
  sendBotAnswer({
    userMessageList: ["привет", "ghbdtn", "hello", "hi", "пр", "дарова", "здравствуй", "хай", "салам", "алоха", "вечер в хату", "игого"],
    botAnswer: getRandom(["Привет", "👋", "🫡", "🙋", "🙋‍♀️", "🙂‍↕️", "🙋‍♂️", "Ghbdtn", "Hello", "Hi", "Дарова", "Здравствуй", "Хай", "Салам", "Алоха", "Вечер в хату", "Игого"])
  })
  sendBotAnswer({
    userMessageList: ["пошел ты", "иди ты", "иди лесом", "иди в баню", "пошел нафиг"],
    botAnswer: getRandom(["Сам", "Пошел ты", "Иди ты", "Иди лесом", "Иди в баню", "Пошел нафиг"])
  })
  sendBotAnswer({
    userMessageList: ["как дела", "че как", "как сам", "как жизнь"],
    botAnswer: "Нормально впринципе. А ты как?"
  })
  sendBotAnswer({
    userMessageList: ["нормально", "пойдет"],
    botAnswer: "Что делаешь?"
  })
  sendBotAnswer({
    userMessageList: ["с тобой переписываюсь", "уроки"],
    botAnswer: "Понятно. А что-то кроме этого? Может быть спорт какой-то?"
  })
  sendBotAnswer({
    userMessageList: ["да, я занимаюсь плаванием", "да, я занимаюсь футболом", "да, я занимаюсь баскетболом", "да, я занимаюсь боксом"],
    botAnswer: "Ого! Ничего себе ты выбрал! А достижения какие-то есть?"
  })
  sendBotAnswer({
    userMessageList: ["недавно стал мастером спорта", "недавно стал кандидатом в мастера спорта"],
    botAnswer: "... Я бы не хотел с тобой соревноваться"
  })
  sendBotAnswer({
    userMessageList: ["бсп"],
    botAnswer: `<img src="/image/BSP1.jpg" alt="">`
  })
  sendBotAnswer({
    userMessageList: ["зил 133 гя"],
    botAnswer: `<img src="/image/Автокран-ЗИЛ-133ГЯ.jpg" alt="">`
  })
  sendBotAnswer({
    userMessageList: ["почему"],
    botAnswer: `<img src="/image/photo_5301276244123449792_x.jpg" alt="">`
  })

  function sendBotAnswer({ userMessageList, botAnswer }) {
    if (userMessageList.some(word => messageText.toLowerCase().includes(word))) {
      sendMessage({
        text: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;0.2"/></circle><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4"><animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" values="1;0.2"/></circle><circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.3"><animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s" values="1;0.2"/></circle></svg>`,
        sender: "bot",
        showTime: false
      })

      setTimeout(() => {
        messagesContainer.firstElementChild.remove()
        sendMessage({ text: botAnswer, sender: "bot" })
        messageCounter++
      }, 2000);
    }
  }
})


function sendMessage({ text, sender, showTime = true }) {
  const messageFragment = messageTemplate.content.cloneNode(true)//Для каждого сообщения клонируем template(шаблон).
  const messageRootEl = messageFragment.querySelector(".message")//В этом шаблоне ищем рут
  const messageTextEl = messageRootEl.querySelector(".message-text")//В руте ищем элемент самого текста
  const messageTimeEl = messageRootEl.querySelector("time")//В руте ищем элемент времени\

  if (showTime) {
    const dateTime = new Date().toISOString()
    const dateTimeFormatted = new Intl.DateTimeFormat('ru', {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date())
    messageTimeEl.datetime = dateTime
    messageTimeEl.textContent = dateTimeFormatted
  }

  messageRootEl.dataset.sender = sender
  messageTextEl.innerHTML = text//Вставка сообщения

  messagesContainer.prepend(messageFragment)
}


window.onload = () => {
  setTimeout(() => {
    screamer.classList.add("active")
    screamerAudio.play()
  }, getRandomInt(90000, 120000))
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandom(array) { return array[Math.floor((Math.random() * array.length))]; }




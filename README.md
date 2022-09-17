# Messenger

## Замечания для ревью

- Рендр компонентов не оптимален
- Запросы на бэк не оптимальны (без кэша, без стора)
- типы для апи - названия плохие (надо было давать по сущностям)
- страница с чатами - слишком большая, по хорошему надо разнести логику по дочерним компонентам
- нет удаления/архивирования чата
- перемудрил с подписками на вебсокеты (надо было больше уделить времени)

## Нарисован с щепоткой магии

[Вот что получилось - дизайн в figma](https://www.figma.com/proto/mUP7cfOp31SqrgHVCl4mOi/Untitled?node-id=7%3A321&scaling=min-zoom)

## Помочь проекту можно, но не обязательно

Установка для разработки

```
git clone https://github.com/aengorg/mf.messenger.praktikum.yandex.git

cd mf.messenger.praktikum.yandex/

npm install
```

Запуск для разработки

```
npm run dev
```

```
open http://localhost:9000
```

Публикация на Heroku

```
heroku login
heroku container:login
heroku container:push web --app obscure-journey-22389
heroku container:release web --app obscure-journey-22389
```

## Сделано

Никита Строганов

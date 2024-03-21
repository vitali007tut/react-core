![workflow](https://github.com/vitali007tut/react-core/actions/workflows/main.yml/badge.svg)

# Проект React + TypeScript + Vite + Photos

## Что выполнено:

-   API: [Unsplash](https://unsplash.com/documentation)
-   Deploy: [link](https://vitali007tut.github.io/react-core/)

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

-   Реализованы **Требования к функциональности**

-   Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**

**React**

-   **Функциональные компоненты c хуками** в приоритете над классовыми
-   Есть разделение на **[глупые](https://github.com/vitali007tut/react-core/blob/main/src/components/Logo/Logo.tsx)** и **[умные](https://github.com/vitali007tut/react-core/blob/main/src/components/Header/Header.tsx)** компоненты
-   Есть [**рендеринг списков**](https://github.com/vitali007tut/react-core/blob/main/src/pages/HistoryPage/HistoryPage.tsx)
-   Реализована хотя бы одна [**форма**](https://github.com/vitali007tut/react-core/blob/main/src/pages/LoginPage/LoginPage.tsx)
- Есть применение [**Контекст API**](https://github.com/vitali007tut/react-core/blob/develop/src/hooks/themeContext.tsx)
- Есть применение [**предохранителя**](https://github.com/vitali007tut/react-core/blob/main/src/App.tsx)
- Есть хотя бы один [**кастомный хук**](https://github.com/vitali007tut/react-core/blob/develop/src/hooks/useTheme.ts)
- Хотя бы несколько компонентов используют **PropTypes** [**тут**](https://github.com/vitali007tut/react-core/blob/main/src/components/HistoryCard/HistoryCard.tsx) и [**тут**](https://github.com/vitali007tut/react-core/blob/main/src/components/Card/MediaCard.tsx)
- Поиск не должен триггерить много запросов к серверу [**debounce**](https://github.com/vitali007tut/react-core/blob/main/src/hooks/debounce.ts)

**Redux**

### **2 уровень (необязательный)**

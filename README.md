![workflow](https://github.com/vitali007tut/react-core/actions/workflows/main.yml/badge.svg)

# Проект React + TypeScript + Vite + Photos

-   Photo API: [Unsplash](https://unsplash.com/documentation)
-   Deploy: [link netlify](https://deploy-preview-13--amazing-monstera-35e18a.netlify.app)

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

-   Реализованы **Требования к функциональности**

-   Для хранения учетных записей пользователей, их Избранного и Истории поиска, используется **LocalStorage**

**React**

-   **Функциональные компоненты c хуками** в приоритете над классовыми
-   Есть разделение на **[глупые](https://github.com/vitali007tut/react-core/blob/main/src/components/Logo/Logo.tsx)** и **[умные](https://github.com/vitali007tut/react-core/blob/main/src/components/Header/Header.tsx)** компоненты
-   Есть [**рендеринг списков**](https://github.com/vitali007tut/react-core/blob/main/src/pages/HistoryPage/HistoryPage.tsx)
-   Реализована хотя бы одна [**форма**](https://github.com/vitali007tut/react-core/blob/main/src/pages/LoginPage/LoginPage.tsx)
-   Есть применение [**Контекст API**](https://github.com/vitali007tut/react-core/blob/main/src/hooks/themeContext.tsx)
-   Есть применение [**предохранителя**](https://github.com/vitali007tut/react-core/blob/main/src/App.tsx)
-   Есть хотя бы один [**кастомный хук**](https://github.com/vitali007tut/react-core/blob/main/src/hooks/useTheme.ts)
-   Хотя бы несколько компонентов используют **PropTypes** [**тут**](https://github.com/vitali007tut/react-core/blob/main/src/components/HistoryCard/HistoryCard.tsx) и [**тут**](https://github.com/vitali007tut/react-core/blob/main/src/components/Card/MediaCard.tsx)
-   Поиск не должен триггерить много запросов к серверу [**debounce**](https://github.com/vitali007tut/react-core/blob/main/src/hooks/debounce.ts)
-   Есть применение [**lazy + Suspense**](https://github.com/vitali007tut/react-core/blob/main/src/App.tsx)

**Redux**

-   Используем [**Modern Redux with Redux Toolkit**](https://github.com/vitali007tut/react-core/blob/main/src/store/store.ts)
-   Используем [**слайсы**](https://github.com/vitali007tut/react-core/blob/main/src/store/userAuthSlice.ts)
-   Есть хотя бы одна **кастомная мидлвара** или [**createListenerMiddleware**](https://github.com/vitali007tut/react-core/blob/main/src/store/middleware.tsx)
-   Используется [**RTK Query**](https://github.com/vitali007tut/react-core/blob/main/src/store/unsplash/unsplach.api.ts)
-   Используется [**Transforming Responses**](https://github.com/vitali007tut/react-core/blob/main/src/store/unsplash/unsplach.api.ts)

### **2 уровень (необязательный)**

-   Использование [**TypeScript**](https://github.com/vitali007tut/react-core/blob/main/tsconfig.json)
-   Настроен [**CI/CD**](https://github.com/vitali007tut/react-core/blob/main/.github/workflows/main.yml)

### _Дополнительно_

-   Проект собран при помощи [Vite](https://vitejs.dev/)
-   Использовалась дополнительные библиотеки [react-hot-toast](https://react-hot-toast.com/) и [react-error-boundary](https://www.npmjs.com/package/react-error-boundary)
-   Использовалась UI kit библиотека [MUI](https://mui.com/)

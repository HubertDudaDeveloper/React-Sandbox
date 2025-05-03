# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Konwencje:

- BEM
-

Kolejność w komponencie:

1️⃣ Typy (jeśli są potrzebne → interface/typ propsów)

2️⃣ Hooki z biblioteki (useState, useSelector, useContext itd)

3️⃣ Własne Hooki (useTheme, useAppSelector itd)

4️⃣ useMemo / useCallback (obliczenia / memoizacje / callbacki)

5️⃣ useEffect / useLayoutEffect (efekty uboczne → side effects)

6️⃣ Metody lokalne (handleX → wszystkie eventy i logika)

7️⃣ JSX → return (UI)

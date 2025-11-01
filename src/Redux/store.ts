import { configureStore, type Middleware } from "@reduxjs/toolkit";
import sliceUsuarios from "./userSlice";
import counterSlice from "./counterSlice";
import productoReducer from "./productSlice"; // ✅ import the reducer (default export)

const modStoreMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const inputAction = (action as { type: string }).type;

  if (inputAction.startsWith("counter")) {
    console.log("llamando reducer de counterSlice");
  }

  if (inputAction.startsWith("productos")) {
    const state = store.getState();
    localStorage.setItem("carrito", JSON.stringify(state.productos));
  }

  if (inputAction.startsWith("users")) {
    const state = store.getState();
    localStorage.setItem("usuarios", JSON.stringify(state.users.listaUsuarios));
  }

  return result;
};

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: sliceUsuarios,
    productos: productoReducer, // ✅ this is the correct property name
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(modStoreMiddleware),
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// Los archivos store.ts, Producto.tsx y Formulario.tsx han generado tantos errores de lint que ya no se parecen en nada a su versión original
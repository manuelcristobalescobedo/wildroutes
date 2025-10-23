import { configureStore, type Middleware } from "@reduxjs/toolkit";
import sliceProducto from "./productSlice";
import sliceUsuarios from "./userSlice";

const modStoreMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);

    const inputAction = (action as { type: string }).type;

    if (inputAction.startsWith('counter')) {
        console.log('llamando reducer de counterSlice');
    }
    if (inputAction.startsWith('products')) {
        const state = store.getState();
        localStorage.setItem("carrito", JSON.stringify(state.products));
    }
    if (inputAction.startsWith('users')) {
        const state = store.getState();
        localStorage.setItem("usuarios", JSON.stringify(state.users.listaUsuarios));
    }

    return result;
};

const store = configureStore({
    reducer: {
        products: sliceProducto,
        users: sliceUsuarios,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(modStoreMiddleware)
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };

// Los archivos store.ts, Producto.tsx y Formulario.tsx han generado tantos errores de lint que ya no se parecen en nada a su versión original
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Usuario } from "../Tipos/Usuario";

type UserState = {
    listaUsuarios: Usuario[];
    usuarioActivo: Usuario | null;
};

const initialState: UserState = {
  listaUsuarios: JSON.parse(localStorage.getItem("usuarios") || "[]"),
  usuarioActivo: JSON.parse(localStorage.getItem("usuarioActivo") || "null"),
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registrarUsuario(state, action: PayloadAction<Usuario>) {
      state.listaUsuarios.push(action.payload);
    },
    iniciarSesion(
      state,
      action: PayloadAction<{ correo: string; contrasena: string }>
    ) {
      const { correo, contrasena } = action.payload;
      const usuario = state.listaUsuarios.find(
        (u) => u.correo === correo && u.contrasena === contrasena
      );
      if (usuario) {
        state.usuarioActivo = usuario;
        localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      } else {
        alert("Correo o contraseña incorrectos");
      }
    },
    cerrarSesion(state) {
      state.usuarioActivo = null;
      localStorage.removeItem("usuarioActivo");
    },
  },
});

export const { registrarUsuario, iniciarSesion, cerrarSesion } = userSlice.actions;
export default userSlice.reducer;
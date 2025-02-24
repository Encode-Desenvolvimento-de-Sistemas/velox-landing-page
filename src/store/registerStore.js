import axios from "@axios";
import { create } from "zustand";

const initialState = {
    name: "",
    document: "",
    phone: "",
    email: "",
    role: "customer",
    password: "",
    password_confirmation: "",
    credit_card: {
      name: "",
      number: "",
      expiration: "",
      cvv: "",
    },
    abilities: [
      {
        action: "read",
        subject: "General",
      },
      {
        action: "read",
        subject: "UserProfile",
      },
      {
        action: "read",
        subject: "Logout",
      },
      {
        action: "read",
        subject: "Auth",
      },
      {
        action: "read",
        subject: "ClientDashboard",
      },
    ],
    plan_id: "",
}

const useRegisterStore = create((set, get) => ({
  ...initialState,
  setUser: (newUser) => set(() => ({ user: newUser })),
  createUser: async () => {
    try {
      const response = await axios.post('users', get().user);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
  resetUser: () => {
    set(initialState)
  },
}));

export default useRegisterStore;

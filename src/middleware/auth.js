import { useUserStore } from '@/store/user'; // Importa useUserStore
import axiosClient from '@/plugins/axios';

export default async function auth({ next }) {
  const userStore = useUserStore(); // Crea una instancia de userStore

  if (userStore.token) {
    if (!userStore.favoriteProjects.projects || userStore.favoriteProjects.projects.length === 0) {
      await userStore.getFavoriteProjects();
    }
    return next();
  }
  return next({ name: "Login" });
}

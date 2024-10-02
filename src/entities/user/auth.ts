interface User {
    accessToken: string;
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    refreshToken: string;
    username: string;
  }
  
  export const getUserFromLocalStorage = (): User | null => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        return parsedUser;
      } catch (error) {
        console.error('Ошибка парсинга данных пользователя:', error);
        return null;
      }
    }
    return null;
  };
  
  
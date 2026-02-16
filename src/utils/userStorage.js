// Утилиты для работы с пользователями в JSON файле
// В реальном приложении это был бы API запрос, но для демо используем localStorage как промежуточное хранилище

const USERS_STORAGE_KEY = 'shop_users';
const CURRENT_USER_KEY = 'shop_current_user';

// Загрузить пользователей из localStorage (в реальном приложении - из API)
export const loadUsers = () => {
  try {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Ошибка загрузки пользователей:', error);
    return [];
  }
};

// Сохранить пользователей в localStorage (в реальном приложении - через API)
export const saveUsers = (users) => {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    // В браузере нельзя напрямую записывать в файлы, поэтому используем localStorage
    // Для демонстрации структуры данных создан файл public/users.json
    // В реальном приложении данные сохранялись бы через API на сервере
    console.log('Пользователи сохранены:', users);
    return true;
  } catch (error) {
    console.error('Ошибка сохранения пользователей:', error);
    return false;
  }
};

// Экспортировать пользователей в JSON (для демонстрации)
export const exportUsersToJSON = () => {
  const users = loadUsers();
  const jsonString = JSON.stringify(users, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'users.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Добавить нового пользователя
export const addUser = (userData) => {
  const users = loadUsers();
  
  // Проверка на существующего пользователя
  if (users.find(u => u.email === userData.email)) {
    return { success: false, error: 'Пользователь с таким email уже существует' };
  }

  const newUser = {
    id: Date.now().toString(),
    ...userData,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);
  
  return { success: true, user: newUser };
};

// Найти пользователя по email и паролю
export const findUser = (email, password) => {
  const users = loadUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Сохраняем текущего пользователя
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
      id: user.id,
      email: user.email,
      name: user.name
    }));
    return { success: true, user };
  }
  
  return { success: false, error: 'Неверный email или пароль' };
};

// Получить текущего пользователя
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

// Выйти из системы
export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// Обновить данные пользователя
export const updateUser = (userId, userData) => {
  const users = loadUsers();
  const index = users.findIndex(u => u.id === userId);
  
  if (index === -1) {
    return { success: false, error: 'Пользователь не найден' };
  }

  users[index] = { ...users[index], ...userData };
  saveUsers(users);
  
  return { success: true, user: users[index] };
};


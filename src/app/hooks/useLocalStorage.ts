export enum StorageKeys {
  onboardingComplete = 'onboardingComplete',
}

export const useLocalStorage = () => {
  const get = (key: StorageKeys) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const set = (key: StorageKeys, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    get,
    set,
  };
};

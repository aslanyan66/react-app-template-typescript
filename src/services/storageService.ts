class StorageService<T> {
  private storage: Storage;

  constructor(storageType: 'localStorage' | 'sessionStorage' = 'localStorage') {
    this.storage = window[storageType];
  }

  setItem(key: string, value: T): void {
    const serializedValue = JSON.stringify(value);
    this.storage.setItem(key, serializedValue);
  }

  getItem<T>(key: string): T | null {
    const serializedValue = this.storage.getItem(key);
    if (serializedValue) {
      return JSON.parse(serializedValue);
    }
    return null;
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

const LocalStorageService = new StorageService();

export { LocalStorageService };
// Одиночка (Singleton) — це патерн програмування, який забезпечує,
// що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
  // Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
  static #instance = null;
  // Приватне статичне orders поле для збереження списку замовлень початкове значення []

  static #orders = [];
  /**
   * Статичний метод create використовується для створення єдиного екземпляра класу
   */

  static create() {
    if (!this.#instance) {
      this.#instance = new OrderTracker();
    } else {
      return this.#instance;
    }
  }
  // Перевіряємо, чи є вже створений екземпляр класу
  // Якщо немає, створюємо новий екземпляр
  // Інакше повертаємо єдиний екземпляр класу
  /**
   * Статичний метод add використовується для додавання замовлення до списку
   * Отримує item та додає його до масиву замовлень
   */
  static add(item) {
    this.#orders.push(item);
  }
  /**
   * Статичний метод get використовується для отримання списку замовлень
   */
  static get() {
    return this.#orders;
  }
}
console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо єдиний екземпляр класу OrderTracker
const tracker = OrderTracker.create();

// Додаємо замовлення до списку
OrderTracker.add("Телефон");
OrderTracker.add("Ноутбук");

// Отримуємо список замовлень
const orders = OrderTracker.get();

// Виводимо список замовлень в консоль
console.log(orders);

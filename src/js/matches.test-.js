const sum = (a, b) => a + b;

// "самая" элементарная проерка
test('Ф-ия сложения проверяем 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// проверка объекта (каждое свойство проверяется отдельно)
test('Проверяем равенство объекта data1 и data2', () => {
    const data1 = { один: 1 };
    const data2 = { один: 1, два: 2 };
    data1['два'] = 2;
    expect(data1).toEqual(data2);
});

// проверка на регулярку и проверка на отрицание
test('в команде нет места Я', () => {
    expect('команда').not.toMatch(/Я/);
});

// проерка на содержание элемента в массиве
test('Проверяем есть ли в магазине чай', () => {
    expect(['baget', 'fish', 'meat', 'tomato', 'tea']).toContain('tea');
});

//
function compileAndroidCode() {
    throw new ConfigError('используется неверный JDK');
}

test('компиляция android проходит как ожидается', () => {
    // expect(compileAndroidCode).toThrow();
    // expect(compileAndroidCode).toThrow(ConfigError);

    // Также можно использовать тоже самое сообщение об ошибке или
    // или регулярное выражение
    // expect(compileAndroidCode).toThrow('используется неверный JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});

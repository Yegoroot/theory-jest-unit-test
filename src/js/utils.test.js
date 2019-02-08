import { sum } from './utils';

/**
 * expect and toBe - для проверки идентичности данных
 *
 */
test('Ф-ия сложения проверяем 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('Проверяем равенство объекта data1 и data2', () => {
    const data1 = { один: 1 };
    const data2 = { один: 1, два: 2 };
    data1['два'] = 2;
    expect(data1).toEqual(data2);
});

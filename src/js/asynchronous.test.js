import { fetch } from 'fetch';
const API =
    'https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22';

// test('the data is peanut butter', () => {
//     const data = fetch(API);
//     console.log(data);
//     return expect(data).resolves;
// });

fetch(API).then(data => console.log(data));

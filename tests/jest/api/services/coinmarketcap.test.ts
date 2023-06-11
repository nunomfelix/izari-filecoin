// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import CoinMarketCap from '../../../../src/api/services/coinmarketcap';

// const cmcApiKey = process.env.CMC_API_KEY;

// describe('CoinMarketCap', () => {
//   let coinMarketCap: CoinMarketCap;
//   let mock: MockAdapter;

//   beforeEach(() => {
//     mock = new MockAdapter(axios);
//     coinMarketCap = new CoinMarketCap({ apiKey: cmcApiKey || '' });
//   });

//   afterEach(() => {
//     mock.restore();
//   });

//   describe('getLatestQuotes', () => {
//     it('should return the correct data', async () => {
//       const mockResponse = { data: { symbol: 'FIL', price: 3.48 } };
//       mock.onGet('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=FIL').reply(200, mockResponse);

//       const result = await coinMarketCap.getLatestQuotes('BTC');
//       console.log('result', result);

//       expect(result).toEqual(mockResponse.data);
//     });
//   });

//   describe('getMetadata', () => {
//     it('should return the correct data', async () => {
//       const mockResponse = { data: { symbol: 'FIL', description: 'Bitcoin is a cryptocurrency.' } };
//       mock.onGet('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=BTC').reply(200, mockResponse);

//       const result = await coinMarketCap.getMetadata('BTC');

//       expect(result).toEqual(mockResponse.data);
//     });
//   });
// });

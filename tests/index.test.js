const request = require('supertest');
const app = require('../app');

describe('ページ遷移のテスト', () => {
  describe('トップページ遷移のテスト', () => {
    it('トップページに正しく遷移できる', async () => {
      const response = await request(app)
        .get('/posts') 
        .expect(200);
      expect(response.text).toMatch(/トップページ/);
    });

    it('新規投稿画面に正しく遷移できる', async () => {
        const response = await request(app)
          .get('/posts/create')
          .expect(200);
        expect(response.text).toMatch(/新規投稿ページ/);
      });
  });
});
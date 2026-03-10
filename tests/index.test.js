const request = require('supertest');
const app = require('../app');

describe('Webアプリケーションのテスト', () => {

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
  describe('トップページの遷移に失敗', () => {
    it('未定義のパスにアクセスした時、リダイレクトして302エラーを返す', async () => {
      const response = await request(app)
        .get('/some-undefined-path')
        .expect(302);
      expect(response.headers.location).toEqual('/non-existent-page');
    });
  });
});

});
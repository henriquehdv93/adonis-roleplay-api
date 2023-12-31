import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
test.group('User', () => {
  test.only('it should create an user', async (assert) => {
    const userPayload = {
      email: 'henriquehdv93@gmail.com',
      username: 'Henrique',
      password: '123456',
      avatar: 'http://images.com/image/1.png',
    }
    const { body } = await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
    assert.exists(body.user, 'User undefined')
    assert.exists(body.user.id, 'Id undefined')
    assert.equal(body.user.email, userPayload.email)
    assert.equal(body.user.username, userPayload.username)
    assert.equal(body.user.password, userPayload.password)
    assert.equal(body.user.avatar, userPayload.avatar)
  })
})

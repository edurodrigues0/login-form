import { Model, createServer } from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      user: Model,
    },
    seeds(server) {
      server.db.loadData({
        users: [
          {
            id: 1,
            email: 'admin@example.com',
            password: '123456',
          },
          {
            id: 2,
            email: 'edu@example.com',
            password: 'Edu123456',
          }
        ]
      })
    },
    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get("/user/:email", (schema, request) => {
        let email = request.params.email;

        return schema.db.users.find(email);
      });
    }
  })

  return server
}
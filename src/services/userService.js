import client from '../api/chatapi';

export default {
    addUser(name, email, password) {
        return client.addUser(name, email, password);
    },

    auth(email, password) {
        return client.auth(email, password);
    }
}
export default {
    url: 'http://davetetenburg.nl/api',
    headers: { 'Content-Type': 'application/json' },

    // User
    async addUser(name, email, password) {
        let response = await this.postData(this.url + '/users', {
            name,
            email,
            password
        });

        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw `Error: ${response.status} ${response.statusText}`;
        }
    },

    async updateUser(id, name, email, password) {
        let response = await this.postData(this.url + '/auth', {
            id,
            name,
            email,
            password
        });

        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw `Error: ${response.status} ${response.statusText}`;
        }
    },

    async getUserById(id) {
        let response = await this.getData(this.url + '/users/' + id, {
        });

        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw `Error: ${response.status} ${response.statusText}`;
        }
    },

    async getAllUsers() {
        return;
    },

    async auth(email, password) {
        let response = await this.postData(this.url + '/auth', {
            email,
            password
        });

        if (response.ok) {
            let data = await response.json();
            return data;
        }
        else {
            throw `Error: ${response.status} ${response.statusText}`;
        }
    },

    async deleteUser() {

        return;
    },

    // Chat
    async createChat(/*name, description*/) {
        return;
    },

    async updateChat(/*id, name, description*/) {
        return;
    },

    async getChatById() {

        return;
    },

    async addUserToChat() {

        return;
    },

    async deleteUserFromChat() {

        return;
    },

    async deleteChat() {

        return;
    },

    // Message
    async addMessage() {

        return;
    },

    async updateMessage() {

        return;
    },

    async getMessageByChatId() {
        return;
    },

    // API Data calls GET, POST, PUT, DELETE
    postData(url = '', data = {}) {
        let request = {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        };
        // Default options are marked with *
        return fetch(url, request);
    },

    getData(url = '') {
        // Default options are marked with *
        return fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: this.headers
        });
    },

    putData(url = '', data = {}) {
        // Default options are marked with *
        return fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: this.headers,
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    },

    deleteData(url = '', data = {}) {
        // Default options are marked with *
        return fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: this.headers,
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    },
}
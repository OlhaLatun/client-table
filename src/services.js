const URL = 'https://olhalatun.github.io/data/db.json';

export default class APIservice {
    async getData() {
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('Could not fetch data');
        }
        return await response.clone().json();
    }

    async getTableData() {
        const data = await this.getData();
        return data.clients.map(this.formatTableData);
    }

    formatTableData = (client) => ({
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: client.phone,
        state: client.adress.state,
    });
}

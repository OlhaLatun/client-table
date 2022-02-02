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

    async getDescriptionData() {
        const data = await this.getData();
        return data.clients.map(this.formatDescriptionData);
    }

    formatTableData = (client) => ({
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
        phone: client.phone,
        state: client.adress.state,
    });

    formatDescriptionData = (client) => ({
        id: client.id,
        selectedProfile: `${client.firstName} ${client.lastName}`,
        description: client.description,
        address: client.adress.streetAddress,
        city: client.adress.city,
        state: client.adress.state,
        index: client.adress.zip,
    });
}

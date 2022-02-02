const URL = 'http://localhost:3000/clients';

export default class APIservice {
    async getData() {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Could not fetch data');
        }
        return response.json();
    }

    async getTableData() {
        const clients = await this.getData();
        return clients.map(this.formatTableData);
    }

    async getDescriptionData() {
        const clients = await this.getData();
        return clients.map(this.formatDescriptionData);
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

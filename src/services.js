export default class APIservice {

    async getData() {
        let response = await fetch('https://my-json-server.typicode.com/OlhaLatun/client-db')
        if (!response.ok) {
            throw new Error('Could not fetch data')
        }
        return await response.json()
    }

    async getTableData() {
        const clients = await this.getData()
        return clients.map(this._formatTableData)
    }

    async getDescriptionData() {
        const clients = await this.getData()
        return clients.map(this._formatDescriptionData)
    }

    _formatTableData = client => {
        return {
            id: client.id,
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            phone: client.phone,
            state: client.adress.state
        }
    }

    _formatDescriptionData = client => {
        return {
            id: client.id,
            selectedProfile: `${client.firstName} ${client.lastName}`,
            description: client.description,
            address: client.adress.streetAddress,
            city: client.adress.city,
            state: client.adress.state,
            index: client.adress.zip
        }
    }

}




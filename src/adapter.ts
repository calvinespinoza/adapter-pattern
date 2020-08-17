interface LengthInCm {
    value: number
}
class Client {
    public request(): LengthInCm {
        return {
            value: 17
        }
    }
}

interface Length {
    value: number,
    unit: string
}
class Service {
    public requestInFt(): Length {
        return {
            value: 12,
            unit: 'ft'
        }
    }
}

class Adapter extends Client {
    private service: Service;

    constructor(adaptee: Service) {
        super();
        this.service = adaptee;
    }

    public request(): LengthInCm {
        //1ft = 30.48cm
        const result = this.service.requestInFt();
        var lengthInCm = result.value * 30.48;
        return {
            value: lengthInCm
        }
    }
}

function clientCode(client: Client) {
    var lengthString = client.request().value + ' cm';
    return lengthString;
}

export {Client, Service, Adapter, clientCode}
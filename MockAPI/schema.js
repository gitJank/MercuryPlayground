var schema = {
    "type": "object",
    "properties": {
        "homes": {
            "type": "array",
            "minItmes": 3,
            "maxItems": 6,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "address": {
                        "type": "string",
                        "faker": "home.address"
                    },
                    "state": {
                        "type": "string",
                        "faker": "home.state"
                    },
                    "zipcode": {
                        "type": "number",
                        "faker": "home.zipcode"
                    },
                    "type": {
                        "type": "string",
                        "faker": "home.type"
                    }
                },
                "required": ["id", "address", "state", "zipcode", "type"]
            }
        }
    },
    "required": ["homes"]
};

module.exports = schema;
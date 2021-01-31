function cars(data) {
     // Note: Need to be done by using closure!
    
    const vehicleBuilder = () => {
        const vehicles = {};

        return {
            create: (name, inherit, parent) => {
                vehicles[name] = inherit ? Object.create(vehicles[parent]) : {};
            },
            set: (name, key, value) => (vehicles[name][key] = value),
            print: (name) => {
                const logs = [];
                for (const key in vehicles[name]) {
                    logs.push(`${key}:${vehicles[name][key]}`);
                }

                console.log(logs.join(", "));
            },
        };
    };

    const factory = vehicleBuilder();
    data.map((x) => x.split(" ")).forEach(([command, ...args]) => factory[command].apply(null, args));
}

// cars(["create c1", "create c2 inherit c1", "set c1 color red", "set c2 model new", "print c1", "print c2"])

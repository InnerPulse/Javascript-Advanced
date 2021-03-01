function vehicleFactory(requested) {
    const engines = {
        90: {
            power: 90,
            volume: 1800,
        },
        120: {
            power: 120,
            volume: 2400,
        },
        200: {
            power: 200,
            volume: 3500,
        },
    };

    const constructed = {
        model: requested.model,
        engine: determineEngine(requested.power),
        carriage: {
            type: requested.carriage,
            color: requested.color,
        },
        wheels: new Array(4).fill(
            requested.wheelsize % 2 === 0
                ? requested.wheelsize - 1
                : requested.wheelsize
        ),
    };

    function determineEngine(power) {
        for (const engine in engines) {
            if (power <= engine) {
                return engines[engine];
            }
        }
    }

    return constructed;
}

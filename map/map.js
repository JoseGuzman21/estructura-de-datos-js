function methods() {
    let numbers = [
        // {
        //     sku: '1',
        //     status: true
        // },
        // {
        //     sku: '2',
        //     status: false
        // },
        // {
        //     sku: '3',
        //     status: true
        // }
    ];

    let filteredWithOutSku = []

    let filtered = numbers.find((number) => number.sku !== '3')

    if (filtered === undefined) {
        numbers.push({ sku: '3', status: true });
    }
    if (filtered !== undefined) {
        filteredWithOutSku = numbers.filter((number) => number.sku != '3');
        numbers = [];
        numbers.push(...filteredWithOutSku);
        numbers.push({ sku: '3', status: true });
    }

    console.log(numbers);
}

methods();


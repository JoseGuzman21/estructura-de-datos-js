const orders = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
];
//worse
function imperative() {
    let totalAmount = 0;

    for (let i = 0; i < orders.length; i++) {
        totalAmount += orders[i].amount;
    }

    console.log(totalAmount); // 120
}
//better
function declarative() {
    function sumAmount(currentAmount, order) {
        return currentAmount + order.amount;
    }

    function getTotalAmount(orders) {
        //https://softwarecrafters.io/javascript/introduccion-programacion-funcional-javascript
        return orders.reduce(sumAmount, 0);
    }

    console.log(getTotalAmount(orders));
}

imperative();
declarative();


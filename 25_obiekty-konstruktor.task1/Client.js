function Client (name) {
    this.name = name;
    this.orders = [];
    this.addOrder = function(order) {
        let orderNumber = 1;
        let price = 20;
        let product = new Product (order, price);
        let newOrder = new Order(this, orderNumber);
        newOrder.addPosition(product, 1);
        this.orders.push(newOrder);
    }
}




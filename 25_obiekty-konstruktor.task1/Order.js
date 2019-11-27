function Order(client, number) {
    this.client = client;
    this.number = number;
    this.positions = [];
    this.addPosition = function (product, quantity) {
        let orderItem = new OrderItem(this, product, quantity);
        this.positions.push(orderItem);
    }
}
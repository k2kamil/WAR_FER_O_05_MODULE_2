


    let Order = function (client, number){
        //atttributes
        this.client = client;
        this.number = number;
        this.positions = [];
        this.totalValue = 0;

        //initialize
        client.addOrder(this);

        //methods
        this.addPosition = function(product, quantity){
            let orderItem = new OrderItem(this, product, quantity);
            this.positions.push(orderItem);
        }
    this.countTotalValue= function(){
         let sum = 0;
         this.positions.forEach(function(position){
         sum = sum + position.product.price * position.quantity;
         })
        this.totalValue = sum;
         console.log(sum);
        }
    }
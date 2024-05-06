import React from "react";
import Order from "./Order";

class OrderList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            order: [
                {
                    id: 1,
                    description: 'Сломался котел',
                    causeOfFailure: 'Неизвестна',
                    comments: 'пр',
                    status: 'создана'
                },
                {
                    id: 2,
                    description: 'Упал потолок',
                    causeOfFailure: 'Неизвестна',
                    comments: 'пр',
                    status: 'создана'
                }
            ]
        }    
      
    }

    render() {
      if (this.state.order.length > 0)
        return (
          <div>
            {this.state.order.map((el) => (
            <Order key={el.id} order={el} />
            ))}
          </div>
        );
        else 
        return (
          <div>
            <h2>Заявок нет</h2>
          </div>
        );
    }
}

export default OrderList;
import React from "react"

export default class Order extends React.Component {
    order = this.props.order;
  render() {
    return (
      <div>        
          <div className="order" >
            <h2>{this.order.id}</h2>            
            <p>{this.order.description}</p>
            <p>{this.order.causeOfFailure}</p>
            <p>{this.order.comments}</p>
            <p>{this.order.status}</p>
            <button>Удалить</button>
            <button>Редактировать</button>
          </div>
        
      </div>
    );
  }
}
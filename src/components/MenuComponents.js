import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null) return <DishDetail dish={dish} />;
    else return <div></div>;
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    let selectedDish = null;
    if (this.state.selectedDish != null) {
      selectedDish = <DishDetail dish={this.state.selectedDish} />;
    }

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}
export default Menu;

import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <div>
          <Card>
            <CardImg width="100%" top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null && dish.comments != null) {
      const commentlist = dish.comments.map((comment) => {
        const oldDate = new Date(comment.date);
        const options = { month: "long", day: "numeric", year: "numeric" };
        const formattedDate = oldDate.toLocaleDateString("en-US", options);
        return (
          <div>
            <ul className="list-unstyled" key={comment.id}>
              <li>{comment.comment}</li>
              <li>
                -- {comment.author}, {formattedDate}
              </li>
            </ul>
          </div>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          {commentlist}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish)}
          </div>
        </div>
		 
      </div>
    );
  }
}

export default DishDetail;

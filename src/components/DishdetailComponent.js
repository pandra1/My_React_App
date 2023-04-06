import React from "react";
import { CardImg, CardText, CardBody, CardTitle, Container, Row } from "reactstrap";
const Dishdetailed = (props) => {
  if (props != null) {
    const { dish } = props;
    return (
      <Container>
        <Row>
          <div className="col-12 col-md-5 m-1">{RenderDish({ dish })}</div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {RenderComments(dish.comments)}
          </div>
        </Row>
      </Container>
    );
  } else return <div />;
};
const RenderDish = (props) => {
  if (props != null) {
    const { dish } = props;
    return (
      <div className="col-12 col-md-6 m-1" key={dish.id}>
        <CardImg width="10%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h3">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </div>
    );
  } else return <div />;
};
const RenderComments = (props) => {
  if (props != null) {
    return props.map((comment) => {
      return (
        <div key={comment.id}>
          <ul>
            <li>
              <p>{comment.comment}</p>
              <p>
                --{comment.author} ,
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          </ul>
        </div>
      );
    });
  } else {
    return <div />;
  }
};
export default Dishdetailed;

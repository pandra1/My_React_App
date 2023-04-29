import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      Rating: "",
      Your_Name: "",
      Your_Comment: "",
      touched: {
        Rating: 0,
        Your_Comment: false,
        Your_Name: false,
      },
    };
    this.toggleCommentModal = this.toggleCommentModal.bind(this);
    this.handleInputChange = this. handleInputChange.bind(this);
  }
  toggleCommentModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  validate_Comment(Rating, Your_Name, Your_Comment) {
    const errors = {
      Rating: "",
      Your_Comment: "",
      Your_Name: "",
    };
    
    if (this.state.touched.Your_Name && Your_Name.length < 3)
      {
        errors.Your_Name = "Must be greater than 2 characters";
      }
      if (this.state.touched.Your_Name && Your_Name.length >15)
      {

      errors.Your_Name = "Must be 15 charactrers or less";
      }
      console.log(errors);
    return errors;
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  render() {
    const errors = this.validate_Comment(
      this.state.Rating,
      this.state.Your_Name,
      this.state.Your_Comment
    );
    return (
      <div>
        <Button
          type="submit"
          value="submit"
          outline
          onClick={this.toggleCommentModal}
        >
          <span className="fa fa-pencil fa-lg"> </span>Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment
          <vr></vr>
            <Button
              type="submit"
              value="submit"
              color="danger"
              onClick={this.toggleCommentModal}
            >
              &times;
            </Button>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label>Rating</Label>
                <br></br>
                <select
                  className="col-12 col-md-12 m-1"
                  value={this.state.Rating}
                  onChange={this.handleInputChange}
                  name="Rating"
                >
                  <option value="5" selected>
                    5
                  </option>
                  <option className="option" value="4">
                    4
                  </option>
                  <option className="option" value="3">
                    3
                  </option>
                  <option className="option" value="2">
                    2
                  </option>
                  <option className="option" value="1">
                    1
                  </option>
                </select>
              </FormGroup>
              <FormGroup>
                <Label>Your Name</Label>
                <Input
                  type="text"
                  value={this.state.Your_Name}
                  name="Your_Name"
                  onChange={this.handleInputChange}
                  valid={errors.Your_Name===""}
                  invalid={errors.Your_Name!==""}
                  onBlur={this.handleBlur("Your_Name")}
                />
                <FormFeedback>{errors.Your_Name}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Your Comment</Label>
                <Input
                  type="textarea"
                  rows="6"
                  name="Your_Comment"
                  value={this.state.Your_Comment}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const DishDetail = (props) => {
  function RenderDish() {
    if (props.dish != null)
      return (
        <div>
          <Card>
            <CardImg
              width="100%"
              top
              src={props.dish.image}
              alt={props.dish.name}
            />
            <CardBody>
              <CardTitle>{props.dish.name}</CardTitle>
              <CardText>{props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div>test</div>;
  }

  function RenderComments(dish) {
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
          <CommentForm />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
          
        </div>
      </div>
    </div>
  );
};


export default DishDetail;


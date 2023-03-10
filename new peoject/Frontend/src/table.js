import React, { Component } from "react";
import axios from "axios";
import './table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodId: "",
            foodName: "",
            vegOrNon_veg: "",
            styleOfFood: "",
            quantity: "",
            foodData: [], // Array to store FoodEntity data fetched from the server

            // this.foodId = foodId;
            // FoodName = foodName;
            // VegOrNon_veg = vegOrNon_veg;
            // StyleOfFood = styleOfFood;
            // Quantity = quantity;
            // Price = price;
        };
    }

    componentDidMount() {
        // Fetch FoodEntity data from server when component mounts
        axios.get("http://localhost:8080/show").then((response) => {
            this.setState({ foodData: response.data });
        });
    }

    handlefoodIdChange = (event) => {
        this.setState({ foodId: event.target.value });
    };
    handlefoodName = (event) => {
        this.setState({ foodName: event.target.value });
    };
    handlevegOrNon_veg = (event) => {
        this.setState({ vegOrNon_veg: event.target.value });
    };
    handlestyleOfFood = (event) => {
        this.setState({ styleOfFood: event.target.value });
    };
    handlequantity = (event) => {
        this.setState({ quantity: event.target.value });
    };
   

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            foodId: this.state.foodId,
            foodName: this.state.foodName,
            vegOrNon_veg: this.state.vegOrNon_veg,
            styleOfFood: this.state.styleOfFood,
            quantity: this.state.quantity,
            // price: this.state.price,
        };
        console.log(data);
        axios.post("http://localhost:8080/add", data).then((response) => {
            // Add new FoodEntity data to the state and clear the form
            this.setState({
                foodData: [...this.state.foodData, response.data],
                foodId: "",
                foodName: "",
                vegOrNon_veg: "",
                styleOfFood: "",
                quantity: "",
            });
        });
    };

    handleUpdate = (foodId, data) => {
        // Send PUT request to upprice FoodEntity data with the given ID
        axios.put(`http://localhost:8080/update/${foodId}`, data).then((response) => {
            // Upprice the state to reflect the uppriced FoodEntity data
            const uppricedfoodData = this.state.foodData.map((FoodEntity) => {
                if (FoodEntity.foodId === response.data.foodId) {
                    return response.data;
                } else {
                    return FoodEntity;
                }
            });
            this.setState({ foodData: uppricedfoodData });
        });
    };

    handleDelete = (foodId) => {
        // Send DELETE request to remove FoodEntity data with the given ID
        axios.delete(`http://localhost:8080/del/${foodId}`).then((response) => {
            // Upprice the state to remove the deleted FoodEntity data
            const uppricedfoodData = this.state.foodData.filter(
                (FoodEntity) => FoodEntity.foodId !== foodId
            );
            this.setState({ foodData: uppricedfoodData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            id: data.id,
            foodId: data.foodId,
            foodName: data.foodName,
            vegOrNon_veg: data.vegOrNon_veg,
            styleOfFood: data.styleOfFood,
            quantity: data.quantity,
            isEdit: true,
        });
        console.log(this.state.foodId);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            foodId: this.state.foodId,
            foodName: this.state.foodName,
            vegOrNon_veg: this.state.vegOrNon_veg,
            styleOfFood: this.state.styleOfFood,
            quantity:this.state.quantity,
        };
        const foodId = this.state.foodId;
        axios
            .put(`http://localhost:8080/update/${foodId}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    foodId: "",
                    foodName: "",
                    vegOrNon_veg: "",
                    styleOfFood: "",
                    quantity:""
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="FoodEntity">
                    <label className="login-label">foodId</label>
                    <input
                        className="FoodEntity"
                        type="number"
                        value={this.state.foodId}
                        onChange={this.handlefoodIdChange}
                    />
                    <label className="login-label">foodName</label>
                    <input
                        className="FoodEntity"
                        type="text"
                        value={this.state.foodName}
                        onChange={this.handlefoodName}
                    />

                    <label className="login-label">vegOrNon_veg</label>
                    <input
                        className="FoodEntity"
                        type="text"
                        value={this.state.vegOrNon_veg}
                        onChange={this.handlevegOrNon_veg}
                    />

                    <label className="login-label">styleOfFood</label>
                    <input
                        className="FoodEntity"
                        type="text"
                        value={this.state.styleOfFood}
                        onChange={this.handlestyleOfFood}
                    />


                    <label className="login-label">quantity</label>
                    <input
                        className="FoodEntity"
                        type="number"
                        value={this.state.quantity}
                        onChange={this.handlequantity}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>


                <table className="output" border={1} width="30%" cellPadding={10}>
                    <thead>
                        <tr>
                            <th>foodId</th>
                            <th>foodName</th>
                            <th>vegOrNon_veg</th>
                            <th>styleOfFood</th>
                            <th>quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.foodData.map((data) => (
                            <tr key={data.foodId}>
                                <td>{data.foodId}</td>
                                <td>{data.foodName}</td>
                                <td>{data.vegOrNon_veg}</td>
                                <td>{data.styleOfFood}</td>
                                <td>{data.quantity}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.foodId)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.foodId} />
                    <label>foodId:</label>
                    <input
                        type="text"
                        name="foodId"
                        value={this.state.foodId}
                        onChange={this.handleInputChange}
                    />
                    
                    <label>foodName:</label>
                    <input
                        type="text"
                        name="foodName"
                        value={this.state.foodName}
                        onChange={this.handleInputChange}
                    />
                    
                    <label>vegOrNon_veg:</label>
                    <input
                        type="text"
                        name="vegOrNon_veg"
                        value={this.state.vegOrNon_veg}
                        onChange={this.handleInputChange}
                    />
                    
                    <label>styleOfFood:</label>
                    <input
                        type="text"
                        name="styleOfFood"
                        value={this.state.styleOfFood}
                        onChange={this.handleInputChange}
                    />
                    
                    <label>quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleInputChange}
                    />
                    <br />
                
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Table;
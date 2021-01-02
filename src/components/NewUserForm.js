import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class  NewUserForm extends Component
{
    //Initialize state with firstName and lastName
    state = {
        firstName: '',
        lastName: ''
    }
    //This is for calling handler

    handleFirstNameChange = e =>
    {
        this.setState
        ({
            firstName: e.target.value
        });
    }
    handleLastNameChange = e =>
    {
        this.setState
        ({
            lastName: e.target.value
        });
    }

    handleSubmit = e =>
    {
        e.preventDefault();
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        
        this.setState({
            firstName: '',
            lastName: ''
        });
    }
    
    //This if for rendering (apply handlers: changehandlers and submithandler)
    //return is required within render
    render()
    {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label> First Name </Label>
                    <Input required placeholder = "FirstName" onChange={this.handleFirstNameChange} value={this.state.firstName}> </Input>
                </FormGroup>

                <FormGroup>
                    <Label> Last Name </Label>
                    <Input required placeholder = "LastName" onChange={this.handleLastNameChange} value={this.state.lastName}> </Input>
                </FormGroup>

                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;
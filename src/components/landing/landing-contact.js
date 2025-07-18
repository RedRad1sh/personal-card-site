import React from "react";
import {
    Divider, Header, Icon,
    FormGroup,
    FormInput,
    Form,
    Input,
    TextArea,
    FormField,
    FormButton
} from 'semantic-ui-react'

export class ContactModule extends React.Component {
    state = { name: '', email: '', exceptions: []}

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = () => {
        const { name, email } = this.state
        const newExceptions = [];
        console.log(this.state)
        if (name === '') {
            newExceptions.push('null-name')
        }
        if (email === '') {
            newExceptions.push('null-email')
        }
        if (newExceptions.length === 0) {
            // send message
            console.log('Сообщение отправлено!')
        }
        this.setState({exceptions: newExceptions})
    }

    render() {
        const { name, email, exceptions } = this.state

        return <div className="container container sixteen wide mobile sixteen wide tablet sixteen wide computer column">
            <Divider horizontal className="container-header">
                <Header inverted as='h1' className="flasty">
                    <Icon name='mail' />
                    Contact with me
                </Header>
            </Divider>
            <Form size="large" inverted>
                <FormGroup widths='equal'>
                    <FormInput id='form-input-control-user-name'
                        control={Input}
                        label='Name'
                        type="name"
                        name='name'
                        value={name}
                        placeholder='User'
                        onChange={this.handleChange}
                        error={exceptions.includes('null-name') && {
                            content: 'Please enter your name',
                            pointing: 'above',
                        }}
                    />

                    <FormInput id='form-input-control-email'
                        control={Input}
                        label='Email'
                        placeholder='joe@mail.com'
                        type="email"
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        error={exceptions.includes('null-email') && {
                            content: 'Please enter an email address',
                            pointing: 'above',
                        }}
                    />
                </FormGroup>
                <FormField
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    placeholder='Please write your question'
                    error={exceptions.includes('null-message') && {
                        content: 'Please enter an email address',
                        pointing: 'above',
                    }}
                />
                <FormButton onClick={this.handleSubmit} type='submit'>Submit</FormButton>
            </Form>
        </div>
    }
}
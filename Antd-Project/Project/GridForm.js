import React from "react";
import { Button, DatePicker, Form, Input, Row, Col, Select } from 'antd'
const { Option } = Select;

class GridFormCom extends React.Component {

    render() {
        return (
            <>
                <Form>
                    <Row>
                        <Col>
                            <Form.Item name="firstname" label="First name" >
                                <Input placeholder="firstname" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="lastname" label="Last name" >
                                <Input placeholder="lastname" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="title" label="DOB">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                name="select"
                                label="Select"
                                rules={[{ required: true, message: 'Please select your country!' }]}
                            >
                                <Select placeholder="Please select a country">
                                    <Option value="china">China</Option>
                                    <Option value="usa">U.S.A</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Button
                            type="button"
                        >
                            Save
                        </Button>
                    </Row>
                </Form> 
            </>
        )
    }
}
export default GridFormCom;
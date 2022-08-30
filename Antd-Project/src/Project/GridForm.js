import React from "react";
import { Button, DatePicker, Form, Input, Row, Col, Select, Radio } from 'antd'
const { Option } = Select;

class GridFormCom extends React.Component {

    validateMessages = () => {
        console.log();
    };
    onSave = () => {
        console.log();
    };

    render() {
        return (
            <>
                <Form validateMessages={this.validateMessages}>
                    <Row>
                        <Col>
                        <br/>
                            <Form.Item label="First name" style={{ width: "320px" }}
                                rules={[{ required: true }]}
                            >
                              
                                <Input placeholder="firstname" />
                                
                            </Form.Item>
                        </Col>
                        <Col>
                        <br/>
                            <Form.Item label="Last name" style={{ width: "320px" }} >
                                <Input placeholder="lastname" />
                            </Form.Item>
                        </Col>
                        <Col>
                        <br/>
                            <Form.Item label="DOB">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col>
                        <br/>
                            <Form.Item
                                label="Desgination"
                                rules={[{ required: true, message: 'Please select your desgination!' }]}
                                style={{ width: "320px" }}
                            >
                                <Select placeholder="Please select a desgination">
                                    <Option value="coo">COO</Option>
                                    <Option value="ceo ">CEO </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                label="Department"
                                rules={[{ required: true, message: 'Please select your department!' }]}
                                style={{ width: "320px" }}
                            >
                                <Select placeholder="Please select a department">
                                    <Option value="coo">COO</Option>
                                    <Option value="ceo ">CEO </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label="Email" style={{ width: "320px" }}>
                                <Input placeholder="email" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label="Phone" style={{ width: "320px" }}>
                                <Input placeholder="phone   " />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                label="Country"
                                rules={[{ required: true, message: 'Please select your country!' }]}
                                style={{ width: "320px" }}
                            >
                                <Select placeholder="Please select a country">
                                    <Option value="india">India</Option>
                                    <Option value="china ">China </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                label="State"
                                rules={[{ required: true, message: 'Please select your state!' }]}
                                style={{ width: "320px" }}
                            >
                                <Select placeholder="Please select a state">
                                    <Option value="hyderabad">Hyderabad</Option>
                                    <Option value="delhi ">Delhi</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label="City" style={{ width: "320px" }}>
                                <Input placeholder="city" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label="Gender">
                                <Radio.Group>
                                    <Radio value="male"> Male </Radio>
                                    <Radio value="female"> Female </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item label="Zip Code" style={{ width: "320px" }}>
                                <Input placeholder="500000" />
                            </Form.Item>
                        </Col>
                        <Button
                            htmlType="button"
                            onClick={this.onSave}
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
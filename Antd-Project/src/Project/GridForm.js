import React from "react";
import { DatePicker, Button, Form, Input, Row, Col, Select, Radio, } from 'antd'
const { Option } = Select;

class GridFormCom extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]:[e.target.value]});
        console.log({ ...this.state });
    };

    onSave = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <>
                <center><h2>Employe</h2></center>
                <hr/>
                <Form  autoComplete="off" >
                    <Row>
                        <Col>
                            <br />
                            <Form.Item
                                name="firstname"
                                style={{ width: "320px" }}
                                rules={[{ required: true }]}
                            >
                                <label><b>First name</b></label>
                                <Input placeholder="firstname" name="firstName" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>

                        <Col>
                            <br />
                            <Form.Item name="lastname" style={{ width: "320px" }}
                                rules={[{ required: true }]}  >
                                <label><b>Last name</b></label>
                                <Input placeholder="lastname"  name="lastName" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <br />
                            <Form.Item name="date of birth" rules={[{ required: true }]} >
                                <label><b>DOB</b></label>
                                <br />
                                <DatePicker style={{ width: "320px" }} name="dob" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <br />
                            <Form.Item name="join" rules={[{ required: true }]} >
                                <label><b>Date of joining</b></label>
                                <br />
                                <DatePicker style={{ width: "320px" }} name="dJoin" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="desgination"
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label><b>Desgination</b></label>
                                <Select placeholder="Please select a desgination">
                                    {
                                        this.state.desginationList?.map((item, index) => (<Option key={index}>{item}</Option>))
                                    }
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="department"
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label><b>Department</b></label>
                                <Select placeholder="Please select a department">
                                    <Option value="coo">COO</Option>
                                    <Option value="ceo ">CEO </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="gender" rules={[{ required: true }]} style={{ width: "320px" }}>
                                <label><b>Gender</b></label>
                                <br />
                                <Radio.Group>
                                    <Radio value="male"> Male </Radio>
                                    <Radio value="female"> Female </Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="phone number" style={{ width: "320px" }} rules={[{ required: true }]}>
                                <label><b>Phone Number</b></label>
                                <Input placeholder="phone number" name="phoneNo" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="email" style={{ width: "320px" }} rules={[{ required: true }]}>
                                <label><b>Email</b></label>
                                <Input placeholder="email" name="emailId" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="experience " style={{ width: "320px" }} rules={[{ required: true }]}>
                                <label><b>Experience</b></label>
                                <Input placeholder="experience " name="experience" onChange={(e) => this.inputHandler(e)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button
                            htmlType="Submit"
                            type="primary"
                            onClick={this.onSave}>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}
export default GridFormCom;

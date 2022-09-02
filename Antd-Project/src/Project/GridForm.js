import React, { useState } from 'react';
import { Form, Button, Row, Col, Input, Select, Radio } from 'antd'

function GridFormCom() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [dJoin, setDjoin] = useState('');
    const [desgination, setDesgination] = useState([{ name: "HR" }, { name: "Marketing" }, { name: "Accounting" }]);
    const [department, setDepartment] = useState([{ name: "Trainee Engineer" }, { name: "Software Engineer" }, { name: "System Analyst" }]);
    const [gender, setGender] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [emailId, setEmailId] = useState('');
    const [experience, setExperience] = useState('');



    const [allEntry, setAllEntry] = useState("");


    const onSave = (event) => {
        event.preventDefault();
        const val = { firstName, lastName, dob, dJoin, desgination, department, gender, phoneNo, emailId, experience };
        setAllEntry([val]);
        console.log(val);
        setFirstName("");
        setLastName("");
        setDob("");
        setDjoin("");
        setDesgination("");
        setDepartment("");
        setGender("");
        setPhoneNo("");
        setEmailId("");
        setExperience("");
    };

    return (
        <>
            <center><h2>Employe</h2></center>
            <hr />
            <Form autoComplete="off" >
                <Row>
                    <Col>
                        <br />
                        <Form.Item
                            name="firstname"
                            style={{ width: "320px" }}
                            rules={[{ required: true }]}
                        >
                            <label><b>First name</b></label>
                            <Input placeholder="firstname" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <br />
                        <Form.Item name="lastname" style={{ width: "320px" }}
                            rules={[{ required: true }]}  >
                            <label><b>Last name</b></label>
                            <Input placeholder="lastname" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <br />
                        <Form.Item name="date of birth" rules={[{ required: true }]} >
                            <label><b>DOB</b></label>
                            <br />
                            <Input type="date" style={{ width: "320px" }} value={dob} onChange={(event) => setDob(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <br />
                        <Form.Item name="join" rules={[{ required: true }]} >
                            <label><b>Date of joining</b></label>
                            <br />
                            <Input type="date" style={{ width: "320px" }} value={dJoin} onChange={(event) => setDjoin(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="desgination"
                            rules={[{ required: true }]}
                            style={{ width: "320px" }}
                        >
                            <label><b>Desgination</b></label>
                            <Select placeholder="Please select a desgination" value={desgination} onChange={(event) => setDesgination(event.target.value)}>
                                {/* {desgination.map((subItems, index) => {
                                    return <Select.Option key={index}>{subItems.name}</Select.Option>
                                }
                                )} */}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="department"
                            rules={[{ required: true }]}
                            style={{ width: "320px" }}
                        >
                            <label><b>Department</b></label>
                            <Select placeholder="Please select a department" value={department} onChange={(event) => setDepartment(event.target.value)}>
                                {/* {department.map((subItems, index) => {
                                    return <Select.Option key={index}> {subItems.name}</Select.Option>
                                }
                                )} */}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="gender" rules={[{ required: true }]} style={{ width: "320px" }}>
                            <label><b>Gender</b></label>
                            <br />
                            <Radio.Group value={gender} onChange={(event) => setGender(event.target.value)}>
                                <Radio value="male"> Male </Radio>
                                <Radio value="female"> Female </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="phone number" style={{ width: "320px" }} rules={[{ required: true }]}>
                            <label><b>Phone Number</b></label>
                            <Input placeholder="phone number" value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="email" style={{ width: "320px" }} rules={[{ required: true }]}>
                            <label><b>Email</b></label>
                            <Input placeholder="email" value={emailId} onChange={(event) => setEmailId(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="experience " style={{ width: "320px" }} rules={[{ required: true }]}>
                            <label><b>Experience</b></label>
                            <Input placeholder="experience " value={experience} onChange={(event) => setExperience(event.target.value)} />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button
                        htmlType="Submit"
                        type="primary"
                        onClick={onSave}
                    >
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default GridFormCom;

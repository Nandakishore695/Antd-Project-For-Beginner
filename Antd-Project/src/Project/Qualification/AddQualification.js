import React, { useState } from "react";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Modal, Select, Form } from 'antd'
const { Option } = Select;

function AddQualificationPopup() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <h2>Qualification Details</h2>
            <PlusCircleOutlined type="primary" onClick={showModal} style={{ color: "green", fontSize: 20 }} />
            <Modal title="Add Qualification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p><b> Selection Type</b></p>
                <Form>
                    <Form.Item>
                        <label>Degree</label>
                        <Select
                            placeholder="Select a option"
                            style={{ width: "150px" }}
                        >
                            <Option value="residential">B.Sc</Option>
                            <Option value="rental">B.A</Option>
                            <Option value="rental">B.Com</Option>
                            <Option value="rental">B.B.A</Option>
                            <Option value="rental">B.Ed</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <label>B.Tech</label>
                        <Select
                            placeholder="Select a option"
                            style={{ width: "150px" }}
                        >
                            <Option value="residential">B.Sc</Option>
                            <Option value="rental">Civil</Option>
                            <Option value="rental">Mechnical</Option>
                            <Option value="rental">Electrical</Option>
                            <Option value="rental">Electronic</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default AddQualificationPopup;
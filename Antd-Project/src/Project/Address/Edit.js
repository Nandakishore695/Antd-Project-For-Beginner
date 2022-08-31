import React, { useState } from "react";
import { EditOutlined } from '@ant-design/icons';
import { Modal, Select, Form, Input } from 'antd'
const { Option } = Select;

function EditPopup() {
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
            <EditOutlined type="primary" onClick={showModal} style={{ color: "green", fontSize: 20 }} />
            <Modal title="Edit Address" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p><b>Type</b></p>
                <Form>
                    <Form.Item>
                        <Select
                            placeholder="Select a option"
                            style={{ width: "150px" }}
                        >
                            <Option value="residential">Residential</Option>
                            <Option value="rental">Rental</Option>
                        </Select>
                    </Form.Item>
                    <p><b>Address</b></p>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <p><b>Zip Code</b></p>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default EditPopup;
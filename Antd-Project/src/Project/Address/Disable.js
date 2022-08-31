import React, { useState } from "react";
import { StopOutlined } from '@ant-design/icons';
import { Modal, Select, Form, Input } from 'antd'
const { Option } = Select;

function DisablePopup() {
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
            <StopOutlined  type="primary" onClick={showModal} style={{ color: "green", fontSize: 20 }} />
            <Modal title="Status Address" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p><b>Status Type</b></p>
                <Form>
                    <Form.Item>
                        <Select
                            placeholder="Select a option"
                            style={{ width: "150px" }}
                        >
                            <Option value="acitve">Acitve</Option>
                            <Option value="deactive">Deactive</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default DisablePopup;
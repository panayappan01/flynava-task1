import React from "react";
import { Typography, Button, Form, Input, message } from "antd";

const AddConnection = ({
    isAddViewVisible,
    toggleAddViewVisible,
    addConnection,
}) => {
    return (
        <div>
            {!isAddViewVisible && (
                <Button onClick={toggleAddViewVisible} type="primary">
                    ADD CONNECTION
                </Button>
            )}
            {isAddViewVisible && (
                <Form
                    onFinish={addConnection}
                    layout="vertical"
                    className="app__add-connection-form"
                >
                    <Form.Item
                        label="Connection Name 1"
                        name="connectionname1"
                        rules={[
                            {
                                required: true,
                                message: "Required Field!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Connection Name 2"
                        name="connectionname2"
                        rules={[
                            {
                                required: true,
                                message: "Required Field!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            ADD
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={toggleAddViewVisible}>CANCEL</Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
};

export default AddConnection;

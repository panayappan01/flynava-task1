import React from "react";
import { Typography, Button, Form, Input, message } from "antd";

const SearchConnection = ({
    isSearchViewVisible,
    toggleSearchViewVisible,
    searchConnections,
}) => {
    return (
        <div style={{ marginTop: 15 }}>
            {!isSearchViewVisible && (
                <Button onClick={toggleSearchViewVisible} type="primary">
                    SEARCH CONNECTION
                </Button>
            )}
            {isSearchViewVisible && (
                <Form
                    onFinish={searchConnections}
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
                            SEARCH
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={toggleSearchViewVisible}>
                            CANCEL
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
};

export default SearchConnection;

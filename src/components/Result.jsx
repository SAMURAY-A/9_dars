import React from "react";
import { Button, Result } from "antd";
const ResultF = () => (
    <Result
        status="error"
        title="Togri"
        subTitle="WARNING: This does not throw an AssertionError in legacy assertion mode!"
        extra={[
            <Button type="primary" key="console">
                error
            </Button>,
            <Button key="buy">false</Button>,
        ]}
    />
);
export default ResultF;

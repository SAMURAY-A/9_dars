import React from "react";
import { Button, message } from "antd";
const MessageF = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: "error",
            content:
                "Throws ReferenceError, doesNotExist is not a variable in this program. ",
            duration: 10,
        });
    };
    return (
        <>
            {contextHolder}
            <Button onClick={success}>Meni bosssss</Button>
        </>
    );
};
export default MessageF;

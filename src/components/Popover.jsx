import React from "react";
import { Button, Popover } from "antd";
const content = (
    <div>
        <p>Abdullohaziz</p>
        <p>Jumanazarov</p>
    </div>
);
const PopoverF = () => (
    <Popover content={content} title="Malumot">
        <Button type="primary">Full-name</Button>
    </Popover>
);
export default PopoverF;

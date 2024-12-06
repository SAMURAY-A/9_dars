import React, { useRef, useState } from "react";
import { Button, Tour } from "antd";
import CalendarF from "./Calendar";
import CardF from "./Card";
import ImageF from "./Image";
const TourF = () => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const steps = [
        {
            title: "Bugungi kun",
            description: <CalendarF />,
            target: null,
        },
        {
            title: "Arktika Ayiqlari haqida",
            description: <CardF />,
            placement: "right",
            target: () => ref.current,
        },
        {
            title: "Bugungi qahva",
            description: <ImageF />,
            placement: "top",
            target: () => ref.current,
        },
    ];
    return (
        <>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps} />

            <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
                About
            </Button>
        </>
    );
};
export default TourF;

import AlertF from "./components/Alert";
import CollapseF from "./components/Collapse";
import MessageF from "./components/Message";
import Navbar from "./components/Navbar";
import ResultF from "./components/Result";
import TabsF from "./components/Tab";

function App() {
    return (
        <>
            <Navbar />
            <AlertF />
            <TabsF />
            <MessageF />
            <ResultF />
            <CollapseF />
        </>
    );
}

export default App;

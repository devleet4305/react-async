import { use } from "react";

const Bottles = ({ bottles}) => {
    const Data = use(bottles());
    console.log(Data);

    return (
        <div>
            
        </div>
    );
};

export default Bottles;

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="p-4 mt-10 shadow-xl ml-10">
      <div className="flex justify-between items-center">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="flex flex-col items-center">
        <div className="h-36 flex justify-center w-full" >
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="text-[#999]">Total number of stock releases</p>
        <p className="">$420</p>
        <p className="text-center text-[#999]">
          Previous releases processing. Last release may not be included.
        </p>
      </div>
    </div>
  );
};

export default Featured;

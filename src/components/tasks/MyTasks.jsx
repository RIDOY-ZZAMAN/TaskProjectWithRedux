import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyTaskDetails from "./MyTaskDetails";

import CancelTask from "./CancelTask";

const MyTasks = () => {
  const [myTask, setMyTask] = useState([]);
  const [isDetails, setDetails] = useState(false);
  const [isClickedItem, setClickedItem] = useState([]);
  const [isOpen1, setIsOpen1] = useState(false);

  const { tasks } = useSelector((state) => state.tasksSlice);

  useEffect(() => {
    let Task = tasks.filter((item) => item.assignedTo === "Ridoy");
    setMyTask(Task);
  }, [tasks]);

  const handleDetails = (id) => {
    setDetails(true);
    const myTaskDetail = myTask.filter((item) => item.id === id);
    myTaskDetail.map((item) => setClickedItem(item));
  };

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {myTask.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetails(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <MyTaskDetails
                isDetails={isDetails}
                setDetails={setDetails}
                isClickedItem={isClickedItem}
              ></MyTaskDetails>
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
              <CancelTask
                isOpen1={isOpen1}
                setIsOpen1={setIsOpen1}
                myTask={myTask}
                setMyTask={setMyTask}
                item={item}
              ></CancelTask>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;

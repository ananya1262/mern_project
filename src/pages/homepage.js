import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

const Homepage = () => {
    const [view, setView] = useState("list");
    const [sortedTasks, setSortedTasks] = useState(null);
    const [sortType, setSortType] = useState(null);

    const tasks = [
        {
            id: 1,
            name: "read the email Task 1",
            createDate:"2023-09-08",
            Deadline:"2023-09-15",           
            description: "Description 1",
            completed:Boolean,
            priority: "high",
            Notification: 2
        },
        {
            id: 2,
            name: "clean Task 2",
            createDate:"2023-09-17",
            Deadline:"2023-09-23",
            description: "Description 2",
            completed:Boolean,
            priority: "low",
            Notification: 2
        },
        {
            id: 3,
            name: "book a show Task 3",
            createDate:"2023-09-01",
            Deadline:"2023-09-16",
            description: "Description 3",
            completed:Boolean,
            priority: "high",
            Notification: 2
        },
        {
            id: 4,
            name: "send the document Task 4",
            createDate:"2023-09-25",
            Deadline:"2023-10-01",
            description: "Description 4",
            completed:Boolean,
            priority: "medium",
            Notification: 2
        },
        {
            id: 5,
            name: "Task 5",
            description: "Description 5",
            status: "pending",
            priority: "medium"
        },
        {
            id: 6,
            name: "Task 6",
            description: "Description 6",
            status: "pending",
            priority: "low"
        },
        {
            id: 7,
            name: "Task 7",
            description: "Description 7",
            status: "pending",
            priority: "low"
        },
        {
            id: 8,
            name: "Task 8",
            description: "Description 8",
            status: "pending",
            priority: "high"
        },
        {
            id: 9,
            name: "Task 9",
            description: "Description 9",
            status: "pending",
            priority: "high"
        },
        {
            id: 10,
            name: "Task 10",
            description: "Description 10",
            status: "pending",
            priority: "medium"
        },
        {
            id: 11,
            name: "Task 11",
            description: "Description 11",
            status: "pending",
            priority: "low"
        }
    ];

    const handleSort = (type) => {
      let sortedTasksData;

      if (type === "alphabetical") {
          sortedTasksData = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
      } else if (type === "createDate") {
          sortedTasksData = [...tasks].sort((a, b) => new Date(a.createDate) - new Date(b.createDate));
      }
      else if (type === "deadline") {
        sortedTasksData = [...tasks].sort((a, b) => new Date(a.Deadline) - new Date(b.Deadline));
      }

      setSortedTasks(sortedTasksData);
      setSortType(type);
  };


    return(
        <>
            <Nav />
            <div className="homepage-wrapper pb-5">
                <div className="container-fluid">
                    <div className="row d-flex flex-column align-items-center mt-2">
                        <div className="btn-group">
                            <div
                                className="dropdown-toggle  m-3"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Views
                            </div>
                            <div className="dropdown-menu">
                                <button
                                className="dropdown-item"
                                onClick={() => {
                                    setView("list");
                                }}
                                >
                                List View
                                </button>
                                <button
                                className="dropdown-item"
                                onClick={() => {
                                    setView("grid");
                                }}
                                >
                                Grid View
                                </button>
                                <button
                                className="dropdown-item"
                                onClick={() => {
                                    setView("calendar");
                                }}
                                >
                                Calendar View
                                </button>
                            </div>
                            <div
                                className="dropdown-toggle m-3"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by
                            </div>
                            <div className="dropdown-menu">
                                <button
                                className="dropdown-item"

                                onClick={() => handleSort("alphabetical")}
                                >
                                Alphabetical
                                </button>

                                <button
                                className="dropdown-item"
                                onClick={() => handleSort("createDate")}
                                >
                                Created date
                                </button>
                                <button
                                className="dropdown-item"
                                onClick={() => handleSort("deadline")}
                                >
                                Deadline
                                </button>
                            </div>
                            <div
                                className="dropdown-toggle m-3"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Filter by
                            </div>
                            <div className="dropdown-menu">
                                <button
                                className="dropdown-item"
                                >
                                Category
                                </button>
                                <button
                                className="dropdown-item"
                                >
                                Priority
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                { view==="grid" && 
                <div className="container-fluid grid-view">
                    <div className="row">
                        { sortedTasks ? (sortedTasks.map((task) =>(
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={task.id}>
                          <div className="card my-3">
                              <div className="card-body">
                                  <h5 className="card-title">{task.name}</h5>
                                  <p className="card-text">{task.description}</p>
                                  <p className="create-date">Create Date: {task.createDate}</p>
                                  <p className="deadline">Deadline: {task.Deadline}</p>
                                  <button className="btn btn-primary">View</button>
                              </div>
                          </div>
                      </div>
                        ))
                        ):(
                        tasks.map((task) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={task.id}>
                                <div className="card my-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{task.name}</h5>
                                        <p className="card-text">{task.description}</p>
                                        <p className="create-date">Create Date: {task.createDate}</p>
                                        <p className="deadline">Deadline: {task.Deadline}</p>
                                        <button className="btn btn-primary">View</button>
                                    </div>
                                </div>
                            </div>
                        ))
                      )}
                    </div>
                </div>
                }
                {view === "list" && (
                <div className="container-fluid list-view">
                    <div className="row d-flex flex-column align-items-center">
                     {sortedTasks ? (sortedTasks.map((task) => (
                        <div className="col-8 m-3" key={task.id}>
                        <div className="card">
                            <div className="card-body d-flex justify-content-between align-items-center">
                            <div style={{width:"70%"}}>
                            <h5 className="">{task.name}</h5>
                            <p className="create-date">Create Date: {task.createDate}</p>
                            <p className="deadline">Deadline: {task.Deadline}</p>
                            </div>
                            <div>
                            <span className={`priority-tag priority-${task.priority.toLowerCase()} me-2`}>
                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1).toLowerCase()}
                            </span>
                            <button className="btn btn-primary">View</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))
                  ):(
                    tasks.map((task)=>(
                      <div className="col-8 m-3" key={task.id}>
                      <div className="card">
                          <div className="card-body d-flex justify-content-between align-items-center">
                              <div style={{ width: "70%" }}>
                                  <h5 className="">{task.name}</h5>
                                  <p className="create-date">Create Date: {task.createDate}</p>
                                  <p className="deadline">Deadline: {task.Deadline}</p>
                              </div>
                              <div>
                                  <span className={`priority-tag priority-${task.priority.toLowerCase()} me-2`}>
                                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1).toLowerCase()}
                                  </span>
                                  <button className="btn btn-primary">View</button>
                                </div>
                                </div>
                              </div>
                              </div>
                              ))
                          )}
                      </div>
                  </div>
                )}
        
                { view==="calendar" &&
                <div className="container-fluid">
                    <div className="row d-flex flex-column align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    Calendar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
            <Footer />
        </>
    );
}

export default Homepage;
// LOCAL STORAGE
let taskArray = [];
let projectArray = [];

const fLocalStorage = (() => {

    const saveLocalStorage = () => {
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
        localStorage.setItem("projectArray", JSON.stringify(projectArray));
    }
    
    function getLocalStorage() {
        let storageTask = JSON.parse(localStorage.getItem("taskArray"));
        let storageProject = JSON.parse(localStorage.getItem("projectArray"));

        if (storageTask != taskArray) {
            taskArray = [];
            taskArray.push(...storageTask);
        }
        if (storageProject) {
            projectArray = [];
            projectArray.push(...storageProject);
        }
    }

    return { saveLocalStorage, getLocalStorage }
})();    

export { 
    fLocalStorage as fLocalStorage,
    taskArray as taskArray,
    projectArray as projectArray
};
let taskArray = [];
let projectArray = [];

// LOCAL STORAGE
const fLocalStorage = (() => {
    const saveLocalStorage = () => {
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
        localStorage.setItem('projectArray', JSON.stringify(projectArray));
    };

    const getLocalStorage = () => {
        const storageTask = JSON.parse(localStorage.getItem('taskArray'));
        const storageProject = JSON.parse(localStorage.getItem('projectArray'));

        if (storageTask !== taskArray) {
            taskArray = [];
            taskArray.push(...storageTask);
        }
        if (storageProject) {
            projectArray = [];
            projectArray.push(...storageProject);
        }
    }

    return { saveLocalStorage, getLocalStorage };
})();

export {
    fLocalStorage as fLocalStorage,
    taskArray as taskArray,
    projectArray as projectArray
};

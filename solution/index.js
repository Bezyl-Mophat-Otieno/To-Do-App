// Event Listener for on submit ;
// Declare an array that will hold the tasks;
let tasks = [];

 // Deaclare a checkbox element;
 let checkBox = document.querySelector('#checkbox');

 
// Declare a form element;
let form = document.querySelector('#form');
 form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let input = document.querySelector('#task');
    let task = input.value;

    if(task){
        task = {
            task:task,
            checked:checkBox.checked
        }

        tasks = [...tasks,task];
        // Resetting the inputs;
        input.value =''
        checkBox.checked=false

        //initializing the count of the incomplete tasks;
        let count = 0;
        // check if stats exists
        let stats = document.querySelector('.stats');
        if(stats){
                while (stats.firstChild) {
                    stats.removeChild(stats.firstChild);
                } 
        }else{
            
        }
        // Accessing the incomplete task container
        writeDom(tasks,count);

    }
 })

//Function the handles writing the elements to the dom .
const writeDom = (tasks,count)=>{
    let tasksList = document.querySelector('.listItems');
    tasksList.innerHTML = '';
       // creaete the stats container
       let stats = document.createElement('div')
       stats.className = 'stats';
       
    // Count completed tasks;
    tasks.forEach((task)=>{
        if(task.checked){
            count++
        }


    
        // This div will act as a container for holding the task group including the checkbox and the task content;
        let taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';

        //This is a div holding a single task content;
        let individualTask = document.createElement('div');
        individualTask.className = 'individualTask'; 
        //creating a checkbox element;
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');

     
        // create the incomplete tasks container
        // let incompleteTasksContainer = document.createElement('div');
        // incompleteTasksContainer.className = 'incompleteTasks';
        // incompleteTasksContainer.innerText = `${count} items left`;

        //create the clear button
        // let clearButton = document.createElement('button');
        // clearButton.className = 'clearBtn';
        // clearButton.innerText = 'Clear';

        // Setting the checkbox to the value of the task checked property;
        checkBox.checked = task.checked;  
        // Setting the task content to the value of the task task property;    
        individualTask.innerHTML = task.task;

        // Appending the checkbox and the task content to the task container;
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(individualTask);

        //Appending the children to the stats container;
        // stats.appendChild(incompleteTasksContainer);
        // stats.appendChild(clearButton);
        
        
        // Finially append the task container to the task list;
        tasksList.appendChild(taskContainer);
        // tasksList.appendChild(stats);

        //Write the dom to reflect on the incompleted tasks count;



        
        if(checkBox.checked){
            individualTask.style.textDecoration = 'line-through';
        }else{
            individualTask.style.textDecoration = 'none';
        }

        // changing the style of the task content when the checkbox is checked;
        checkBox.addEventListener('change',()=>{
            if(individualTask.style.textDecoration === 'none'){
                individualTask.style.textDecoration = 'line-through';
            }else{
                individualTask.style.textDecoration = 'none';
            }
        })

      
 
    })
    //modify the count completed tasks;
    // incompleteTasksContainer.innerText = `You have ${count} incomplete tasks`;
    // console.log(incompleteTasksContainer)


}

// const clearChildren = () => {
//     const parent = document.querySelector('parent');
//     while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//     }
// }

let displayAll = document.querySelector('.all');
displayAll.addEventListener('click',()=>{

    let tasksList = document.querySelector('.listItems');
    tasksList.innerHTML = '';
    tasks.forEach((task)=>{

        // This div will act as a container for holding the task group including the checkbox and the task content;
        let taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';

        //This is a div holding a single task content;
        let individualTask = document.createElement('div');
        individualTask.className = 'individualTask'; 
        //creating a checkbox element;
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');


        // Setting the checkbox to the value of the task checked property;
        checkBox.checked = task.checked;  
        // Setting the task content to the value of the task task property;    
        individualTask.innerHTML = task.task;

        // Appending the checkbox and the task content to the task container;
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(individualTask);

        
        // Finially append the task container to the task list;
        tasksList.appendChild(taskContainer);

        //Write the dom to reflect on the incompleted tasks count;

        if(checkBox.checked){
            individualTask.style.textDecoration = 'line-through';
        }else{
            individualTask.style.textDecoration = 'none';
        }

        // changing the style of the task content when the checkbox is checked;
        checkBox.addEventListener('change',()=>{
            if(individualTask.style.textDecoration === 'none'){
                individualTask.style.textDecoration = 'line-through';
            }else{
                individualTask.style.textDecoration = 'none';
            }
        })

      
 
    })

})



let displayActive = document.querySelector('.active');
displayActive.addEventListener('click',()=>{

    let tasksList = document.querySelector('.listItems');
    tasksList.innerHTML = '';
    tasks.forEach((task)=>{

        if(task.checked === false){

        // This div will act as a container for holding the task group including the checkbox and the task content;
        let taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';

        //This is a div holding a single task content;
        let individualTask = document.createElement('div');
        individualTask.className = 'individualTask'; 
        //creating a checkbox element;
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');


        // Setting the checkbox to the value of the task checked property;
        checkBox.checked = task.checked;  
        // Setting the task content to the value of the task task property;    
        individualTask.innerHTML = task.task;

        // Appending the checkbox and the task content to the task container;
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(individualTask);

        
        // Finially append the task container to the task list;
        tasksList.appendChild(taskContainer);

        //Write the dom to reflect on the incompleted tasks count;

        if(checkBox.checked){
            individualTask.style.textDecoration = 'line-through';
        }else{
            individualTask.style.textDecoration = 'none';
        }

        // changing the style of the task content when the checkbox is checked;
        checkBox.addEventListener('change',()=>{
            if(individualTask.style.textDecoration === 'none'){
                individualTask.style.textDecoration = 'line-through';
            }else{
                individualTask.style.textDecoration = 'none';
            }
        })

    }else{
        return;
    }
 
    })

})



let displayCompleted = document.querySelector('.completed');
displayCompleted.addEventListener('click',()=>{

    let tasksList = document.querySelector('.listItems');
    tasksList.innerHTML = '';
    tasks.forEach((task)=>{

        if(task.checked === true){

        // This div will act as a container for holding the task group including the checkbox and the task content;
        let taskContainer = document.createElement('div');
        taskContainer.className = 'taskContainer';

        //This is a div holding a single task content;
        let individualTask = document.createElement('div');
        individualTask.className = 'individualTask'; 
        //creating a checkbox element;
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');


        // Setting the checkbox to the value of the task checked property;
        checkBox.checked = task.checked;  
        // Setting the task content to the value of the task task property;    
        individualTask.innerHTML = task.task;

        // Appending the checkbox and the task content to the task container;
        taskContainer.appendChild(checkBox);
        taskContainer.appendChild(individualTask);

        
        // Finially append the task container to the task list;
        tasksList.appendChild(taskContainer);

        //Write the dom to reflect on the incompleted tasks count;

        if(checkBox.checked){
            individualTask.style.textDecoration = 'line-through';
        }else{
            individualTask.style.textDecoration = 'none';
        }

        // changing the style of the task content when the checkbox is checked;
        checkBox.addEventListener('change',()=>{
            if(individualTask.style.textDecoration === 'none'){
                individualTask.style.textDecoration = 'line-through';
            }else{
                individualTask.style.textDecoration = 'none';
            }
        })

    }else{
        return;
    }
 
    })

})

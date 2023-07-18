// Event Listener for on submit ;
// Declare an array that will hold the tasks;
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


 // Deaclare a checkbox element;
 let checkBox = document.querySelector('#checkbox');
 let errorDiv = document.querySelector('.erroDiv');
 let html =''
 
 let errorOccured = JSON.parse(localStorage.getItem('errorOccured'));

 // Declare a form element;
 let form = document.querySelector('#form');
 form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let input = document.querySelector('#task');
    let task = input.value;
    //This method trims all the spaces 
    let notSpace =  task.trim();
    if(notSpace){

        
        task = {
            task:task,
            checked:checkBox.checked
        }

        tasks = [...tasks,task];
        // Store the tasks on Local storage
        localStorage.setItem('tasks',JSON.stringify(tasks));
        // Resetting the inputs;
        input.value =''
        checkBox.checked=false

        //initializing the count of the incomplete tasks;
        let count = 0;

        // Accessing the incomplete task container
        writeDom(tasks,count);

        // store the errorOccured value in localstorage
        errorOccured = false;
        localStorage.setItem('errorOccured',JSON.stringify(errorOccured));
    }else{

        // store the errorOccured value in localstorage 
         errorOccured = true;
        localStorage.setItem('errorOccured',JSON.stringify(errorOccured));
    }
 })
// 
console.log(errorOccured)
if(errorOccured===true){
    // console.log('error occured')
   html+=`
   <div class="error">Task cannot be empty</div>
   `;
   errorDiv.innerHTML = html;
}else{
    // console.log('no error')

    html+=``;
    errorDiv.innerHTML = html;
}

//Function the handles writing the elements to the dom .
const writeDom = (tasks,count)=>{
    let tasksList = document.querySelector('.listItems');
    tasksList.innerHTML = '';

    // Count completed tasks;
    tasks.forEach((task)=>{
        if(!task.checked){
            count++
        }else{
            count = count;
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
        let incompleteTasks = document.querySelector('.incompleteTasks');
        incompleteTasks.innerHTML = `${count} items left`;
        
        if(checkBox.checked){
            individualTask.style.textDecoration = 'line-through';
        }else{
            individualTask.style.textDecoration = 'none';
        }

        // changing the style of the task content when the checkbox is checked;
        checkBox.addEventListener('change',()=>{
            if(individualTask.style.textDecoration === 'none'){
                    task.checked = true
                    count--;
                    incompleteTasks.innerHTML = `${count} items left`;

                individualTask.style.textDecoration = 'line-through';
            }else{
                task.checked = false
                individualTask.style.textDecoration = 'none';
                count++;
                incompleteTasks.innerHTML = `${count} items left`;
            }
        })

      
 
    })


}

// Initializa the dom
writeDom(tasks,0);

let displayAll = document.querySelector('.all');
displayAll.addEventListener('click',()=>{
    let count = 0;
    writeDom(tasks,count)
})



let displayActive = document.querySelector('.active');
displayActive.addEventListener('click',()=>{
    

    let activeItems = tasks.filter((task)=>task.checked === false);
    let count = 0;
    writeDom(activeItems,count);

})



let displayCompleted = document.querySelector('.completed');
displayCompleted.addEventListener('click',()=>{
    let completedItems = tasks.filter((task)=>task.checked === true);
    let count = 0;
    writeDom(completedItems,count);
})


// let clearBtn = document.querySelector('.clear');

// clearBtn.addEventListener('click',()=>{
//     let tasksList = document.querySelector('.listItems');
//     while (tasksList.firstChild) {
//         tasksList.removeChild(tasksList.firstChild);
//          //Write the dom to reflect on the incompleted tasks count;
//          let incompleteTasks = document.querySelector('.incompleteTasks');
//          incompleteTasks.innerHTML = `0 items left`;
//          tasks = [];
//     }

// })

let clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click',()=>{
    let tasksList = document.querySelector('.listItems');

    tasks.forEach((task)=>{
        if(task.checked){
        tasksList.removeChild(tasksList.firstChild);
          let activeItems = tasks.filter((task)=>task.checked === false);
            tasks = activeItems;
        }
    })
  
  


})












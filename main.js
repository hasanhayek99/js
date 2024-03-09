
let tasks = [ 
    {
        "title" : "قراءة كتاب", 
        "date" : "15/10/2020",
        "isDone" : false
    },
    {
        "title" : " انهاء المشروع" , 
        "date" : "15/10/2020" ,
        "isDone" : false 
    },
    {
        "title" : "انهاء الكورس" , 
        "date" : "15/10/2020" ,
        "isDone" : false 
    },
] 

// document.getElementById("tasks").innerHTML = "" ;

var ss = 5
document.getElementById("tasks").innerHTML = `
<!-- tasks info -->
                                    <div style="width: 70%;">
                                       <h2> ${tasks} </h2>

                                       <div>

                                          <span>${ss}</span>
                                       </div>
                                    </div>
                                    <!-- tasks info -->
                                        <!-- tasks actions -->
                                          <div style="display: flex;justify-content: space-between;text-align: center; width: 20%;color: white;">
                                             <button class="circular" style="background: rgb(124, 33, 33); color: white;">d</button>

                                             <button class="circular" style="background: rgb(124, 33, 33); color: white;">c</button>

                                             <button class="circular" style="background: rgb(124, 33, 33); color: white;">e</button>
                                          </div>
                                         <!-- tasks actions //-->

                                 </div>

` ;
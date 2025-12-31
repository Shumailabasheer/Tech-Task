import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,

  db,
  addDoc,
  collection,
  serverTimestamp,

  where,
  getDocs,
  query,
    deleteDoc,
     onSnapshot,
       doc


} from "./firebase.config.js";

////================== signup ===========================//
//==== add sb input for firestore database//////
const signUp = async () => {
 let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  try{
  const userCredential =await createUserWithEmailAndPassword(auth, email, password) //signup krwa rhy ha
  const user =userCredential.user //mujhy is user chahiye is liye .user likha ,currently signin user mile ga
console.log(user);


  } catch(error){
    console.log(error)
  }
}
document.getElementById("btn")?.addEventListener("click" ,signUp)



//....===step-2 Sign in a user with an email address and password(login)====........
const login = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
     console.log(userCredential.user);
     //....Send a user a verification email..//
  
if (!auth.currentUser.emailVerified) {  //check karta hai user ka email verified hai ya nahi
    console.log(auth.currentUser);   //Unverified user ka data print karna

      await sendEmailVerification(auth.currentUser);//currently sign in user mil jae ga email verify
      console.log("email sent successfully");
    } else {
      window.location.replace("/")

    }
    

  } catch (error) {
    console.log(error);

  }

}

document.getElementById("btn2")?.addEventListener("click", login);


///========================Task Add======================//

document.getElementById("addTask").addEventListener("click", async () => {
  const title = document.getElementById("taskTitle").value;
console.log(title)
  if (!title) 
    return alert("Task likho");

  await addDoc(collection(db, "tasks"), {
    uid: auth.currentUser.uid,
    title,
    createdAt: serverTimestamp()
  });

  document.getElementById("taskTitle").value = "";
});

///======================Tasks Show=========================//


async function deleteTask(taskId) {
  try {
    const taskRef = doc(db, "tasks", taskId);
    await deleteDoc(taskRef);
    console.log("Task deleted:", taskId);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}
//////====Show Tasks (with Delete Icon)========//

const taskList = document.getElementById("taskList");

onSnapshot(collection(db, "tasks"), (snapshot) => {
  taskList.innerHTML = ""; // UI refresh

  snapshot.forEach((docSnap) => {
    const task = docSnap.data();
    const taskId = docSnap.id;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = task.title;

    // 🗑 Delete Icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash delete-btn";

    deleteIcon.addEventListener("click", async () => {
      if (confirm("Delete this task?")) {
        await deleteTask(taskId);
      }
    });

    li.appendChild(span);
    li.appendChild(deleteIcon);
    taskList.appendChild(li);
  });
});


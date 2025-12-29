import { auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut
} from "./firebase.config.js";

////================== signup ===========================//
//==== add sb input for firestore database//////
const signUp = async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;   //new add
  let contact = document.getElementById("contact").value;
  let age = document.getElementById("age").value;

 let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;

  try{
  const userCredential =await createUserWithEmailAndPassword(auth, email, password) //signup krwa rhy ha
  const user =userCredential.user //mujhy is user chahiye is liye .user likha ,currently signin user mile ga
console.log(user);

await setDoc(doc(db, "users", user.uid), {   //firestore setDoc

      name,    ///key value same name ka ho to single name bhi likh sakta ha
      age,
      contact,
      email,
      isActive: true,
      timestamp: serverTimestamp(),  //time show kare ga jis time user creat ya update ho ga
      role: "user",
    });

    //verification kare ga phir uska bad kisi page ko visit kare
if(!user.emailVerified){   //agr email verif ni ha..
       await sendEmailVerification(auth.currentUser);   //user creat ho kr ae verify email send ho ja..
      signOut(auth);//signout krwa dena or login page pr chala jae
      alert("Please verify your email")    //alert msg show
    window.location.replace("/html/login.html");  //kis page pr chale jana
    }
  } catch(error){
    console.log(error)
  }
}
// document.getElementById("btn")?.addEventListener("click" ,signUp)

document.getElementById("signup-form")?.addEventListener("submit" ,signUp)   ///ya line form ko submite hone sy roke gi


//....===step-2 Sign in a user with an email address and password(login)====........
const login = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("pswd").value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
     console.log(userCredential.user);
     //....Send a user a verification email..//
  
if (!auth.currentUser.emailVerified) {  //check karta hai user ka email verified hai ya nahi
      //console.log(auth.currentUser);   //Unverified user ka data print karna

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

///=====....................forget-paswd....================///////////////
const forgetPassword = async () => {
  try {
    const email = document.getElementById("email").value;   //email pangwae ga yaha 
    await sendPasswordResetEmail(auth, email);   //pasw reset ka liye 2 chezain chahiye
  } catch (error) {
    console.log(error);

  }
}

document.getElementById("forget-paswd")?.addEventListener("click", forgetPassword)

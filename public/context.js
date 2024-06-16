const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const UserContext = React.createContext({
    name: "",
    email: "",
    password: "",
    balance: 0,
    auth: false,
  });


  const firebaseConfig = {
     //   add your own firebase private key
       };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication and get a reference to the service
  const auth = firebase.auth();
  
  function UserProvider({ children }) {
    const [user, setUser] = React.useState({
      name: "maria",
      email: "",
      password: "",
      balance: 0,
      auth: false,
    });
  
    const login = (name, email, password, balance) => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const email = user.email;
  
          // ...
          setUser((user) => ({
            name: name,
            email: email,
            password: password,
            balance: balance,
            auth: true,
          }));
          console.log("user.email from context:", user.email);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    };
  
    const signOut = () => {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          setUser((user) => ({
            name: "",
            email: "",
            password: "",
            balance: "",
            auth: false,
          }));
        })
        .catch((error) => {
          // An error happened.
        });
    };
  
    function signUp(name, email, password, balance) {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("user Credentials:", userCredential);
          // Signed in
          const user = userCredential.user;
          // ...
          const email = user.email;
          // ...
          setUser((user) => ({
            name: name,
            email: email,
            password: password,
            balance: balance,
            auth: false,
          }));
          console.log("user.email from context:", user.email);
        })
        .catch((error) => {
          console.log(error.message);
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    }
  
    const getUser = (name, email, password, balance) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("user", user);
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/v8/firebase.User
          var uid = user.uid;
          // The user object has basic properties such as display name, email, etc.
  
          const email = user.email;
          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getIdToken() instead.
          const idToken = user.getIdToken();
  
          // ...
          setUser((user) => ({
            name: name,
            email: email,
            password: password,
            balance: balance,
            auth: true,
          }));
        } else {
          // User is signed out
          // ...
          console.log("User is not logged in");
        }
      });
    };
  
    const value = {
      setUser,
      user,
      getUser,
      login,
      signOut,
      signUp,
    };
  
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  }

  


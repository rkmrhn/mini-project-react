import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyTodo from "./pages/MyTodo";
import MyRegistration from "./pages/MyRegistration";
import MyTodoList from "./pages/MyTodoList";
import MyUserList from "./pages/MyUserList";
import ValidationDemo from "./pages/ValidationDemo";
import AppHome from "./pages/AppHome";
import MyFooter from "./pages/MyFooter";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AppLogin from "./pages/AppLogin";
import MyNavigationLinks from "./pages/MyNavigationLinks";
import AdminLogin from "./pages/AdminLogin";
import AdminPage from "./pages/AdminPage";
import Zulubar from "./pages/Zulubar";
import TripleChocolate from "./pages/TripleChocolate";
import ChocolateCone from "./pages/ChocolateCone";
import Aam from "./pages/Aam";
import QueryList from "./pages/QueryList";

function App() {
  return (
    <>
      <body
        style={{
          backgroundImage: "url(./images/1.png)",
          height: "100%",
        }}
      >
        <BrowserRouter>
          <MyNavigationLinks />

          <Routes>
            {/** 1 Route means 1 Page */}
            <Route path="/" element={<AppLogin />} />
            <Route path="/login" element={<AppLogin />} />

            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/adminpage" element={<AdminPage />} />
            {/** Private Needs Protection */}
            <Route path="/addproduct" element={<MyTodo />} />
            <Route path="/home" element={<AppHome />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/registration" element={<MyRegistration />} />
            <Route path="/user-list" element={<MyUserList />} />
            <Route path="/query-list" element={<QueryList />} />
            <Route path="/product-list" element={<MyTodoList />} />
            <Route path="/validation-demo" element={<ValidationDemo />} />
            <Route path="/zulubar" element={<Zulubar />} />
            <Route path="/triplechocolate" element={<TripleChocolate />} />
            <Route path="/chocolatecone" element={<ChocolateCone />} />
            <Route path="/aam" element={<Aam />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </body>
    </>
  );
}
// lets protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
}

export default App;

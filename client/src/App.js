import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./Routes/loginPage";
import InitialPage from "./Routes/initialPage";
import SignupPage from "./Routes/signUpPage";
import HomePage from "./Routes/homePage";
import Loading from "./components/Loading";
import ImageUpload from "./components/ImageUpload";
import DetailPage from "./Routes/DetailPage";
import EditMyInfoPage from "./Routes/EditMyInfoPage";
import EditPassword from "./Routes/EditPasswordPage";
import MainPage from "./Routes/MainPage";
import Myprofile from "./Routes/MyProfilePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/initial" element={<InitialPage />} />
            <Route path="/main" element={<MainPage />} />

            <Route path="/image" element={<ImageUpload />} />

            <Route path="/detail" element={<DetailPage />} />
            <Route path="/editPassword" element={<EditPassword />} />
            <Route path="/editMyInfo" element={<EditMyInfoPage />} />
            <Route path="/Myprofile" element={<Myprofile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

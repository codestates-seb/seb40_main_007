import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./Routes/loginPage";
import LogoutPage from "./Routes/logoutPage";
import InitialPage from "./Routes/initialPage";
import SignupPage from "./Routes/signUpPage";
import HomePage from "./Routes/homePage";
import Loading from "./components/Loading";
import ImageUpload from "./components/ImageUpload";
import MainPage from "./Routes/mainPage";
import MyProfilePage from "./Routes/myPages/myProfilePage";
import EditMyInfoPage from "./Routes/myPages/editMyInfoPage";
import EditPasswordPage from "./Routes/myPages/editPasswordPage";
import MyCommentPage from "./Routes/myCommentPage";
import EditPage from "./Routes/editPage";
import PostPage from "./Routes/postPage";

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
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/initial" element={<InitialPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/image" element={<ImageUpload />} />
            <Route path="/mypage" element={<MyProfilePage />} />
            <Route path="/mypage/editmyinfo" element={<EditMyInfoPage />} />
            <Route path="/mypage/editpassword" element={<EditPasswordPage />} />
            <Route path="/mypage/mycomment" element={<MyCommentPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

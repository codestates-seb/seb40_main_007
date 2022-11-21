import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import LoginPage from "./Routes/loginPage";
import LogoutPage from "./Routes/logoutPage";
import InitialPage from "./Routes/initialPage";
import SignupPage from "./Routes/signupPage";
import SignoutPage from "./Routes/signoutPage";
import HomePage from "./Routes/homePage";
import Loading from "./components/Loading";
import ImageUpload from "./components/ImageUpload";
import MainPage from "./Routes/mainPage";
import EditPage from "./Routes/editPage";
import PostPage from "./Routes/postPage";
import DetailPage from "./Routes/detailPage";
import NotFoundPage from "./Routes/notFound";
// myPages
import MyProfilePage from "./Routes/myPages/myProfilePage";
import EditMyInfoPage from "./Routes/myPages/editMyInfoPage";
import EditPasswordPage from "./Routes/myPages/editPasswordPage";
import MyCommentPage from "./Routes/myPages/myCommentPage";
import MyPostPage from "./Routes/myPages/myPostPage";
import MyTravelPage from "./Routes/myPages/myTravelPage";

// 로그인 테스트용입니다.
import { useRecoilState } from "recoil";
import { loginOk } from "./atoms/loginTest";

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
  // 로그인 테스트용입니다.
  const [, setLogin] = useRecoilState(loginOk);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/login" element={<LoginPage/>} /> */}
            {/* 로그인 테스트용입니다. */}
            <Route path="/login" element={<LoginPage setLogin={setLogin} />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signout" element={<SignoutPage />} />
            <Route path="/initial" element={<InitialPage />} />
            <Route path="/main/:id" element={<MainPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/image" element={<ImageUpload />} />
            <Route path="/mypage" element={<MyProfilePage />} />
            <Route path="/mypage/editmyinfo" element={<EditMyInfoPage />} />
            <Route path="/mypage/editpassword" element={<EditPasswordPage />} />
            <Route path="/mypage/mypost" element={<MyPostPage />} />
            <Route path="/mypage/mycomment" element={<MyCommentPage />} />
            <Route path="/mypage/mytravel" element={<MyTravelPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

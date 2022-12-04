import { Suspense, useEffect } from "react";
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
import Callback from "./Routes/callback";
import ForgotPassword from "./Routes/forgotPassword";
import AdminReportPage from "./Routes/adminReportPage";
// myPages
import MyProfilePage from "./Routes/myPages/myProfilePage";
import EditMyInfoPage from "./Routes/myPages/editMyInfoPage";
import EditPasswordPage from "./Routes/myPages/editPasswordPage";
import MyCommentPage from "./Routes/myPages/myCommentPage";
import MyPostPage from "./Routes/myPages/myPostPage";
import MyTravelPage from "./Routes/myPages/myTravelPage";
import swal from "sweetalert";
//admin
import AdminData from "./Routes/adminData";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
      refetchOnWindowFocus: false,
    },
  },
});

import axios from "axios";
import { useRecoilState } from "recoil";
import {
  accessToken,
  refreshToken,
  userAvatar,
  userId,
  userName,
  userEmail,
  isSocial,
  isAdmin,
} from "./atoms/loginData";

function App() {
  const [TOKEN, setAccessToken] = useRecoilState(accessToken);
  const [refresh, setRefreshToken] = useRecoilState(refreshToken);
  const [, setUserAvatar] = useRecoilState(userAvatar);
  const [, setUserId] = useRecoilState(userId);
  const [, setUserName] = useRecoilState(userName);
  const [, setUserEmail] = useRecoilState(userEmail);
  const [, setIsSocial] = useRecoilState(isSocial);
  const [, setAdmin] = useRecoilState(isAdmin);

  const onSilentRefresh = () => {
    console.log("refresh", refresh);
    if (TOKEN !== "" && refresh !== "") {
      const reConfig = {
        headers: {
          RefreshToken: refresh,
        },
      };
      axios
        .post(
          `${process.env.REACT_APP_URL}/members/refresh-token`,
          {},
          reConfig
        )
        .then((response) => {
          console.log("액세스토큰갱신");
          setAccessToken(response.headers.authorization);
          setTimeout(onSilentRefresh, 1200000); //1200000 면 20분 이다. 6000000면 10분
        })
        .catch((error) => {
          console.log("error", error.code);
          swal(
            "Expired!",
            "로그인이 만료되었습니다. 재 로그인이 필요합니다",
            "warning"
          ).then(() => {
            axios
              .post(
                `${process.env.REACT_APP_URL}/members/logout`,
                {},
                {
                  headers: { Authorization: TOKEN },
                }
              )
              .then(() => {
                setAccessToken("");
                setRefreshToken("");
                setUserAvatar("");
                setUserId("");
                setUserName("");
                setUserEmail("");
                setIsSocial(false);
                setAdmin(false);
                location.reload();
              })
              .catch((error) => {
                console.log(error);
                setAccessToken("");
                setRefreshToken("");
                setUserAvatar("");
                setUserId("");
                setUserName("");
                setUserEmail("");
                setIsSocial(false);
                setAdmin(false);
                location.reload();
              });
          });
        });
    } else {
      return;
    }
  };
  useEffect(() => {
    onSilentRefresh();
  }, [refresh]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signout" element={<SignoutPage />} />
            <Route path="/initial" element={<InitialPage />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/main/:id" element={<MainPage />} />
            <Route path="/detail/:detailId" element={<DetailPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/image" element={<ImageUpload />} />
            <Route path="/mypage" element={<MyProfilePage />} />
            <Route path="/mypage/editmyinfo" element={<EditMyInfoPage />} />
            <Route path="/mypage/editpassword" element={<EditPasswordPage />} />
            <Route path="/mypage/mypost" element={<MyPostPage />} />
            <Route path="/mypage/mycomment" element={<MyCommentPage />} />
            <Route path="/mypage/mytravel" element={<MyTravelPage />} />
            <Route path="/admin/data" element={<AdminData />} />
            <Route path="/callback/*" element={<Callback />} />
            <Route path="/admin/report" element={<AdminReportPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

// components/PrivateRoute.js
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = !!localStorage.getItem("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIyLCJ0eXBlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzQwNzQzNTk5LCJleHAiOjE3NDA4MDM1OTksImF1ZCI6Imh0dHBzOi8vZGV2LmRleHRhLmlvIiwiaXNzIjoiMjdjYWY1MmMtZjFhMy00YTlkLTg5NDItYmIxMzM2MDM5OWY0Iiwic3ViIjoiYmthcmFtYXQrZGV2ZW50ZXJhZnRlckBjb2RlLWZyZWFrcy5jb20ifQ.m6eZyjs0tEAMgZ1SoR2AUJX6OGRgChfj9CTLmfyQwfyyi-hm_DW2QXhtsaaHxrCuXz-QyNGU6ia2oSPg_rriEkRj5snJ_2d53yIvNePHaKpJCVUX9_fiVwiQdXX9rNRhcf1XK9rWfI-KR-GtigkPUdyymB8HWoBwILx9vKjrKaWJCd5mYVAGM7BqkX4iHEGeGCUBytLVi4N3SdLma5x9qR1xPZ2UUObsdkUQWH7df1Pl8BaQs1DjTGDVV2_Ian5kTvyDM63s6AeOvPGtgqW7-kwi1CmynygtwMQcxU0gZv1QPOjthXZE-kKoNhOwqdcamb3MVC6tH01OwG0FGvuuGw"); // 
  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;

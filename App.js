import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPopular } from "./features/movies/movies-actions";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();


  return (
    <>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;

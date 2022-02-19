import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPopular } from "./features/movies/movies-actions";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import MovieDetail from "./components/Movies/MovieDetail";

function App() {


  return (
    <>
      <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
      </Layout>
    </>
  );
}

export default App;

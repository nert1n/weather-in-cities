import React, { useState } from 'react'
import { privateRoutes } from '../router'
import { publicRoutes } from './../router/index';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error from './UI/Error/Error';
import { useSelector } from 'react-redux';

export default function AppRouter() {
    const isAuth = useSelector((state) => state.auth.value);

    return (
        <div className="content">
        {isAuth
            ? <Routes>
            {privateRoutes.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
                exact={route.exact}
            />
            ))}
            <Route path="*" element={<Error />} />
            <Route
            path="/login"
            element={<Navigate to="/" replace />}
            />
            <Route
            path="/register"
            element={<Navigate to="/" replace />}
            />
            </Routes>
                : 
                <Routes>
                {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                    exact={route.exact}
                />
                ))}
                <Route path="*" element={<Error />} />
                {/* <Route
                path="*"
                element={<Navigate to="/login" replace />}
                /> */}
                </Routes>
            }
        </div>
    )
}

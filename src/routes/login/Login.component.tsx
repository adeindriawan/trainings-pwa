import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from 'stores/user';
import { logIn } from 'stores/app';
import { backendUrl } from 'config';

export default function Login(): JSX.Element {
  const dispatch = useDispatch();
  const signIn = () => {
    axios.post(`${backendUrl}/login`, {
      'email': 'aindriawan1@gmail.com',
      'password': 'adeindriawan'
    }).then(response => {
      const responseData = response.data.data;
      console.log(responseData);
      const userData = response.data.data.user;
      localStorage.setItem('accessToken', responseData.auth.accessToken);
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('userFName', userData.fname);
      localStorage.setItem('userLName', userData.lname);
      localStorage.setItem('userEmail', userData.email);
      dispatch(updateUser(userData));
      dispatch(logIn(true));
      Router.push('/trainings', undefined, { shallow: true });
    });
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="robots" content="noindex" />
      </Head>
      <style jsx>{ `
          *, ::after, ::before {
            box-sizing: border-box;
          }
          body {
            background-color: #212121;
            color: #fff;
            font-family: monospace, serif;
            letter-spacing: 0.05em;
          }
          h1 {
            font-size: 23px;
          }
          .form {
            width: 300px;
            padding: 64px 15px 24px;
            margin: 0 auto;
          }
          .form .control {
            margin: 0 0 24px;
          }
          .form .control input {
            width: 100%;
            padding: 14px 16px;
            border: 0;
            background: transparent;
            color: #fff;
            font-family: monospace, serif;
            letter-spacing: 0.05em;
            font-size: 16px;
          }
          .form .control input:hover, .form .control input:focus {
            outline: none;
            border: 0;
          }
          .form .btn {
            width: 100%;
            display: block;
            padding: 14px 16px;
            background: transparent;
            outline: none;
            border: 0;
            color: #fff;
            letter-spacing: 0.1em;
            font-weight: bold;
            font-family: monospace;
            font-size: 16px;
          }
          .block-cube {
            position: relative;
          }
          .block-cube .bg-top {
            position: absolute;
            height: 10px;
            background: #020024;
            background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(52, 9, 121, 1) 37%, rgba(0, 212, 255, 1) 94%);
            bottom: 100%;
            left: 5px;
            right: -5px;
            transform: skew(-45deg, 0);
            margin: 0;
          }
          .block-cube .bg-top .bg-inner {
            bottom: 0;
          }
          .block-cube .bg {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #020024;
            background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(52, 9, 121, 1) 37%, rgba(0, 212, 255, 1) 94%);
          }
          .block-cube .bg-right {
            position: absolute;
            background: #020024;
            background: rgba(0, 212, 255, 1);
            top: -5px;
            z-index: 0;
            bottom: 5px;
            width: 10px;
            left: 100%;
            transform: skew(0, -45deg);
          }
          .block-cube .bg-right .bg-inner {
            left: 0;
          }
          .block-cube .bg .bg-inner {
            transition: all 0.2s ease-in-out;
          }
          .block-cube .bg-inner {
            background: #212121;
            position: absolute;
            left: 2px;
            top: 2px;
            right: 2px;
            bottom: 2px;
          }
          .block-cube .text {
            position: relative;
            z-index: 2;
          }
          .block-cube.block-input input {
            position: relative;
            z-index: 2;
          }
          .block-cube.block-input input:focus ~ .bg-right .bg-inner, .block-cube.block-input input:focus ~ .bg-top .bg-inner, .block-cube.block-input input:focus ~ .bg-inner .bg-inner {
            top: 100%;
            background: rgba(255, 255, 255, 0.5);
          }
          .block-cube.block-input .bg-top, .block-cube.block-input .bg-right, .block-cube.block-input .bg {
            background: rgba(255, 255, 255, 0.5);
            transition: background 0.2s ease-in-out;
          }
          .block-cube.block-input .bg-right .bg-inner, .block-cube.block-input .bg-top .bg-inner {
            transition: all 0.2s ease-in-out;
          }
          .block-cube.block-input:focus .bg-top, .block-cube.block-input:hover .bg-top, .block-cube.block-input:focus .bg-right, .block-cube.block-input:hover .bg-right, .block-cube.block-input:focus .bg, .block-cube.block-input:hover .bg {
            background: rgba(255, 255, 255, 0.8);
          }
          .block-cube.block-cube-hover:focus .bg .bg-inner, .block-cube.block-cube-hover:hover .bg .bg-inner {
            top: 100%;
          }
        ` }</style>
      <main>
        <form className="form">
          <div className="control">
            <h1>
        Masuk
            </h1>
          </div>
          <div className="control block-cube block-input">
            <input name="email" type="email" placeholder="email" />
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
          </div>
          <div className="control block-cube block-input">
            <input name="password" type="password" placeholder="password" />
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
          </div>
          <button className="btn block-cube block-cube-hover" name="login-button" type="button" onClick={ signIn }>
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            <div className="text">
              Log In
            </div>
          </button>
          <p>Belum punya akun? daftar <Link href="/register"><a>di sini</a></Link></p>
        </form>
      </main>
    </>
  );
}
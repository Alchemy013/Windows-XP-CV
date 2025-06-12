import React, { useState } from 'react';
import styled from 'styled-components';

function Main({ onSearch, className }) {
  const [value, setValue] = useState('');
  function onChange(e) {
    setValue(e.target.value);
  }
  function onClick() {
    onSearch(value);
  }
  function onKeyDown(e) {
    if (e.key !== 'Enter') return;
    onSearch(value);
  }

  return (
    <div className={className}>
      <nav>
        <a href="#">Web</a>
        <a href="#">Images</a>
        <a href="#">Videos</a>
        <a href="#">Maps</a>
        <a href="#">News</a>
        <a href="#">Shopping</a>
        <a href="#">Mail</a>
        <span className="right-links">
          <a href="#">iGoogle</a>
          <a href="#">Search settings</a>
          <a href="#">Sign in</a>
        </span>
      </nav>

      <main>
        <img className="logo" alt="Google" src="/Google.png" />
        <form
          onSubmit={e => {
            e.preventDefault();
            onSearch(value);
          }}
        >
          <input
            id="search"
            type="text"
            name="search"
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
            autoComplete="off"
          />
          <div className="links-row">
            <a href="#">Advanced Search</a>
            <a href="#">Language Tools</a>
          </div>
          <div className="buttons-row">
            <button type="submit">Google Search</button>
            <button type="button">I'm Feeling Lucky</button>
          </div>
          <div className="search-options">
            Search:
            <input type="radio" checked readOnly /> the web
            <input type="radio" style={{ marginLeft: 8 }} readOnly /> pages from
            the UK
          </div>
        </form>
      </main>

      <footer>
        <div className="footer-links">
          <a href="#">Advertising Programmes</a> -
          <a href="#">Business Solutions</a> -<a href="#">About Google</a> -
          <a href="#">Go to Google.com</a>
        </div>
        <div className="footer-bottom">
          ©2010 - <a href="#">Privacy</a>
        </div>
        <div className="footer-final">
          <span>Google is a trademark of Google Inc.</span>
        </div>
      </footer>
    </div>
  );
}

export default styled(Main)`
  min-height: 100vh;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
  position: relative;

  nav {
    width: 100%;
    font-size: 13px;
    padding: 7px 0 1px 7px;
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
    a {
      color: #00c;
      text-decoration: underline;
      margin-right: 13px;
      font-family: Arial, Helvetica, sans-serif;
    }
    .right-links {
      float: right;
      margin-right: 18px;
      a {
        margin-right: 9px;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 68px;
    .logo {
      width: 276px;
      margin-bottom: 23px;
      margin-top: 32px;
      user-select: none;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    input[type='text'] {
      width: 436px;
      height: 27px;
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      padding: 3px 7px;
      border: 1px solid #b9b9b9;
      border-radius: 0;
      margin-bottom: 9px;
      outline: none;
      background: #fff;
    }
    .links-row {
      width: 436px;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      a {
        color: #00c;
        font-size: 11px;
        margin-left: 16px;
        text-decoration: underline;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .buttons-row {
      display: flex;
      gap: 7px;
      margin-bottom: 7px;
      button {
        background: #f5f5f5;
        border: 1px solid #dcdcdc;
        color: #222;
        font-size: 13px;
        height: 27px;
        padding: 0 14px;
        margin: 0 2px;
        border-radius: 0;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
      }
      button:hover {
        border-color: #b9b9b9;
        background: #f0f0f0;
      }
    }
    .search-options {
      font-size: 13px;
      color: #444;
      margin-bottom: 13px;
      input[type='radio'] {
        margin: 0 4px 0 8px;
      }
    }
  }

  footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: #444;
    font-family: Arial, Helvetica, sans-serif;
    .footer-links {
      margin-bottom: 4px;
      a {
        color: #00c;
        text-decoration: underline;
        margin: 0 4px;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .footer-bottom {
      color: #666;
      font-size: 11px;
      a {
        color: #00c;
        text-decoration: underline;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
    .footer-final {
      color: #aaa;
      font-size: 10px;
      margin-top: 3px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

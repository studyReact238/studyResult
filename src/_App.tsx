import classes from "./css/CssModules.module.scss";
import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import styled from "styled-components";

export const App = () => {
  return (
    <div>
      <h1 className={classes.h1}>
        <span>01</span>Reactの前に！モダンJavaScript
      </h1>
      
      <h2>モダンJavaScript概説</h2>
      <SP>
        あいうえお
      </SP>

      <h2>DOMと仮想DOM</h2>
      <SP>
        かきくけこ
      </SP>

      <h2>パッケージマネージャー</h2>
      <SP>
        
      </SP>

      <h2>ECMAScript</h2>
      <SP>
        
      </SP>

      <h2>モジュールバンドラーとトランスパイラ</h2>
      <SP>
        
      </SP>

      <h2>SPAと従来のWebシステムの違い</h2>
      <SP>
        
      </SP>

      <Divider />

      <h1 className={classes.h1}>
        <span>02</span>モダンJavaScriptの機能
      </h1>
      
      <h2>変数宣言</h2>
      <SP>
        あいうえお
      </SP>

      <h2>テンプレート文字列</h2>
      <SP>
        あいうえお
      </SP>

      <h2>アロー関数</h2>
      <SP>
        あいうえお
      </SP>

      <h2>分割代入</h2>
      <SP>
        あいうえお
      </SP>

      <h2>デフォルト値</h2>
      <SP>
        あいうえお
      </SP>

      <h2>スプレッド構文</h2>
      <SP>
        あいうえお
      </SP>

      <h2>mapとfilter</h2>
      <SP>
        あいうえお
      </SP>

      <h2>三項演算子</h2>
      <SP>
        あいうえお
      </SP>

      <h2>論理演算子の本当の意味</h2>
      <SP>
        あいうえお
      </SP>
    </div>
  );
};

const SP = styled.p`
  padding-left: 60px;
`;
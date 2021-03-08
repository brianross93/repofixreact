import React from 'react';
import Content from './Content';
import CardComponent from './CardComponent';
import Header from './Header';

export default function HomeTab() {
  return (
    <div>
    <Header/>
    <Content/>
    <br></br>
    <CardComponent/>
    </div>
  );
}
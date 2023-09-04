import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';

const info = [
  {
    id: 1,
    title: 'Actionable insights',
    desc: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
  },
  {
    id: 2,
    title: 'Data-driven decisions',
    desc: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
  },
  {
    id: 3,
    title: 'Always affordable',
    desc: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Features info={info} />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

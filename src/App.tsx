import React from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './props/Parent';
import EventsComponent from './events/EventsComponent';
import UserSearch from './state/UserSearch';
import SearchComponent from './Component/SearchComponent/SearchComponent';
// import UserSearch from './classes/UserSearch';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className='ApplicationHomePage'>
      {/* <p>learn react</p> */}
      {/* <Parent/> */}
      {/* <UserSearch /> */}
      {/* <EventsComponent/> */}
      <SearchComponent/>
    </div>
  )
}

export default App;

import { Outlet, useHref, useNavigate } from "react-router";
import { useEffect, useReducer } from "react";
import { useLocation } from 'react-router-dom';
import { Aside, Header } from '../../components/layout/index'
import { modalStore } from '../../components/context/index'
import './_profile.scss'
const Profile = () => {
  const href = useHref();
  const nav = useNavigate();

  useEffect(() => {
    if (href === "/login") {
      setTimeout(() => {
        nav("/dashboard"); 
      }, 1800);
    }
  }, [href, nav]);

  const states = { isOpen: false,};
  const reducer = ( states, action ) => {
    switch (action.type) {
      case "CLOSE": return { ...states, isOpen: false}
      case "OPEN": return { ...states, isOpen: true}
      default: return states;
    }
  }
  const [{isOpen}, dispatch] = useReducer(reducer, states);
  const setModal = (action) => { dispatch(action)};


  const location = useLocation();

  const hideLayout = location.pathname === '/login' || (
    location.pathname !== '/' && (
      location.pathname === '/carrent' || 
      location.pathname === '/insight' || 
      location.pathname === '/reuimbers' || 
      location.pathname === '/inbox' || 
      location.pathname === '/calendar' || 
      location.pathname === '/setting' || 
      location.pathname === '/helpcenter' || 
      location.pathname === '/darkmode'
    )
  );
  
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/');
  // };
  
  return (
    <>
      <modalStore.Provider value={{isOpen, setModal}}>
       <Header />
        <main className=" bg-slate-600">
        <section className=" bg-[#F6F7F9] flex py-6">
        {!hideLayout && <Aside />}
          
            <Outlet/>
            {/* <button onClick={handleClick} id="btn"  className="fixed ms-[95%] mt-[540px] bg-slate-800  text-white text-[24px] "><i className="bi bi-house"></i></button> */}
        </section>
        </main>
      </modalStore.Provider>
    </>
  )
}

export default Profile
import { navSection } from '../../mock/nav';
import { NavLink } from 'react-router-dom';
import './_aside.scss'
const Aside = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login"
  }
  return (
    <aside className="h-[100vh] w-[200px] bg-white mt-[-27px]">
      <ul>
        <li className="ms-3">MAIN MENU</li>
      </ul>
      <ul className="flex flex-col justify-between">
        {
          navSection.length && navSection?.map((item, index)=>{
            return(
              <li key={index} >
                <NavLink to={item.path} className="flex gap-2 px-3 items-center">
                <span><i className={item.icon}></i></span>
                <h3 className="">{item.name}</h3>
                </NavLink>
              </li>
            )
          })
        }
        
      </ul>
      <ul>
        <li>
        <button onClick={()=>logOut()} className="flex items-center gap-2 mt-4"> Exit</button>

        </li>
      </ul>

    </aside>
  )
}

export default Aside
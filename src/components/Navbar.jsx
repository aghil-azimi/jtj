import React, {useState } from 'react'



const Navbar = () => {
  const [open, setOpen] = useState(true)
    
  return (
    <div className="flex">
      <div className={`${open ? "w-52" :"w-20" } w-52  h-screen bg-slate-500 relative`}>
      <img src="public/control.png" className='absolute cursor-pointer top-9 w-6  bg-slate-50 border-slate-500 border-2 rounded-full -right-3 text-slate-50 ' onClick={() => setOpen(!open)}/>
      </div>
      <div className={`p7 text-2xl font-semibold flex-1 h-screen`}>home page</div>
  
  </div>
  );
};

export default Navbar;





// <header className="h-20 bg-white">
// <nav className="relative px-2 py-4">
  
//   <div className="container mx-auto flex justify-between items-center">
//    <img src="https://avrasys.hu/logoipsum-logo-54.svg" alt="logo" />
//       <ul className="hidden md:flex space-x-6">
//         <li><a href="#">Home</a></li>
//         <li><a href="#">News</a></li>
//         <li className="flex relative group">
//           <a href="#" className="mr-1">Services</a> 
//           <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
//            {/* Submenu starts  */}
//           <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
//             <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Webdesign</a></li>
//             <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Digital marketing</a></li>
//             <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">SEO</a></li>
//             <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Ad campaigns</a></li>
//             <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">UX Design</a></li>
//           </ul>
//            {/* Submenu ends  */}
//         </li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>

//       <a href="#" className="bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white hidden md:flex" role="button">Sign In</a>
    
//     {/* Mobile menu icon  */}
//     <button id="mobile-icon" className="md:hidden">
//       <i onclick="changeIcon(this)" className="fa-solid fa-bars"></i>
//     </button>
    
//     </div>
  
//    {/* Mobile menu  */}
//   <div className="md:hidden flex justify-center mt-3 w-full">
//   {/* add hidden here later */}
//     <div id="mobile-menu" className="mobile-menu absolute top-23 w-full">  
//       <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
//         <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="https://google.com" className="block pl-7">Home</a></li>
//         <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">News</a></li>
//         <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
//           <a href="#" className="block pl-11">Services <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i></a> 
          
//           {/* Submenu starts  */}
//           <ul className="bg-white text-gray-800 w-full">
//             <li className="text-sm leading-8   font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Webdesign</a></li>
//             <li className="text-sm leading-8   font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Digital marketing</a></li>
//             <li className="text-sm leading-8   font-normal hover:bg-slate-200"><a className="block pl-16" href="#">SEO</a></li>
//             <li className="text-sm leading-8   font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Ad campaigns</a></li>
//             <li className="text-sm leading-8   font-normal hover:bg-slate-200"><a className="block pl-16" href="#">UX Design</a></li>
//           </ul>
//           {/* Submenu ends  */}
//         </li>
//         <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">About</a></li>
//         <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">Contact</a></li>
//       </ul>
//       </div>
//   </div>

// </nav>
// </header>

// {/* Hero section starts */}
// <section className="flex bg-gradient-to-r from-red-100 to-orange-100 h-96">
// <div className="container mx-auto flex justify-center items-center flex-col">
  
//   <h1 className="text-black text-4xl md:text-5xl font-bold text-center w-1/2">
//     Build beautiful website & mobile apps.
//   </h1>

//   <a href="#" className="mt-9 bg-red-400 px-12 py-3 rounded-3xl hover:bg-red-500 text-white" role="button">
//     Get started!
//   </a>

// </div>

// </section>
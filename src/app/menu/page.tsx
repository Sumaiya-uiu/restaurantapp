// import { menu } from "@/data";
// import Link from "next/link";
// import React from "react";

// const MenuPage = () => {
//   return (
//     <div className="p-2 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
//       {menu.map((category) => (
//         <Link
//           href={`/menu/${category.slug}`}
//           key={category.id}
//           className="w-full h-full bg-cover p-2 md:h-1/2"
//           style={{ backgroundImage: `url(${category.img})` }}
//         >
//           <div className={`text-${category.color} w-1/2`}>
//             <h1 className="uppercase font-bold text-xl">{category.title}</h1>
//             <p className="text-sm my-1">{category.desc}</p>
//             <button className={`hidden xl:block bg-${category.color} text-${category.color === "black" ? "white" : "white-500 bg-black "} py-2 px-2 rounded-md`}>Explore</button>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default MenuPage;
import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

const MenuPage = async () => {

  const menu:MenuType = await getData()
  return (<div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-4rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
     {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full bg-cover p-2 md:h-1/2"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={`text-${category.color} w-1/2`}>
              <h1 className="uppercase font-bold text-xl">{category.title}</h1>
              <p className="text-sm my-4">{category.desc}</p>
              <button className={`hidden xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500 bg-white "} py-2 px-2 rounded-md`}>Explore</button>
            </div>
          </Link>
        ))}
      </div>
  );
};

export default MenuPage;

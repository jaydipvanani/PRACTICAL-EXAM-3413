// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";

// const Getvategories = () => {
//     const [categories, setcategories] = useState([]);

//     const getcategoriesdata = async () => {
//         try {
//             let token = Cookies.get('token')
//             console.log(token,"tttttttt");
//             let config = {
//                 headers: {
//                   'Authorization': 'Bearer ' + token
//                 }
//               }
//             const res = await axios.get(`http://localhost:3001/v1/categories/getallcategories`,config);
//             setcategories(res.data.result);
//             console.log("🚀 ~ Getvategories ~ res:", res.data.result)
//         } catch (error) {
//             console.error("Error fetching recipes:", error);
//         }
//     };



//     useEffect(() => {

//         getcategoriesdata();
//     }, []);

//     if (!categories) {
//         return (
//             <div className="flex flex-col items-center justify-center h-[500px] text-white">
//                 <div className="fileicon text-[17rem]">
//                     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                 </div>
//                 <div className="text-file text-white font-bold text-2xl">
//                     <h1>no categories</h1>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="grid grid-cols-3 gap-5">
//             {categories?.map((val) => (
//                 <div
//                     key={val._id}
//                     className="flex flex-col justify-between gap-2 max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//                 >
//                     <a href="#">
//                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                             <span className="text-3xl text-slate-100 capitalize">
//                                 name -
//                             </span>
//                             {val.name}
//                         </h5>
//                     </a>




//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Getvategories;





import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import config from "../../config";

const GetCategories = () => {
    const [categories, setCategories] = useState([]);
    const [categorieserror, setcategorieserror] = useState()

    const getCategoriesData = async () => {
        try {
           
            const res = await axios.get(`http://localhost:3001/v1/categories/getallcategories`, config);
            setCategories(res.data.result);
            console.log("🚀 ~ getCategoriesData ~ res:", res.data.result);
            console.log("skjdfghdsgffddjkfgfd",res);
        } catch (error) {
           
        }
    };

    useEffect(() => {
        getCategoriesData();
    }, []);

    if (!categories.length) {
        return (
            <div className="flex flex-col items-center justify-center h-[500px] text-white">
                <div className="fileicon text-[17rem]">
                    {
                       `${categorieserror}`
                    }
                </div>
                <div className="text-file text-white font-bold text-2xl">
                    <h1>No categories</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-5">
            {categories.map((val) => (
                <div
                    key={val._id}
                    className="flex flex-col justify-between gap-2 max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <span className="text-3xl text-slate-100 capitalize">
                                Name -
                            </span>
                            {val.name}
                        </h5>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default GetCategories;


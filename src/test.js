// // import { useState, useEffect } from "react";

// // const useFetchData = (url) => {
// //   const [data, setData] = useState(null);      // To store fetched data
// //   const [loading, setLoading] = useState(true); // To track loading state
// //   const [error, setError] = useState(null);     // To track errors

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true); // Start loading
// //         const response = await fetch(url);
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         const result = await response.json();
// //         setData(result);
// //       } catch (err) {
// //         setError(err.message || "Something went wrong");
// //       } finally {
// //         setLoading(false); // Done loading
// //       }
// //     };

// //     if (url) fetchData(); // Only fetch if URL is provided
// //   }, [url]);

// //   return { data, loading, error };
// // };

// // export default useFetchData;





// // const useFetchData=(url)=>{

// //     //const data= useState
// //     fetch(url).then(


// //     ).catch()


// // return data

// // }


// // use reducer
// const initialCount=0
// const reducer=(state,action)=>{
//     switch(action.type)
//     case:increment{
//         return state+1
//     }
//     case2:decrement:{
//         return state -1;
//     }

// }

// const [count, dispatch] = useReducer(reducer, initialCount);
// dispatch({ type: "increment" });

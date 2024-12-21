// const getGeoLocation = ({setLocation}) => {
//     if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition(
//             ({ coords }) => {
//                 const latitude = coords.latitude;
//                 const longitude = coords.longitude;
//                 const location = {
//                     "latitude":latitude,
//                     "longitude":latitude
//                 }
//                 console.log(location)
//                 setLocation(location)
//                 return (location)
//             },
//             (error) => {
//                 console.error("Error getting geolocation:", error);
//             }
//         );
//     } else {
//         console.log("Geolocation is not supported by this browser");
//     }
// };

// export default getGeoLocation;

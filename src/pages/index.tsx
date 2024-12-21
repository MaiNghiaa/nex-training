import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
// import getGeoLocation from "./Services/getGeolocation";
import { useEffect, useState } from "react";
import { env } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function Home() {
  
  const [latitude,setLatitude] = useState<Number>();
const [longitude,setLongitude] = useState<Number>();
const [data,setData] = useState<any>();
useEffect(() => {if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
          const latitude = coords.latitude;
          const longitude = coords.longitude;
          const location = {
              "latitude":latitude,
              "longitude":latitude
          }
          console.log(location)
          // setLocation(location)
       
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=f871f3bee33150425ed4735340c8a6b4`)
  .then((data) => setData(data.json()))
  .catch(err => console.log(err))
     
      },
      (error) => {
          console.error("Error getting geolocation:", error);
      }
  );
} else {
  console.log("Geolocation is not supported by this browser");
}},[])



useEffect(() => {},[])
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="card bg-[#ffffff] py-[36px] px-[24px] border rounded-xl"></div>
    </div>
  );
}

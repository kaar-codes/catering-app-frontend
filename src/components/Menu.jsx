import { useState, useEffect } from "react";
import client from "../utils/api";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuList = (
          await client.get("/menu/all", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        ).data.menus;
        console.log(menuList);
        setMenu(menuList);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Choose your preferred menu</h1>
      {menu.map((val) => (
        <>
          <div
            className="bg-black text-white px-1 5 py-1 my-2"
            key={val.menuname}
          >
            <h1 className="text-2xl">{val.menuname}</h1>
            <span className="px-1 py-1.5 bg-amber-500">{val.category}</span>
            <p>{val.description}</p>
          </div>
        </>
      ))}
    </>
  );
}

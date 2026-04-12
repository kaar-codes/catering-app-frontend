import { useState, useEffect } from "react";
import client from "../utils/api";

export default function Menu({ setUser, setMenu }) {
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelectedMenu] = useState([]);

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
        setMenuList(menuList);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.status == 401) {
          localStorage.clear();
          setUser(null);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <>
      <h1>Menu will be shown here soon</h1>
    </>
  ) : (
    <>
      {menuList.map((val, ind) => (
        <div
          key={ind}
          className={`${
            selected.includes(val)
              ? "bg-[#dee] text-black"
              : "bg-white text-[#111] border-violet-500"
          } my-2 p-3`}
          onClick={() => {
            const menuItemWithoutDescription = {
              menuname: val.menuname,
              category: val.category,
            };
            setMenu(menuItemWithoutDescription);
            setSelectedMenu((prev) =>
              prev.some(
                (item) =>
                  item.menuname === menuItemWithoutDescription.menuname &&
                  item.category === menuItemWithoutDescription.category,
              )
                ? prev.filter(
                    (item) =>
                      item.menuname !== menuItemWithoutDescription.menuname ||
                      item.category !== menuItemWithoutDescription.category,
                  )
                : [...prev, val],
            );
          }}
        >
          <h1 className="text-2xl">{val.menuname}</h1>
          <div className="my-1 flex justify-between items-center" key={ind}>
            <div>
              <span className="inline-block px-1 py-1.5 my-2 bg-[#122] text-[#ddd] rounded-r-2xl text-[12px]">
                {val.category}
              </span>
              <p>{val.description}</p>
            </div>
            <div className="controls">
              <button>
                <img
                  className="w-3.75 block"
                  src="./ico-check.svg"
                  alt="add icon"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

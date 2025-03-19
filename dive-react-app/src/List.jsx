import React from 'react'

const List = () => {
    const names = ["Vee", "Vera", "John", "James", "mary"];
    const activeName = "Vee";

    // const check = activeName === "Vera" ? "active" : "inactive";
    // console.log("it is", check)
    // if (activeName === "Vera") {
    //     return "active"
    // } else {
    //     return "inactive"
    // }



  const clickItem = (value)=>{
    console.log(value)
  };
  
    return (
    <ul>
        {names.map((items, index)=>{
            return (
            <li 
            key={index} 
            className={activeName === items ?"list-item active" : "list-item" }
            onClick={()=> clickItem(items)}
            >
            {items}</li>
            )
        })}
    </ul>
  );
};

export default List

// rafce
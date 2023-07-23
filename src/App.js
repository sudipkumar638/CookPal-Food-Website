import Card from "./Card";
import FilterButton from "./FilterButton";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import "./app.scss";
import recipes from "./Data";
import { useState } from "react";
function App() {

  
   const [Searchvalue,setSearchValue]=useState("");
   const[allFood,setAllFood]=useState(recipes);
   

   function vegies(){

      const foodData=recipes.filter((item,ind)=>{
         return item.VegorNonveg==="Veg"
      })

      setAllFood(foodData);
   }

   function nvegies(){
    const foodData=recipes.filter((item,ind)=>{
      return item.VegorNonveg==="Nonveg"
   })

   setAllFood(foodData);
   }

   function allfood(){
    
    setAllFood(recipes);
   }

   function filterrating4(flag)
   {

    if(flag){
      const foodData=recipes.filter((item,ind)=>{
        return item.ratings>4
     })
     
     setAllFood(foodData);
      
    }
   
   else
   {
    setAllFood(recipes);
   }

  }
   function filterrating4below(flag)
   {
     if(flag)
     {
      const foodData=recipes.filter((item,ind)=>{
        return item.ratings<4
     })
    
  
     setAllFood(foodData);
     }

     else
     {
      setAllFood(recipes);
     }
   
   }
   
  return (
    <div className="App">
      <NavBar></NavBar>
       <HeroSection></HeroSection>
       <SearchBar value={Searchvalue} searchfun={setSearchValue}></SearchBar>
       <div className="filterbuttons">
        <FilterButton bcolor="#EAAA00" btext="All Recipes" foodfun={allfood}></FilterButton>
        <FilterButton bcolor="#C4D600" btext="Veg Recipes Only" foodfun={vegies} ></FilterButton>
      <FilterButton bcolor="#DC582A" btext="Non Veg Recipes" foodfun={ nvegies}></FilterButton> 
       </div>

       <div className="ratingsection">
        <div className="ratings">
        <h1>Rating</h1>
        </div>
        
         <div className="checkboxes">
         <span className="c1">  <input  type="checkbox" onChange={(e)=>{filterrating4(e.target.checked)}}/> 4 and Above</span>
         <span className="c2">  <input type="checkbox" onChange={(e)=>{filterrating4below(e.target.checked)}}/> Below 4</span>
         </div>
       </div>
       {
     
    }
      <div id="displaycards" className={allFood.length%2!=0 || allFood.length<5 ?"lesscards":"displaySection"}>
        {allFood.map((item,ind)=>{

           if(item.recipeName.toLowerCase().includes(Searchvalue.toLowerCase()))
           {
            return <Card recipeName={item.recipeName} ratings={item.ratings} image={item.image} preparationTime={item.preparationTime} VegorNonveg={item.VegorNonveg}></Card>
           }
          
          return ""
        })}
      </div>
       
    </div>
  );
}
export default App;

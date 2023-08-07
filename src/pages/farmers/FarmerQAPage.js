import FarmerListComponent from "../../components/farmers/FarmerListComponent";
import FarmerPageComponent from "../../components/farmers/FarmerPageComponent";
import FarmerQAComponent from "../../components/farmers/FarmerQAComponent";
import FarmerSearchComponent from "../../components/farmers/FarmerSearchComponent";
import useQueryObj from "../../hooks/farmers/useQueryObj";
import TopNav from "../../layouts/farmers/nav/TopNav";


const FarmerQAPage = () => {

  const {queryObj, setSearch, moveRead} = useQueryObj()

  console.log("queryObj: " + queryObj)

  //페이지 번호 받는
  const movePage = (num) => {
    
    console.log("DiaryPage_Num: " + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

  const moveSearch = (type, keyword) => {
    
    queryObj.page = 1
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({...queryObj})
  }

  const chgSize = (size) => {

    queryObj.size = size

    setSearch({...queryObj})

  }
  return ( 

    <div className="container mx-[auto] w-[1280px] ">
      
      <div>
        <TopNav></TopNav>
      </div>
      
      <div>
        <FarmerSearchComponent
        moveSearch={moveSearch}
        queryObj={queryObj}
        chgSize={chgSize}
        ></FarmerSearchComponent>
      </div>

      <div>
        <FarmerQAComponent
        queryObj={queryObj}
        movePage={movePage}
        moveRead={moveRead}
        ></FarmerQAComponent>
      </div>


    </div>

   );
}
 
export default FarmerQAPage;
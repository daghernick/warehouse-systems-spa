import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import './MerchDetails.css';

interface Props {
    name: string;
    price: number;
    imgPath: string;
    id: number;
}
interface Param {
    id: string ;
}
const MerchDetails: React.FC = () => {
    const params: Param = useParams();

    const history = useHistory();
  
    // const book = books.find((book) => {
    //   return book.id === id;
    // });
    // if (!book) {
    //   return <h3>Loading...</h3>;
    // }
  return (
    <div className="MerchDetails">
     Item {params.id} 
    </div>
  );
}

export default MerchDetails;

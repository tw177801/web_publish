import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Delivery() {

    const [delivery, setDelivery] = useState([]);

    useEffect(() => {
        axios
            .get("/data/delivery_content.json")
            .then(response => {
                setDelivery(response.data); 
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='delivery-content'>

            <div className="delivery-list-title">
                <h5>배송/교환/반품/AS 관련 유의사항</h5>
                <p>상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.</p>
            </div>

            <table>

                <colgroup>
                    <col style={{"width":270}}/>
                </colgroup>

                <tbody>
                    {delivery && delivery.map((dev)=> (
                    
                        <tr>
                            <th>{dev.title}</th>
                            <td>
                                <ul>
                                    <li>{dev.content}</li>
                                </ul>
                            </td>
                        </tr>
                    
                    ))}

                 

                </tbody>
            </table>
        </div>
    );
}


import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext.js';
import { useNavigate } from 'react-router-dom';

export default function CartDB({refreshStorage}) {

    const navigate = useNavigate();
    const { isLoggedIn }  = useContext(AuthContext);


    // localStorage에 담긴 cartItems의 배열 객체 출력 
    // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    // console.log('cartItems --->> ', cartItems[0].pid);
    // const [pids, setPids] = useState([]);
    
    
    /** 장바구니 아이템 저장 : 배열 */
    const [cartList, setCartList] = useState(()=> {
        try {
            const initCartList = localStorage.getItem("cartItems");
            return initCartList ? JSON.parse(initCartList) : [];
        } catch (error) {
            console.log('로컬스토리지 데이터 작업도중 에러 발생');
            return [];      
        }
    });   
    
    
    // pids 배열 생성 cartItems의 pid 값을 pids 배열에 추가 
    const pids = cartList && cartList.map(item => item.pid);  // []


    useEffect(()=>{
        if(pids.length > 0) {
            // axios를 이용하여 DB 연동
            axios   
                .post("http://localhost:9000/product/cartItems", {"pids": pids})
                .then(res =>{
                    // console.log(res.data)
                    //cartItems에 res.data의 정보 추가
                    const updateCartItems = cartList.map((item, i)=> {
                        const filterItem = res.data.find((ritem)=> ritem.pid === item.pid)
                        return filterItem ?
                            {
                                ...item, 
                                "pname": filterItem.pname,
                                "price": filterItem.price,
                                "description": filterItem.description,
                                "image": filterItem.image
                            }
                            :item
                    });
                        setCartList(updateCartItems);
                    // [{pid, size, qty, pname, price, ...item}]
                })
                .catch(error => console.log(error));
        }
    }, [cartList]);

    
    /**주문하기 이벤트 처리 */
    const handleOrder = (type, pid, size) => {
        // 1. 로그인 여부 체크 
        // console.log(type, pid, size);
        
        const id = localStorage.getItem("user_id");
        let formData = [];
        
        if(type === "all") {    // 주문하기 - 전체 상품 DB 저장
            formData = {"id": id, "cartList": cartList}; // [{} ]
        } else {    // 계속 담아두기 - 개별 상품 DB 저장 
            const filterItem = cartList.filter(item => !(item.pid === pid && item.size === size));
            // const filterItem = cartList.filter(item => item.pid === pid && item.size === size);
            formData = {id: id, cartList: filterItem}
        }

        console.log('formData --->', formData);
        
            if(isLoggedIn) {
                // 2. lodgin --> DB 연동 후 저장
                // console.log('isLoggedIn --> ', isLoggedIn);
                // {"id": "test1", "cartList": [~~~]}

                axios
                    .post("http://localhost:9000/cart/add", formData)
                    .then((res) => {
                        if(res.data.result_rows) {
                            alert("장바구니에 추가되었습니다.")

                            if (type === "all") {
                                // 주문하기 페이지 이동 
                                // 로컬스토리지 전체 아이템 삭제 
                                clearStorageAll();
                                
                                // App.js의 cartList, cartCount 초기화 
                                refreshStorage([], 0);
                            } else {
                                // 로컬스토리지 개별 아이템 삭제
                                const updateCart = clearStorageEach(pid, size); 
                                refreshStorage(updateCart, updateCart.length);
                            }
                        }
                    })
                    .catch(error => console.log(error));

            } else {
                // 3. logout --> 로그인 > db 연동 후 저장 
                // alert("로그인이 필요한 서비스입니다.");
                // const select = window.confirm("로그인이 필요한 서비스입니다.")
                window.confirm("로그인이 필요한 서비스입니다.") && navigate('/login');
            }
    };

    // 로컬스토리지 개별 아이템 삭제
    const clearStorageEach = (pid, size) => {
        const updateCart = cartList.filter((item)=> !(item.pid === pid && item.size === size));
        // console.log('updateCart-->', updateCart);
        
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", updateCart);
        setTimeout(()=>{
            setCartList(updateCart);
        }, 0);

        return updateCart;
    };

    // 로컬스토리지 전체 아이템 삭제  
    const clearStorageAll = () => {
        console.log('---------------> 로컬스토리지 전체 삭제 시작');
        localStorage.removeItem("cartItems") // 비동기     
        navigate("/cartdb");
        // setTimeout(() => {
        //     setCartList([]);            
        // }, 0);
        console.log('---------------> 로컬스토리지 전체 삭제 종료');
    }




    return (
        <div className="content">
            <h1>MyCart!!</h1>
            {/* <button onClick={handleOrder("all")}>Oreder</button> */}
            <button onClick={() => {handleOrder("all")}}>주문하기</button>

            <table border="1">
                <tr>
                    <th>Pid</th>
                    <th>Pname</th>
                    <th>Size</th>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th> </th>
                </tr>
                {
                    cartList && cartList.map((item) => 
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.size}</td>
                            <td>{item.qty}</td>
                            <td>{item.description}</td>
                            <td>
                                <img src={item.image} alt="error" style={{width:"100px"}} />
                            </td>
                            {/* <td><button onClick={()=>{handleOrder("each", item.pid, item.size) }}>계속담아두기</button></td> */}
                        </tr>
                    )
                }
            </table>
        </div>
    );
}


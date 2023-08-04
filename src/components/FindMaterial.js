import { useRef,useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px 12px 20px;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 20px 12px 20px;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const ContentsWrapper = styled.div`
  background-color: #fff;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
`;

export default function FindMaterial({addFunction}) {
    const [material, setMaterial] = useState([]);
    const [search, setSearch] = useState({});
    const searchRef = useRef();
    const brandRef = useRef();

    useEffect(() => {
        if(search === "") return;
        (async () => {
            const response = await axios.get("http://localhost:3000/api/search/?keyword="+search.search+"&brand="+search.brand);
            setMaterial(response.data);
        })();
    }, [search]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        setSearch({
            search: searchRef.current.value,
            brand: brandRef.current.value
        });
    };

    return (
        <form>
            <Input type="text" id="id" maxlength="20" placeholder="브랜드 이름" ref={brandRef}></Input>
            <Input type="text" id="id" maxlength="20" placeholder="재료 이름" ref={searchRef}></Input>
            <button type="submit" onClick={onSubmit}>검색</button>
            <ListWrapper>
                {
                    material
                        .map((item, index) => {
                            return (
                                <ContentsWrapper key={item.id} onClick={() => addFunction(item)}>
                                    <Image src={"https://www.cntmart.com"+item.image}/>
                                    <div>
                                        <span>{item.brand}</span>
                                        <span>{item.name}</span>
                                        <div>
                                            <label htmlFor="volume">용량</label>
                                            <span>{item.volume+item.unit}</span>
                                        </div>
                                        <div>
                                            <label htmlFor="count">개수</label>
                                            <span>{item.count}개</span>
                                        </div>
                                        <div>
                                            <label htmlFor="price">가격</label>
                                            <span>{item.price.toLocaleString()}원</span>
                                        </div>
                                        <div>
                                            <label htmlFor="total">1{item.volume?item.unit:"개"}당 가격</label>
                                            <span>{Math.floor((item.volume?item.price/(item.volume*item.count):item.price/item.count)*100)/100}</span>
                                        </div>
                                    </div>
                                </ContentsWrapper>
                            );
                        })
                }
            </ListWrapper>
        </form>
    )
}

import "./App.css";
import FindMaterial from "./components/FindMaterial";

function App() {
  return (
    <div className="App">
      <div>
        <h3>
          <label for="id">메뉴 이름</label>
        </h3>
        <span class="box int_id">
          <input type="text" id="id" class="int" maxlength="20"></input>
        </span>
        <span class="error_next_box"></span>
      </div>

      <div>
        <h3>
          <label for="id">메뉴 판매가</label>
        </h3>
        <span class="box int_id">
          <input type="text" id="id" class="int" maxlength="20"></input>
          <span class="step_url">원</span>
        </span>

        <span class="error_next_box"></span>
      </div>

      <div>
        <h3>
          <label for="yy">레시피 재료</label>
        </h3>
        <FindMaterial />
        <div id="bir_wrap">
          <div id="bir_yy">
            <span class="box">
              <input
                type="text"
                id="yy"
                class="int"
                maxlength="15"
                placeholder="재료 이름"
              ></input>
            </span>
          </div>

          <div id="bir_dd">
            <span class="box">
              <input
                type="text"
                id="dd"
                class="int"
                maxlength="10"
                placeholder="재료 사용량"
              ></input>
            </span>
          </div>
          <div id="bir_mm">
            <span class="box">
              <select id="mm">
                <option>단위</option>
                <option value="01">ml</option>
                <option value="02">g</option>
                <option value="03">개</option>
              </select>
            </span>
          </div>
        </div>
        <span class="error_next_box"></span>
      </div>
      <div class="btn_area">
        <button type="button">
          <span>가입하기</span>
        </button>
      </div>
    </div>
  );
}

export default App;

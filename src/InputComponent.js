import React from "react";

const InputComponent = ({
  inputItems,
  addInput,
  InputDelete,
  onChange,
  confirm,
}) => {
  return (
    <div>
      {inputItems.map((item, index) => {
        return (
          <div>
            <div id="bir_wrap">
              <div id="bir_yy">
                <span class="box">
                  <input
                    name="elementName"
                    type="text"
                    id="yy"
                    class="int"
                    maxlength="15"
                    placeholder="재료 이름"
                    defaultValue={item.elementName}
                    onChange={(e) => onChange(e, item.id)}
                  />
                </span>
              </div>

              <div id="bir_dd">
                <span class="box">
                  <input
                    name="elementAmount"
                    type="text"
                    id="dd"
                    class="int"
                    maxlength="10"
                    placeholder="재료 사용량"
                    defaultValue={item.elementAmount}
                    onChange={(e) => onChange(e, item.id)}
                  />
                </span>
              </div>
              <div id="bir_mm">
                {index === 0 && inputItems.length < 100 && (
                  <button onClick={() => addInput()} className="btnoption">
                    {" "}
                    +{" "}
                  </button>
                )}
                {index > 0 && inputItems[index - 1] ? (
                  <button
                    onClick={() => InputDelete(item.id)}
                    className="btnoption"
                  >
                    {" "}
                    -{" "}
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <span class="error_next_box"></span>
          </div>
        );
      })}
    </div>
  );
};

export default InputComponent;

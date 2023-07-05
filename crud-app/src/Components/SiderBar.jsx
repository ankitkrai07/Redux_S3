import React, { useState } from "react";
import { styled } from "styled-components";

export const SiderBar = () => {
  const [gender, setGender] = useState([]);
  const [color, setColor] = useState([]);
  return (
    <DIV>
      <h3>Filter by Gender</h3>
      <div>
        <input type="checkbox" value={male} />
        <label>Men</label>
      </div>
      <div>
        <input type="checkbox" value={female} />
        <label>Women</label>
      </div>
      <div>
        <input type="checkbox" value={kids} />
        <label>Kids</label>
      </div>

      <h3>Filter by Color</h3>
      <div>
        <input type="checkbox" value={red} />
        <label>Red</label>
      </div>
      <div>
        <input type="checkbox" value={black} />
        <label>Black</label>
      </div>
      <div>
        <input type="checkbox" value={white} />
        <label>white</label>
      </div>
      <div>
        <input type="checkbox" value={green} />
        <label>Green</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  padding: 0 20px;
  height: 100vh;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

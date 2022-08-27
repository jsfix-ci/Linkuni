import React, { useCallback } from "react";

import Header from "@/components/Header/Header";
import SearchPage from "@/components/SearchPage/SearchPage";
import { SearchPageWrapper, AddButton } from "./RightBody.styled";

function RightBody() {
  const handleAddButtonClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <Header />
      <SearchPageWrapper>
        <img src="kangaroo.png" />
        <SearchPage />
        <AddButton src="addbtn.png" onClick={handleAddButtonClick} />
      </SearchPageWrapper>
    </>
  );
}

export default RightBody;

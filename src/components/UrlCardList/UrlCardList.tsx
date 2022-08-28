import { URL } from "@/types";
import UrlCard from "@/components/UrlCard/UrlCard";

import { StyledWrapper } from "./UrlCardList.styled";

interface Props {
  cards: URL[];
  categoryTitle: string;
}

const UrlCardList = ({ cards, categoryTitle }: Props) => {
  return (
    <StyledWrapper>
      <h2 className="section-title">{categoryTitle}</h2>
      <ul className="card-list-wrapper">
        {cards.map((card) => {
          return <UrlCard {...card} key={card.id} />;
        })}
      </ul>
    </StyledWrapper>
  );
};

export default UrlCardList;

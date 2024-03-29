import React from "react";
import "./SpecialistsTab.scss";
import { useSelector } from "react-redux";
import { getAllItems } from "../../redux/all-items/selectors";
import SpecialistsContent from "../SpecialistsContent/SpecialistsContent";
import { Link } from "react-router-dom";

const SpecialistsTab = ({ content }) => {
  const items = useSelector(getAllItems);
  let tabArr;

  // content selection depending on the desired tab
  switch (content) {
    case "favourites":
      tabArr = items.filter((e) => e.isFavourite); // filter items if the tab 'favourites'
      break;
    case "disfavourites":
      tabArr = items.filter((e) => e.isDisfavourite); // filter items if the tab 'disfavourites'
      break;
    default:
      tabArr = items; // items if the tab 'all'
      break;
  }

  const renderContent = tabArr.length ? (
    <SpecialistsContent items={tabArr} />
  ) : (
    // render if there are no items
    <>
      <h2 className="none-items__header">
        At the moment there are no specialists
      </h2>
      <Link className="none-items__link" to={"/add-specialist"}>
        Add a new specialist
      </Link>
    </>
  );

  return <div className="tab__container">{renderContent}</div>;
};

export default SpecialistsTab;

import React from "react";
import { getCurrentPartners } from "../../firebase/utils";

export default function Partners() {
  const [partners, setPartners] = React.useState({});

  return (
    <>
      <div style={{margin: "30px"}}>
        Partners
        <div
          onClick={() =>
            getCurrentPartners()
              .then((partners) => setPartners(partners))
              .catch((e) => console.log("error setting partners", e))
          }
          style={{
            backgroundColor: "red",
            cursor: "pointer",
            userSelect: "none",
            width: "max-content",
            padding: "5px"
          }}
        >
          get partners
        </div>
        {partners &&
          Object.keys(partners).map((id) => {
            return <div key={id}>{partners[id].name}</div>;
          })}
      </div>
    </>
  );
}

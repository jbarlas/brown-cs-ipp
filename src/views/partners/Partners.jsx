import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  getPartnerImage,
  getPartnerData,
  getDownload,
  getCurrentPartners
} from "../../firebase/utils";
import {
  TextField,
  Autocomplete,
  Card,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import { matchSorter } from "match-sorter";

export default function Partners() {
  /**
   * all partners gathered on page load from firebase -- of the form:
   * [{partner-object}, ...]
   */
  const partners = useLoaderData();
  console.log(partners)

  // console.log("partners from loader", partners)
  // console.log(
  //   "within partners",
  //   Object.fromEntries(
  //     Object.entries(partners).map((elt) => {
  //       console.log(elt);
  //       return [
  //         elt[0],
  //         {
  //           ...elt[1],
  //           storageData: getPartnerData(elt[0]),
  //         },
  //       ];
  //     })
  //   )
  // );

  /**
   * input value for search bar
   */
  const [searchValue, setSearchValue] = React.useState(null);

  /**
   * selected company to display expanded information
   */
  const [selectedCompany, setSelectedCompany] = React.useState();

  /**
   * returned image from storage
   */
  const [image, setImage] = React.useState();

  /**
   * custom filter option for search bar
   * alternatively, we can use matchSorter to filter all displayed companies rather than in an autocomplete box
   * @param {string} options options provided to autocomplete
   * @param {string} input - search string
   * @returns array of options which match over name and mission statement
   */
  const filterOptions = (options, { inputValue }) => {
    return matchSorter(options, inputValue.trim(), {
      keys: ["name", "mission"],
    });
  };

  return (
    <>
      <div style={{ margin: "30px" }}>
        <Autocomplete
          id="partner-search"
          options={partners}
          getOptionLabel={(option) => option.name}
          filterOptions={filterOptions}
          value={searchValue}
          onChange={(e, v, _) => {
            e.preventDefault();
            setSelectedCompany(v);
            setSearchValue(v);
          }}
          onInputChange={(e, v) => {
            console.log(e.target.value, v);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Search Partners" />
          )}
        ></Autocomplete>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            {partners &&
              Object.keys(partners).map((id) => {
                const partnerData = partners[id];
                return (
                  <div key={`partner-${id}`}>
                    <Card
                      sx={{ width: 275 }}
                      onClick={() => setSelectedCompany(partnerData)}
                    >
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {partnerData.name}
                        </Typography>
                        <Typography variant="body2">
                          {partnerData.mission}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
          </div>
          <div>
            {selectedCompany ? (
              <div>
                {selectedCompany.name}
                <br />
                <Button
                  onClick={() =>
                    setImage(
                      getPartnerImage(
                        selectedCompany.applicationId,
                        selectedCompany.logoPath
                      )
                    )
                  }
                >
                  get company image
                </Button>
                <br />
                <img src={image} alt="placeholder" />
              </div>
            ) : (
              "no company selected"
            )}
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

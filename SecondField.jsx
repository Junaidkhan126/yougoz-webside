import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { FaCrosshairs } from "react-icons/fa";
import React, { useState } from "react";

const SecondField = () => {
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <Box>
      <TextField
        value={age}
        variant="outlined"
        onChange={handleChange}
        select
        fullWidth
        placeholder="Your City"
        sx={{
          backgroundColor: "white",
          borderLeft: "1px solid #ddd",
          borderRadius: { sm: "none", md: "0px 5px 5px 0px" },
          "& fieldset": { border: "none" },
          "& .MuiOutlinedInput-input": {
            padding: "13px",
          },
        }}
        InputProps={{
          startAdornment: (
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                fontSize={"14px"}
                fontWeight={600}
                color={"#333"}
                sx={{
                  pr: "10px",
                  color: "black",
                  fontFamily: "QuickSand",
                  alignSelf: "center",
                }}
              >
                Where
              </Typography>
            </Box>
          ),
        }}
      >
         <MenuItem>Abington</MenuItem>
        <MenuItem >Andover</MenuItem>
        <MenuItem >Arlington</MenuItem>
        <MenuItem >Arlington Heights</MenuItem>
        <MenuItem >Ashley Avenue</MenuItem>
        <MenuItem >Atlanta</MenuItem>
        <MenuItem >Attleboro</MenuItem>
        <MenuItem >Bedford</MenuItem>
        <MenuItem >Belmont</MenuItem>
        <MenuItem >Boston</MenuItem>
        <MenuItem >BackBay</MenuItem>
        <MenuItem >Beacon Hill</MenuItem>
        <MenuItem >Cambridge</MenuItem>
        <MenuItem >South End</MenuItem>
        <MenuItem >Braintree</MenuItem>
        <MenuItem >Broadway Street</MenuItem>
        <MenuItem >Brockton</MenuItem>
        <MenuItem >Brookline</MenuItem>
        <MenuItem >Burke</MenuItem>
        <MenuItem >Burlington</MenuItem>
        <MenuItem >Cabot Road</MenuItem>
        <MenuItem >Cambridge</MenuItem>
        <MenuItem >Canton</MenuItem>
        <MenuItem >Cedar Street</MenuItem>
        <MenuItem >Chelmsford</MenuItem>
        <MenuItem >Chelsea</MenuItem>
        <MenuItem >Chicopee</MenuItem>
        <MenuItem >Clematis Avenue</MenuItem>
        <MenuItem >Cohasset</MenuItem>
        <MenuItem >Commerce Boulevard</MenuItem>
        <MenuItem >Concord</MenuItem>
        <MenuItem >Cumberland</MenuItem>
        <MenuItem >Danvers</MenuItem>
        <MenuItem >Dedham</MenuItem>
        <MenuItem >DORCHESTR CTR</MenuItem>
        <MenuItem >Dover</MenuItem>
        <MenuItem >East Bridgewater</MenuItem>
        <MenuItem >Easton</MenuItem>
        <MenuItem >Ellington</MenuItem>
        <MenuItem >Everett</MenuItem>
        <MenuItem >Falls Church</MenuItem>
        <MenuItem >Framingham</MenuItem>
        <MenuItem >Franklin</MenuItem>
        <MenuItem >Glastonbury</MenuItem>
        <MenuItem >Hanover</MenuItem>
        <MenuItem >Hanson</MenuItem>
        <MenuItem >Harvard</MenuItem>
        <MenuItem >Hingham</MenuItem>
        <MenuItem >Holliston</MenuItem>
        <MenuItem >Hope Mills</MenuItem>
        <MenuItem >Hull</MenuItem>
        <MenuItem >Jayar Road</MenuItem>
        <MenuItem >Kingston</MenuItem>
        <MenuItem >Lancaster</MenuItem>
        <MenuItem >Leominster</MenuItem>
        <MenuItem >Lexington</MenuItem>
        <MenuItem >Longmeadow</MenuItem>
        <MenuItem >Lowell Street</MenuItem>
        <MenuItem >Lynn</MenuItem>
        <MenuItem >Main Street</MenuItem>
        <MenuItem >Malden</MenuItem>
        <MenuItem >Marion</MenuItem>
        <MenuItem >Marlborough</MenuItem>
        <MenuItem >Marshfield</MenuItem>
        <MenuItem >McHenry</MenuItem>
        <MenuItem >Mechanic Street</MenuItem>
        <MenuItem >Medford</MenuItem>
        <MenuItem >Melrose</MenuItem>
        <MenuItem >Methuen</MenuItem>
        <MenuItem >Milford</MenuItem>
        <MenuItem >Milton</MenuItem>
        <MenuItem >Nahant</MenuItem>
        <MenuItem >Nashua</MenuItem>
        <MenuItem >Natick</MenuItem>
        <MenuItem >Needham</MenuItem>
        <MenuItem >Newton</MenuItem>
        <MenuItem >NEWTON U F</MenuItem>
        <MenuItem >North Avenue</MenuItem>
        <MenuItem >North Main Street</MenuItem>
        <MenuItem >North Reading</MenuItem>
        <MenuItem >Northbridge</MenuItem>
        <MenuItem >Norwell</MenuItem>
        <MenuItem >Norwood</MenuItem>
        <MenuItem >Peabody</MenuItem>
        <MenuItem >Pembroke</MenuItem>
        <MenuItem >Quincy</MenuItem>
        <MenuItem >Reading</MenuItem>
        <MenuItem >Revere</MenuItem>
        <MenuItem >Rockland</MenuItem>
        <MenuItem >Roxbury Crossing</MenuItem>
        <MenuItem >Russell Street</MenuItem>
        <MenuItem >Salem</MenuItem>
        <MenuItem >Salem Street</MenuItem>
        <MenuItem >Saugus</MenuItem>
        <MenuItem >Scituate</MenuItem>
        <MenuItem >Scottsdale</MenuItem>
        <MenuItem >Shrewsbury</MenuItem>
        <MenuItem >Smithfield</MenuItem>
        <MenuItem >Somerville</MenuItem>
        <MenuItem >South Hadley</MenuItem>
        <MenuItem >Stoneham</MenuItem>
        <MenuItem >Stoughton</MenuItem>
        <MenuItem >Swampscott</MenuItem>
        <MenuItem >Tewksbury</MenuItem>
        <MenuItem >Virginia</MenuItem>
        <MenuItem >Wakefield</MenuItem>
        <MenuItem >Walpole</MenuItem>
        <MenuItem >Waltham</MenuItem>
        <MenuItem >Washington Street</MenuItem>
        <MenuItem >Watertown</MenuItem>
        <MenuItem >Wayland</MenuItem>
        <MenuItem >Wellesley</MenuItem>
        <MenuItem >West Central Street</MenuItem>
        <MenuItem >West Cummings Park</MenuItem>
        <MenuItem >West Springfield</MenuItem>
        <MenuItem >Westborough</MenuItem>
        <MenuItem >Westford</MenuItem>
        <MenuItem >Westwood</MenuItem>
        <MenuItem >Weymouth</MenuItem>
        <MenuItem >Whitman</MenuItem>
        <MenuItem >Wilmington</MenuItem>
        <MenuItem >Winchester</MenuItem>
        <MenuItem >Winthrop</MenuItem>
        <MenuItem >Woburn</MenuItem>
      </TextField>
    </Box>
  );
};

export default SecondField;


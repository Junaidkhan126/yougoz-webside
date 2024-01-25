import {
  Autocomplete,
  TextField,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState();

  return (
    <Autocomplete
      fullWidth
      options={catogaries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ "& > img": { mr: 2 } }} {...props}>
          <Avatar
            variant="square"
            sx={{ "& .MuiAvatar-img": { objectFit: "contain" } }}
            src={option.img}
          />
          {option.label}
        </Box>
      )}
      sx={{
        "& .MuiIconButton-root": {
          display: "none",
        },
        "& .MuiOutlinedInput-root": {
          p: "5.5px 0px 5.5px 5.5px",
        },
      }}
      renderInput={(params) => (
        <TextField
          placeholder="Ex: Barber, Spa, Personal Trainers, Nail Salon"
          {...params}
          sx={{
            background: "white",
            borderRadius: { sm: "none", md: "5px 0px 0px 5px" },
            "& fieldset": {
              border: "none",
              padding: "3px",
            },
          }}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <Typography
                  variant="body1"
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#333"}
                  sx={{
                    px: "10px",
                    color: "black",
                    fontFamily: "QuickSand",
                  }}
                >
                  What
                </Typography>{" "}
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default InputField;

const catogaries = [
  {
    label: "Hair",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Hair Colorists",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Hair Extension",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Hair Salons",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Hair Stylists",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "SkinCare",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Waxing/Hair Removal",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Makeup Arists ",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Spas",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Pesonal Trainer",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Life Coaches",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Barders",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },
  {
    label: "Eyelash Services",
    img: "https://yougoz.com/wp-content/uploads/2017/04/18-2-286x300.png",
  },

  {
    label: "Beauty & Spa",
    img: "https://yougoz.com/wp-content/uploads/2017/04/14-2-300x282.png",
  },

  {
    label: "CrossFit",
    img: "https://yougoz.com/wp-content/uploads/2017/04/14-2-300x282.png",
  },
  {
    label: "Cycling Studio",
    img: "https://yougoz.com/wp-content/uploads/2017/04/14-2-300x282.png",
  },

  {
    label: "Featured",
    img: "https://yougoz.com/wp-content/uploads/2017/04/14-2-300x282.png",
  },

  {
    label: "Fitness",
    img: "https://yougoz.com/wp-content/uploads/2017/04/9-2-300x162.png",
  },
  {
    label: "Gyms",
    img: "https://yougoz.com/wp-content/uploads/2017/04/9-2-300x162.png",
  },
];

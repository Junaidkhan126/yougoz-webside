import React from "react";
import { useForm, Controller } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";
// import PhoneInput from "react-phone-input-2";
// import Recaptcha from "react-recaptcha";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ListItemIcon,
  Box,
  Stack,
} from "@mui/material";
const phoneOptions = [
  { label: "Featured-$100.00", value: "Featured-$100.00" },
  { label: "Signaturre-$350.00", value: "Signaturre-$350.00" },
  { label: "Elite-750.00", value: "Elite-750.00" },
];

const FomePlan = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "40px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingTop: "10px" }}>
          <Typography
            component={"h1"}
            fontSize="22px"
            fontFamily={"Poppins"}
            lineHeight={"26px"}
            color="#363f48"
            sx={{ overflowWrap: "break-word", paddingTop: "20px" }}
          >
            Get Onboarded! We need just a little information to get you started
            with your onboarding package.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="company"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Company" fullWidth margin="normal" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                placeholder="Enter phone number"
                value={field.value}
                onChange={field.onChange}
                containerStyle={{ padding: "0px" }}
                inputStyle={{ width: "100%", padding: "30px 50px" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                margin="normal"
                required
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="url"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="URL" fullWidth margin="normal" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="phone-number">Choose a Plan</InputLabel>
                <Select
                  {...field}
                  label="Phone Number"
                  inputProps={{
                    id: "phone-number",
                  }}
                  required
                >
                  {phoneOptions.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      <ListItemIcon>{option.flag}</ListItemIcon>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="card"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Card" fullWidth margin="normal" />
            )}
          />
          <Typography
            component={"p"}
            fontSize="12px"
            fontFamily={"Open Sans"}
            lineHeight={"26px"}
            color="#363f48"
            sx={{ overflowWrap: "break-word", paddingLeft: "10px" }}
          >
            Name on Card
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component={"p"}
            fontSize="12px"
            fontFamily={"Open Sans"}
            lineHeight={"26px"}
            color="#363f48"
            sx={{ overflowWrap: "break-word", paddingLeft: "10px" }}
          >
            By submitting your credit card details, you agree to the terms and
            conditions and you authorize Yougoz to purchase.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <Recaptcha sitekey="6LfFeiYoAAAAAPu17turRqCGMoo4gIDzS67XwcZV" /> */}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            type="submit"
            sx={{
              color: "#363f48",
              "&:hover": {
                color: "#333",
                background: "#eee",
              },
            }}
            style={{
              marginBottom: "10px",
              padding: "5px 18px",
              fontSize: "17px",
              border: "1px solid #eee",
              borderRadius: "5px",
              lineHeight: "37px",
              textTransform: "capitalize",
              boxShadow: "none",
              overflowWrap: "break-word",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FomePlan;

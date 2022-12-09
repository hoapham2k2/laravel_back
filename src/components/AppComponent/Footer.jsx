import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const StyledFooter = styled(Card)`
  width: 100%;
  height: 300px;
  padding: 0 20px;
  background-color: rgb(4, 17, 29);

  .container_footer {
    padding: 0;
  }

  & .top_footer {
    margin-top: 50px;
    display: flex;
    gap: 100px;
    & .top_left_footer {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 100%;

      & .mail {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        & .mail_input {
          font-size: 16px;
          & .MuiOutlinedInput-root {
            border-radius: 12px;
            text-overflow: ellipsis;
            font-size: inherit;
            line-height: inherit;
}
          }
        }

        & .mail_submit {
          border-radius: 12px;
          background-color: rgb(32, 129, 226);
          color: rgb(255, 255, 255);
          font-size: 16px;
          align-self: flex-start;
          padding: 15px 40px; 
        }
      }
    }
  }

  & .top_right_footer {
    flex: 1;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    & .contacts {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 16px;
      & .contacts_icon {
        background-color: rgb(32, 129, 226);
        border-radius: 12px;
        padding: 10px;
        height: fit-content;
      }
    }
  }
`;

const Footer = () => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  const handleValidation = (e) => {
    const value = e.target.value;
    setValue(value);
    // regex for email validation
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.match(regex)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <StyledFooter>
      <Container className="container_footer" maxWidth="lg">
        <Box className="top_footer">
          <Box className="top_left_footer">
            <Typography variant="h5">Stay in the loop</Typography>
            <Typography paragraph>
              Join our mailing list to stay in the loop with our newest feature
              releases, new campagin, and tips and tricks for navigating
              WESHARE.
            </Typography>
            <Box className="mail">
              <TextField
                fullWidth
                className="mail_input"
                variant="outlined"
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChange={(e) => handleValidation(e)}
                error={!valid}
                helperText={!valid && "Please enter a valid email"}
                required={true}
              />
              <Button className="mail_submit" variant="contained">
                Subscribe
              </Button>
            </Box>
          </Box>
          <Box className="top_right_footer">
            <Typography variant="h5">Contact with us</Typography>
            <Box className="contacts">
              <IconButton className="contacts_icon">
                <TwitterIcon />
              </IconButton>
              <IconButton className="contacts_icon">
                <FacebookIcon />
              </IconButton>
              <IconButton className="contacts_icon">
                <InstagramIcon />
              </IconButton>
              <IconButton className="contacts_icon">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ marginTop: 5, marginBottom: 5 }} />

        {/* improving the footer sau nay */}
        <Box className="bottom_footer">
          <Box className="bottom_left_footer"></Box>
          <Box className="bottom_right_footer"></Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

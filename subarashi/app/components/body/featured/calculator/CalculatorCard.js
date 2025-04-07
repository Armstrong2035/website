import { Icon, Stack, Typography, Container, Box, Grid2 } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import typographyStyles from "../../../../styles";
import Link from "next/link";

export default function CalculatorCard() {
  return (
    <Container>
      <Grid2 container direction={"row"} spacing={10} justifyContent={"center"}>
        <Grid2 item>
          <Image
            src={
              "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_auto,dpr_auto,c_scale/v1742980894/FLexible_payments_bteyox.png"
            }
            width={400}
            height={400}
            alt="calculator"
            style={{
            width: "100%",
            }}
          />
        </Grid2>

        <Grid2
          item
          sx={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            pt: 2,
          }}
        >
          <Typography
            sx={{
              ...typographyStyles.bodyLarge,
              fontSize: "55px",
              lineHeight: "107.7%",
            }}
          >
            Split rental cheques <br /> into 12 easy <br /> installments!
          </Typography>

          <Link href={"/subarashi-flex"} style={{ textDecoration: "none" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                sx={{
                  ...typographyStyles.bodyMedium,
                  fontSize: "23px",
                  lineHeight: "120%",
                  color: "#043D32",
                }}
              >
                Find Out More
              </Typography>
              <Icon>
                <ArrowForwardIcon sx={{ color: "#043D32" }} />
              </Icon>
            </Stack>
          </Link>
        </Grid2>
      </Grid2>
    </Container>
  );
}

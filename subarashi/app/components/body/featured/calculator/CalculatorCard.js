"use client";
import {
  Stack,
  Typography,
  Container,
  Box,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import typographyStyles from "../../../../styles";
import Link from "next/link";

export default function CalculatorCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,82,68,0.08)',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 48px rgba(0,82,68,0.12)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: { xs: 4, md: 6 },
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box
            sx={{
              flex: '1 1 auto',
              maxWidth: { xs: '100%', md: '50%' },
              position: 'relative',
            }}
          >
            <Image
              src="https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_auto,dpr_auto,c_scale/v1742980894/FLexible_payments_bteyox.png"
              width={400}
              height={400}
              alt="calculator"
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </Box>

          <Box
            sx={{
              flex: '1 1 auto',
              maxWidth: { xs: '100%', md: '50%' },
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Typography
              sx={{
                ...typographyStyles.bodyLarge,
                fontSize: isMobile ? "40px" : "55px",
                lineHeight: "107.7%",
                color: '#005244',
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,82,68,0.1)',
              }}
            >
              Split rental cheques into 12 easy installments!
            </Typography>

            <Link href="/subarashi-flex" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#005244',
                  color: '#fff',
                  padding: '12px 24px',
                  fontSize: '18px',
                  borderRadius: '12px',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#006d5b',
                    transform: 'translateX(8px)',
                  },
                }}
              >
                Learn more
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

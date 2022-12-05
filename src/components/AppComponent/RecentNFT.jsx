import { Box, Card, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import nft1 from "../../assets/img/nft1.jpg";
import nft2 from "../../assets/img/nft2.jpg";
import nft3 from "../../assets/img/nft3.jpg";
import nft4 from "../../assets/img/nft4.jpg";
import nft5 from "../../assets/img/nft5.jpg";
import nft6 from "../../assets/img/nft6.jpg";
import nft7 from "../../assets/img/nft7.jpg";
import nft8 from "../../assets/img/nft8.jpg";
import nft9 from "../../assets/img/nft9.jpg";
import nft10 from "../../assets/img/nft10.jpg";
import nft11 from "../../assets/img/nft11.jpg";
import nft12 from "../../assets/img/nft12.jpg";

const RecentNFT = () => {
  var items = [
    [
      {
        title: "Lazer Man #1",
        img: nft1,
      },
      {
        title: "Astronaut",
        img: nft2,
      },
      {
        title: "Lazer Man #2",
        img: nft3,
      },
      {
        title: "Lazer Man #3",
        img: nft4,
      },
    ],
    [
      {
        title: "Robot Girl #1",
        img: nft5,
      },
      {
        title: "Robot Girl #2",
        img: nft6,
      },
      {
        title: "Old Man Thing",
        img: nft7,
      },
      {
        title: "Cry Boiz",
        img: nft8,
      },
    ],
    [
      {
        title: "Shy Girl",
        img: nft9,
      },
      {
        title: "Blind Boiz",
        img: nft10,
      },
      {
        title: "Connecting @2410",
        img: nft11,
      },
      {
        title: "Nothing in us",
        img: nft12,
      },
    ],
  ];

  function Item(props) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          padding: 2,
        }}
      >
        {props.item.map((item, i) => (
          <Card
            key={i}
            sx={{
              width: 300,
              height: 400,
            }}
          >
            <Box
              sx={{
                width: "100% !important",
                height: "80%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={item.img}
                alt="NFT_IMG"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box sx={{ width: "100%", padding: 2 }}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "5px",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    );
  }
  return (
    <Box className="NFT101" sx={{ mt: "24px" }}>
      <Typography variant="h4" gutterBottom>
        Recent NFTs
      </Typography>
      <Carousel
        autoPlay
        interval={6000}
        animation="slide"
        duration={2000}
        swipe
        indicators
        navButtonsAlwaysVisible
        sx={{
          ".css-1m9128y": {
            display: "none",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default RecentNFT;

// export default function NFT101(props) {
//     var items = [
//       [
//         {
//           title: "What is an NFT?",
//           img: lesson1,
//           URL: "https://opensea.io/learn/what-are-nfts",
//         },
//         {
//           title: "What is a crypto wallet?",
//           img: lesson2,
//           URL: "https://opensea.io/learn/what-is-crypto-wallet",
//         },
//         {
//           title: "What are blockchain gas fees?",
//           img: lesson3,
//           URL: "https://opensea.io/learn/nft-gas-fees",
//         },
//       ],
//       [
//         {
//           title: "How to buy an NFT",
//           img: lesson4,
//           URL: "https://opensea.io/learn/how-to-buy-nft",
//         },
//         {
//           title: "How to create an NFT on Opensea",
//           img: lesson5,
//           URL: "https://opensea.io/learn/how-to-create-an-nft",
//         },
//         {
//           title: "How to sell an NFT on Opensea",
//           img: lesson6,
//           URL: "https://opensea.io/learn/how-to-sell-nfts",
//         },
//       ],
//       [
//         {
//           title: "What is minting?",
//           img: lesson7,
//           URL: "https://opensea.io/learn/what-is-minting-nft",
//         },
//         {
//           title: "Who is Opensea?",
//           img: lesson8,
//           URL: "https://opensea.io/learn/who-is-opensea",
//         },
//         {
//           title: "What is Ethereum?",
//           img: lesson9,
//           URL: "https://coin98.net/ethereum-la-gi",
//         },
//       ],
//     ];

//     return (
//       <Box className="NFT101" sx={{ mt: "24px" }}>
//         <Typography variant="h4" gutterBottom>
//           NFT 101
//         </Typography>
//         <Carousel
//           autoPlay
//           interval={4000}
//           animation="slide"
//           duration={2000}
//           swipe
//           indicators
//           navButtonsAlwaysVisible
//           sx={{
//             ".css-1m9128y": {
//               display: "none",
//             },
//           }}
//         >
//           {items.map((item, i) => (
//             <Item key={i} item={item} />
//           ))}
//         </Carousel>
//       </Box>
//     );

//     function Item(props) {
//       return (
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "100%",
//             padding: "0 24px",
//           }}
//         >
//           {props.item.map((item, i) => (
//             <Card
//               key={i}
//               sx={{
//                 width: "30%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 borderRadius: "16px",
//               }}
//               onClick={() => window.open(item.URL, "_blank")}
//             >
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: 300,
//                   overflow: "hidden",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt=""
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </Box>
//               <Box sx={{ width: "100%", padding: 2 }}>
//                 <Typography variant="h6">{item.title}</Typography>
//               </Box>
//             </Card>
//           ))}
//         </Box>
//       );
//     }
//   }

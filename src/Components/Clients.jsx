import { useEffect, useState } from "react";
import { Box, Grid, ImageListItem } from "@mui/material";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const origin = location.origin;

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch("/data/clients.json");
        const data = await response.json();
        setClients(data);
      }catch(err){
        console.error('Error Fetching Clients: ' + err)
      }
    })();
  }, []);
  return (
    <div id="clients">
      <Box p={10} sx={{ bgcolor: "#F0F0F0" }}>
        <Grid container rowGap={"5rem"}>
          {clients.map((client) => (
            <Grid key={client.title} xs={12} sm={6} md={3} item>
              <ImageListItem>
                <img
                  className="grayscale transition hover:scale-105 hover:grayscale-0"
                  style={{
                    margin: "auto",
                    height: "144px",
                    width: "240px",
                    objectFit: "contain",
                  }}
                  src={`${origin}/${client.img}`}
                  alt={client.title}
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Clients;

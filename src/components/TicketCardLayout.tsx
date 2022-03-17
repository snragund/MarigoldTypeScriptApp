import { Box, Inline } from "@marigold/components";
import TicketCard from "./TicketCard";
import React from "react";
import { data } from "../database/data";

export const TicketCardLayout: React.FC = () => (
  <Box height="700px" width="100%">
    {data.map((item) => (
      <React.Fragment key={item.id}>
        <Inline space="small">
          <TicketCard item={item} />
        </Inline>
      </React.Fragment>
    ))}
  </Box>
);

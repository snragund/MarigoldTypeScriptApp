import React from "react";
import {
  Box,
  Card,
  Column,
  Columns,
  Inline,
  Stack,
  Text,
  Image,
} from "@marigold/components";
import { Calendar, Marker } from "@marigold/icons";

interface TicketCardProps {
  item: {
    image: string;
    eventName: string;
    date: string;
    location: string;
  };
}

const TicketCard: React.FC<TicketCardProps> = ({ item }) => (
  <Box as={Card} css={{ width: "520px", padding: "none" }}>
    <Columns space="xsmall" verticalAlign="top" horizontalAlign="left">
      <Column width={4}>
        <Image
          src={item.image}
          alt="dog_img"
          width="400px"
          height="150px"
        ></Image>
      </Column>

      <Column width={7}>
        <Stack space="xxsmall">
          <Text as="h3" variant="headline3">
            {item.eventName}
          </Text>

          <Inline space="small">
            <Calendar fill="primary" />

            <Text>{item.date}</Text>
          </Inline>

          <Inline space="small">
            <Marker fill="primary" />

            <Text>{item.location}</Text>
          </Inline>
        </Stack>
      </Column>

      <Column width={1}>
        <Box
          p="xsmall"
          border="1px solid #9496a3"
          borderRadius="4px"
          width="4px"
          height="150px"
          bg="primary"
        ></Box>
      </Column>
    </Columns>
  </Box>
);

export default TicketCard;

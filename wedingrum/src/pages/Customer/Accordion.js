import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionContainer = styled(Accordion)({
  width: "63vw",
  margin: "auto",
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc",
});

const AccordionItem = ({ category, item }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <AccordionContainer onChange={toggleDescription}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
        <Typography className="category" sx={{ marginRight: "3vw" }}>{category.category}</Typography>
        <Typography className="title">{item.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {showDescription && (
          <Typography className="description">
            {item.description}
          </Typography>
        )}
      </AccordionDetails>
    </AccordionContainer>
  );
};

export default AccordionItem;
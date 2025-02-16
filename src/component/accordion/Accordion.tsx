import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ArrowDownward, ArrowDropDown } from '@mui/icons-material';
import "./accordion.sass";

export default function AccordionExpandIcon() {
  return (
    <div className="accordion-container">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ArrowDownward className="accordion-icon"/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-summary"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDown className="accordion-icon"/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

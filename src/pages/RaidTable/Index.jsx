import React from "react";
import Config from "../../config";
import { useSelector } from "react-redux";
import { GetAllRaids, LinkToArt } from "../../Raids/Raids";

import { RaidTableInfo } from "./RaidTableInfo";
import { RaidTableMisc } from "./RaidTableMisc";
import { RaidTableTiers } from "./RaidTableTiers";

import { Paper } from "@material-ui/core";
import { Col, Row, Accordion, Card } from "react-bootstrap";

function RaidTable() {
  //const dispatch = useDispatch();

  const raidName = useSelector(state => state.openRaidReducer);
  const raid = GetAllRaids.find(element => element.name === raidName);

  return (
    <>
      <Paper className="m-2 bg-dark">
        <Row className="py-2">
          <Col>
            <img
              src={LinkToArt("Thumb", raid.size.value, raid.art_thumb)}
              alt={raid.name}
            />
          </Col>
          <Col>
            <div>
              <h4 className={`Size ${raid.size.value} Text`}>{raid.name}</h4>
            </div>
            <div>
              <h5 className={`${raid.size.value} Text`}>{raid.size.value}</h5>
            </div>
          </Col>
        </Row>
      </Paper>

      <Accordion>
        <Card className="bg-dark text-light m-2">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Misc Data
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p className="text-center">
                <i>{raid.notes}</i>
              </p>
              {/* Info table */}
              <RaidTableInfo raid={raid} />

              {/* Raid misc table */}
              <RaidTableMisc raid={raid} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {Config.dev_mode === true && (
          <Card className="bg-dark text-light m-2">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Raw JSON
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <pre className="text-left text-light text-justify">
                  {JSON.stringify(raid, null, 3)}
                </pre>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )}
      </Accordion>

      {/* Raid tiers table */}
      <RaidTableTiers raid={raid} />

      {/* Return ends here */}
    </>
  );
}

export default RaidTable;

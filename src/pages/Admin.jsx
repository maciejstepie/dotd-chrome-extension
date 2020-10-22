import React from "react";
import { Form, Field } from "react-final-form";
import { Form as BForm, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import { ColossalRaidsData as some } from "../Raids/Colossal";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2));
};

const types = [
  { value: "Deadly" },
  { value: "Dragon" },
  { value: "Magical Creature" }
];

const sizes = [
  { value: "Epic" },
  { value: "Medium" },
  { value: "Colossal" },
  { value: "Large" },
  { value: "Personal" },
  { value: "Gigantic" }
];

export class AdminTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: some[0] };
  }

  componentDidMount() {
    document.body.style.width = "100%";
  }
  render() {
    return (
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        initialValues={this.state.val}
        render={({
          handleSubmit,
          values,
          form: {
            mutators: { push, pop }
          }
        }) => (
          <BForm onSubmit={handleSubmit} className="m-2">
            <Row className="mb-2">
              <Col>
                <div className="text-info">Name</div>
                <Field
                  name="name"
                  render={({ input, meta }) => (
                    <BForm.Control type="text" {...input} required />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">Size</div>
                <Field
                  name="size"
                  render={({ input, meta }) => (
                    <Select
                      {...input}
                      options={sizes}
                      getOptionLabel={option => option.value}
                    />
                  )}
                />
              </Col>
            </Row>
            {/*Second Row*/}
            <Row>
              <Col>
                <div className="text-info">Type</div>
                <Field
                  name="type"
                  render={({ input, meta }) => (
                    <Select
                      {...input}
                      options={types}
                      isMulti
                      isSearchable
                      getOptionLabel={option => option.value}
                    />
                  )}
                />
              </Col>
            </Row>
            {/*Third Row*/}
            <Row>
              <Col>
                <div className="text-info">Timer</div>
                <Field
                  name="timer"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">Magics</div>
                <Field
                  name="magics"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">Cooldown</div>
                <Field
                  name="cooldown"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">Max Players</div>
                <Field
                  name="maxPlayers"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-info">Rarity</div>
                <Field
                  name="rarity"
                  render={({ input, meta }) => (
                    <Select
                      {...input}
                      options={[{ value: "Uncommon" }]}
                      getOptionLabel={option => option.value}
                    />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">Resources</div>
                <Field
                  name="resources"
                  render={({ input, meta }) => (
                    <Select
                      {...input}
                      options={[
                        { value: "Energy" },
                        { value: "Stamina" },
                        { value: "Honor" }
                      ]}
                      getOptionLabel={option => option.value}
                      isMulti
                    />
                  )}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="text-info">statSwap.Attack</div>
                <Field
                  name="statSwap.Attack"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">statSwap.Defense</div>
                <Field
                  name="statSwap.Defense"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">statSwap.Health</div>
                <Field
                  name="statSwap.Health"
                  render={({ input, meta }) => (
                    <BForm.Control type="number" {...input} />
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-info">notes_obtain</div>
                <Field
                  name="notes_obtain"
                  render={({ input, meta }) => (
                    <BForm.Control type="text" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">notes</div>
                <Field
                  name="notes"
                  render={({ input, meta }) => (
                    <BForm.Control type="text" {...input} />
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-info">art_thumb</div>
                <Field
                  name="art_thumb"
                  render={({ input, meta }) => (
                    <BForm.Control type="text" {...input} />
                  )}
                />
              </Col>
              <Col>
                <div className="text-info">art_essence</div>
                <Field
                  name="art_essence"
                  render={({ input, meta }) => (
                    <BForm.Control type="text" {...input} />
                  )}
                />
              </Col>
            </Row>

            {/*tiers*/}
            <div className="text-info d-inline m-4">Tiers</div>
            <Row>
              <Col>
                <Button
                  variant="info"
                  type="button"
                  onClick={() => push("tiers", undefined)}
                >
                  Add Tier group
                </Button>
              </Col>
              <Col>
                <Button
                  variant="info"
                  type="button"
                  onClick={() => pop("tiers")}
                >
                  Remove Tier group
                </Button>
              </Col>
            </Row>

            <Button type="submit" className="m-2" variant="info">
              Fixlabels
            </Button>

            <FieldArray name="tiers">
              {({ fields }) =>
                fields.map((group, index) => (
                  <div key={index}>
                    <div>
                      <Field
                        name={`${group}.difficulty`}
                        component="input"
                        placeholder="difficulty"
                      />
                      <Field
                        name={`${group}.maxHp`}
                        component="input"
                        placeholder="maxHp"
                      />
                      <Field
                        name={`${group}.AP`}
                        component="input"
                        placeholder="AP"
                      />
                      <span
                        onClick={() => fields.remove(index)}
                        style={{ cursor: "pointer" }}
                      >
                        X
                      </span>
                      {<div>{JSON.stringify(group
                         || "nope")}</div>}
                    </div>
                    
                  </div>
                ))
              }
            </FieldArray>

            <pre className="w-100">{JSON.stringify(values, null, 1)}</pre>
          </BForm>
        )}
      />
    );
  }
}

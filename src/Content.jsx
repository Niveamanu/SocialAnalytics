import React, { createRef } from "react";
import { nanoid } from "nanoid";

import { data, endpoint, stream } from "./data";
import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useGlobalContext } from "./Context";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

import MultiSelect from "multiselect-react-dropdown";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DynamicForm = () => {
  const { currentItem } = useGlobalContext();
  const [selected, setSelected] = useState(null);
  const [options, setOptions] = useState([]);
  const [timOptions, setTimOptions] = useState([]);

  const [time, settime] = useState([]);
  const [life, setlife] = useState([]);
  let [timeoptions, settimeoptions] = useState([]);

  let [lifeoptions, setlifeoptions] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    const fun = () => {
      let x = [];
      let y = [];

      data

        .filter((item) => item.type == "select")

        .map((i) => {
          endpoint

            .filter(
              (item) => item.type == i.label && item.stream == currentItem
            )

            .map((filterdata) => {
              if (filterdata.type == "LifeTime") {
                x.push(filterdata.label);
              } else {
                y.push(filterdata.label);
              }
            });
        });

      setOptions(x);

      setTimOptions(y);
    };

    fun();
  }, [currentItem]);

  let [initval, setinitval] = useState([
    data.reduce((defaults, field) => {
      return { ...defaults, [field.name]: field.initial };
    }, {}),
  ]);

  let [jsonfile, setjsonfile] = useState([]);

  const [FieldDefaults, setFieldDefaults] = useState(
    data.reduce((defaults, field) => {
      return {
        ...defaults,

        [field.name]: field[`${currentItem}`],
      };
    }, {})
  );

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();

      if (jsonfile != null) alert(jsonfile);
    }
  };

  useEffect(() => {
    // setSelected(0);
    {
      stream
        .filter((item) => item.name == currentItem)
        .map((x) => {
          const index = x.id;

          if (initval[index] === undefined) setFieldDefaults(initval[0]);
          else setFieldDefaults(initval[index]);
          if (time[index] == undefined) settimeoptions([]);
          else settimeoptions(time[index]);

          if (life[index] == undefined) setlifeoptions([]);
          else setlifeoptions(life[index]);
        });
    }
  }, [currentItem]);

  const toggle = (i) => {
    if (selected === i) return setSelected(null);

    setSelected(i);
  };

  var uniqueheader = [];

  for (let i = 0; i < data.length; i++) {
    if (uniqueheader.indexOf(data[i].header) === -1) {
      uniqueheader.push(data[i].header);
    }
  }

  const uniqueParams = uniqueheader.map((items, i) => {
    return data
      .filter(
        (item) => item.header == items && item.stream.includes(currentItem)
      )
      .map((items) => {
        return items.header;
      });
  });
  const uniqueParamsLen = uniqueParams.map((items, i) => {
    return items.length;
  });

  return (
    <div className="hero-container">
      <Formik
        innerRef={formRef}
        key={`${currentItem}`}
        initialValues={FieldDefaults}
        enableReinitialize
        onSubmit={(values) => {
          var sorted = {};

          for (var i = 0, max = data.length; i < max; i++) {
            if (sorted[data[i].header] == undefined) {
              sorted[data[i].header] = [];
            }

            sorted[data[i].header].push(data[i].name);
          }

          const obj2 = { credential: {}, parameter: {}, endpoint: {} };

          {
            uniqueheader.map((items, i) => {
              const array = sorted[items];

              const obj = values;

              function picker(array, obj) {
                return array.reduce(function (newObj, key) {
                  if (key in obj) newObj[key] = obj[key];

                  {
                    if (items == "credentials" && uniqueParamsLen[0] > 0) {
                      obj2.credential = newObj;

                      return newObj;
                    }

                    if (items == "parameters" && uniqueParamsLen[1] > 0) {
                      obj2.parameter = newObj;

                      return newObj;
                    }

                    let final_arr = [];

                    let concat_string = "";

                    if (items == "Endpoint" && uniqueParamsLen[2] > 0) {
                      for (let i in values) {
                        if (i == "life_time" || i == "time_bound") {
                          let val = values[i];

                          for (let j in val) {
                            for (let k in endpoint) {
                              if (
                                val[j] == endpoint[k].label &&
                                currentItem == endpoint[k].stream
                              ) {
                                concat_string += endpoint[k].value + ",";

                                var trim = concat_string.replace(
                                  /(^\s*,)|(,\s*$)/g,

                                  ""
                                );

                                stream

                                  .filter((item) => item.name == currentItem)

                                  .map((x) => {
                                    const index = x.id;

                                    final_arr[index] = trim;
                                  });
                              }
                            }
                          }
                        }
                      }

                      var res = final_arr.filter((elements) => {
                        return elements !== null;
                      });

                      obj2.endpoint = res;

                      return res;
                    }
                    if (items == "path" && uniqueParamsLen[3] > 0) {
                      obj2.path = newObj;

                      return newObj;
                    }
                  }
                }, {});
              }

              picker(array, obj);
            });
          }

          const test = `{${currentItem}:` + (JSON.stringify(obj2) + "}");

          {
            stream
              .filter((item) => item.name == currentItem)
              .map((x) => {
                const index = x.id;
                initval[index] = values;
                time[index] = values.time_bound;

                life[index] = values.life_time;
                jsonfile[index - 1] = test;
              });
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div>
              {uniqueheader.map((items, i) => {
                if (uniqueParamsLen[i] > 0) {
                  return (
                    <section className="question" key={i}>
                      <div className="title" onClick={() => toggle(i)}>
                        <h4 className="hd-btn">{items}</h4>

                        <span>
                          {selected === i ? (
                            <HiChevronUp></HiChevronUp>
                          ) : (
                            <HiChevronDown></HiChevronDown>
                          )}
                        </span>
                      </div>
                      <div
                        key={i}
                        className={selected === i ? "content show" : "content"}
                      >
                        {data
                          .filter(
                            (item) =>
                              item.header == items &&
                              item.stream.includes(currentItem)
                          )
                          .map((filteredlist, i) => (
                            <div className="form-row header" key={i}>
                              <label
                                htmlFor={filteredlist.name}
                                className="form-label"
                              >
                                {filteredlist.label}
                              </label>
                              {filteredlist.type == "date" && (
                                <DatePicker
                                  selected={
                                    filteredlist.name == "start_time"
                                      ? values.start_time
                                      : values.end_time
                                  }
                                  dateFormat="MMMM d, yyyy"
                                  className="form-control"
                                  name={filteredlist.name}
                                  onChange={(date) => {
                                    setFieldValue(`${filteredlist.name}`, date);
                                  }}
                                />
                              )}
                              {filteredlist.type == "text" && (
                                <Field
                                  type={filteredlist.type}
                                  name={filteredlist.name}
                                  id={filteredlist.id}
                                  className="form-input"
                                  {...filteredlist}
                                />
                              )}
                              {filteredlist.type == "url" && (
                                <Field
                                  type={filteredlist.type}
                                  name={filteredlist.name}
                                  id={filteredlist.id}
                                  className="form-input"
                                  {...filteredlist}
                                />
                              )}

                              {filteredlist.type == "select" && (
                                <MultiSelect
                                  isObject={false}
                                  options={
                                    filteredlist.label == "LifeTime"
                                      ? options
                                      : timOptions
                                  }
                                  selectedValues={
                                    filteredlist.label == "LifeTime"
                                      ? lifeoptions
                                      : timeoptions
                                  }
                                  showCheckbox
                                  onRemove={(data) => {
                                    setFieldValue(`${filteredlist.name}`, data);
                                  }}
                                  onSelect={(data) => {
                                    setFieldValue(`${filteredlist.name}`, data);
                                  }}
                                ></MultiSelect>
                              )}
                              {/* <ErrorMessage name={filteredlist.name}>
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage> */}
                            </div>
                          ))}
                      </div>
                    </section>
                  );
                } else return null;
              })}
            </div>
            <div className="buttonContainer">
              <button
                type="submit"
                className="btn"
                name="save"
                onSubmit={Formik.onSubmit}
                onClick={() => {
                  alert("saved successfully");
                }}
              >
                save data
              </button>
              <button type="submit" className="btn" onClick={handleSubmit}>
                generate JSON
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;

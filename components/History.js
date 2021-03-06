import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button } from "semantic-ui-react";
import { REMOVE_SIMPLE_REQUEST } from "../reducers/translate";

const History = ({ onItemClick }) => {
  const { simple } = useSelector((state) => state.translate);

  const dispatch = useDispatch("");
  const onClickRemove = useCallback(
    (historyid) => () => {
      dispatch({ type: REMOVE_SIMPLE_REQUEST, data: { historyid } });
    },
    [],
  );

  return (
    <>
      <List
        divided
        style={{
          height: "65%",
          width: "100%",
          overflow: "auto",
          overflowX: "hidden",
        }}
      >
        {simple?.map((v, index) => (
          <List.Item
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "7px",
            }}
          >
            <div
              tabIndex={index}
              role="button"
              style={{ flexGrow: "2" }}
              onKeyPress={onItemClick(v.input, v.output)}
              onClick={onItemClick(v.input, v.output)}
            >
              <span style={{ fontSize: "15px" }}>{v.input}</span>
            </div>
            <Button
              style={{ zIndex: 1000 }}
              icon="trash alternate outline"
              onClick={onClickRemove(v.historyid)}
            />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default History;

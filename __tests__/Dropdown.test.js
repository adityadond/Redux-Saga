import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dropdown from "../src/Dropdown";

const mockStore = configureStore([]);

describe("Dropdown", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      item: {
        id: 1,
        quantity: "2",
      },
    });

    component = render(
      <Provider store={store}>
        <Dropdown item={{ id: 1, quantity: "2" }} />
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(component).toBeTruthy();
  });

  it("updates state and dispatches action on value change", () => {
    const select = component.getByRole("combobox");
    fireEvent.change(select, { target: { value: "3" } });
    expect(select.value).toBe("3");
    expect(store.getActions()).toEqual([{ type: "CHANGE_QTY", id: 1, qty: 3 }]);
  });
});

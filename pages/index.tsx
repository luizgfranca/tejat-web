import type { NextPage } from "next";
import Selector from "../ui/selector";

const Home: NextPage = () => {
  return (
    <Selector
      options={[
        {
          description: "First",
          action: () => {
            alert("first");
          },
        },
        {
          description: "Second",
          action: () => {
            alert("second");
          },
        },
        {
          description: "i am here!",
          action: () => {
            alert("i am here");
          },
        },
      ]}
    />
  );
};

export default Home;

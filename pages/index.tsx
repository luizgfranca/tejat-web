import type { NextPage } from "next";
import Grid from "../ui/grid";
import Selector from "../ui/selector";

const Home: NextPage = () => {
  return (
    <div className="page">
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
      <Grid 
        headers={[
          {propertyName: 'col1', description: 'first'},
          {propertyName: 'col2', description: 'second'},
          {propertyName: 'col3', description: 'third'}
        ]}
        items={
          [
            {col1: 1, col2: 2, col3: 3},
            {col1: 4, col2: 5, col3: 6},
            {col1: 7, col2: 8, col3: 9},
            {col1: 10, col2: 11, col3: 12}
          ]
        }
      />
    </div>
    
  );
};

export default Home;

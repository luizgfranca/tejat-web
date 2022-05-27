import getLineArray from "./lib/getLineArray";
import baseGridDesign from "./style.module.css";
import { GridProps } from "./types";

const Grid: React.FC<GridProps> = (props) => {
  if (props.headers.length === 0) {
    return null;
  }

  return (
    <div className={baseGridDesign.grid}>
      <div className={baseGridDesign.gridHeader}>
        {props.headers.map((column, index) => (
          <div className={baseGridDesign.gridHeaderColumn} key={index}>
            {column.description}
          </div>
        ))}
      </div>

      <div className={baseGridDesign.gridBody}>
        {props.items.map((item, index) => (
          <div className={baseGridDesign.gridBodyLine} key={index}>
            {getLineArray(item, props.headers).map((columnValue, index) => (
              <div className={baseGridDesign.gridBodyColumn} key={index}>
                {columnValue}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

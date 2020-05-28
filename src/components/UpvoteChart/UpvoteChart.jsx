import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

import { StyledUpvoteChart } from "./UpvoteChart.style";

export default function UpvoteChart(props) {
  const { feeds, isUpvoted } = props;

  const data = feeds.map((feed) => {
    const { objectID: ID, points: upvoteCount } = feed;

    return {
      ID,
      Votes: isUpvoted(ID) ? upvoteCount + 1 : upvoteCount,
    };
  });

  if (!feeds.length) {
    return null;
  }
  return (
    <StyledUpvoteChart>
      <ResponsiveContainer minHeight="300px" width="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="ID"
            height={90}
            tick={{
              angle: 90,
              textAnchor: "start",
              dominantBaseline: "ideographic",
            }}
          >
            <Label value="ID" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis
            type="number"
            domain={["dataMin - 100", "dataMax + 100"]}
            label={{ value: "Votes", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Line type="linear" dataKey="Votes" />
        </LineChart>
      </ResponsiveContainer>
    </StyledUpvoteChart>
  );
}

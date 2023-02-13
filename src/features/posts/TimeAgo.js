import { parseISO, formatDistanceToNow } from "date-fns";
const TimeAgo = ({ date }) => {
  return <span> {formatDistanceToNow(parseISO(date))} ago</span>;
};

export default TimeAgo;


import {format} from 'date-fns';

export default function Date({ dateString }: {
    dateString: string;
}) {    
  return <span>{format(dateString, "LLLL d, yyyy")}</span>;
}
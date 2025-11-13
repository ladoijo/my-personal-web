const DateRangeHistory = ({
  start,
  end,
  even
}: {
  start: string;
  end?: string;
  even?: boolean;
}) => <b className={even ? 'text-left' : 'text-right'}>{`${start} - ${end}`}</b>;

export default DateRangeHistory;

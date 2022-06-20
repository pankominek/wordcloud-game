interface CheckStatusProperties {
  status: boolean;
}

function CheckStatus({ status }: CheckStatusProperties) {
  return (
    <span
      className={`font-bold ${status ? "text-green-500" : "text-red-300 "}`}
    >
      {status ? "Good" : "Bad"}
    </span>
  );
}

export default CheckStatus;

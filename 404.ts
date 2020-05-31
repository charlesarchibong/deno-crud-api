export default ({ response }: { response: any }) => {
  const res = { error: "Not Found" };
  response.status = 404;
  response.body = res;
};

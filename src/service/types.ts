enum HeadersKeys {
  CONTENT_TYPE = 'Content-Type',
}
enum HeadersContentType {
  URLENCODED = 'application/x-www-form-urlencoded',
  JSON = 'application/json',
}
enum FetchMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export { FetchMethod, HeadersContentType, HeadersKeys };

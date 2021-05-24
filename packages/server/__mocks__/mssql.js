const mssql = {}

mssql.query = jest.fn(() => ({
  recordset: [
    {
      a: "string",
      b: 1,
    },
  ],
}))

// mssql.connect = jest.fn(() => ({ recordset: [] }))

mssql.ConnectionPool = jest.fn(() => ({
  connect: jest.fn(() => ({
    request: jest.fn(() => ({
      query: jest.fn(() => ({})),
    })),
  })),
}))

module.exports = mssql

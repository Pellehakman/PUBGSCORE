class ParseHelper {
  public parseJSON = (data: any) => {
    JSON.parse(JSON.stringify(data))

    return JSON.parse(JSON.stringify(data))
  }
}

const $parseHelper = new ParseHelper()
export { $parseHelper }

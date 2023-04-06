export interface IPriceHelper {
  getPriceLength(value: number): number
}

class PriceHelper implements IPriceHelper {
  public getPriceLength = (value: number | undefined): number => {
    if (!value) {
      return 0
    }

    return value.toString().length
  }
}

const $priceHelper = new PriceHelper()
export { $priceHelper }

import { PriceTracker } from "./priceTracker"

export class PriceUpdateSystem {
  public trackers: PriceTracker[]
  public trackers1: PriceTracker[]
  public trackers2: PriceTracker[]
  public lastUpdated: number
  public startSeconds: number

  constructor(trackers: PriceTracker[], t1?: PriceTracker[], t2?: PriceTracker[]) {
    this.trackers = trackers; this.trackers1 = t1; this.trackers2 = t2;
    this.startSeconds = Math.floor(Date.now() / 1000); // Starting time in seconds.
    let clockSeconds = new Date().getSeconds();
    let onesPlace = clockSeconds - Math.floor(clockSeconds / 10) * 10;
    this.lastUpdated = this.startSeconds - onesPlace;
    this.getBEMNewPrices(); this.getBAPNewPrices(); this.getK1NNewPrices();
  }

  public update(dt: number) {
    let currentSeconds = Math.floor(Date.now() / 1000)
    if (currentSeconds - this.lastUpdated >= 10) {
      // Every 10 seconds.
      this.lastUpdated = currentSeconds
      this.getBEMNewPrices(); this.getBAPNewPrices(); this.getK1NNewPrices();
    }
  }

  public async getBEMNewPrices() {
    try {
      let targetUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,decentraland&vs_currencies=usd&include_24hr_change=true"
      let response = await fetch(targetUrl);
      let json = await response.json();
      log("BEM API Results: ", json);
      let prices = {
        BTCUSD: json.bitcoin.usd,
        ETHUSD: json.ethereum.usd,
        MANAUSD: json.decentraland.usd,
      }
      let changes = {
        BTCUSD: json.bitcoin.usd_24h_change,
        ETHUSD: json.ethereum.usd_24h_change,
        MANAUSD: json.decentraland.usd_24h_change,
      }

      // Is it a green day or red day for bitcoin?
      json.bitcoin.usd_24h_change > 0 ? log("Green eyes") : log("Red eyes")

      for (let tracker of this.trackers) {
        tracker.updatePrice(prices[tracker.symbol], changes[tracker.symbol])
      }
    } catch {
      log("Failed to connect to CoinGecko API.")
    }
  }
  public async getBAPNewPrices() {
    try {
      let targetUrl = ("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,polkadot,cardano&vs_currencies=usd&include_24hr_change=true");
      let response = await fetch(targetUrl);
      let json = await response.json();
      log("BAP API Results: ", json);
      let prices = {
        BNBUSD: json.binance.usd,
        POLKAUSD: json.polka.usd,
        ADAUSD: json.cardano.usd,
      }

      let changes = {
        BNBUSD: json.binance.usd_24h_change,
        POLKAUSD: json.polkadot.usd_24h_change,
        ADAUSD: json.cardano.usd_24h_change,
      }

      // Is it a green day or red day for bitcoin?
      json.binance.usd_24h_change > 0 ? log("Green eyes") : log("Red eyes");

      for (let tracker of this.trackers1)
        tracker.updatePrice(prices[tracker.symbol], changes[tracker.symbol]);
    } catch {
      log("Failed to connect to CoinGecko API.");
    }
  }

  public async getK1NNewPrices() {
    try {
      let targetUrl = ("https://api.coingecko.com/api/v3/simple/price?ids=kyber-network-crystal,1inch,neo&vs_currencies=usd&include_24hr_change=true");
      let response = await fetch(targetUrl);
      let json = await response.json();
      log("K1C API Results: ", json);
      let prices = {
        KNCUSD: json.kyber.usd,
        INCHUSD: json.oneinch.usd,
        NEOUSD: json.neo.usd,
      }

      let changes = {
        KNCUSD: json.kyber.usd_24h_change,
        INCHUSD: json.oneinch.usd_24h_change,
        NEOUSD: json.neo.usd_24h_change,
      }

      // Is it a green day or red day for bitcoin?
      json.kyber.usd_24h_change > 0 ? log("Green eyes") : log("Red eyes");

      for (let tracker of this.trackers2)
        tracker.updatePrice(prices[tracker.symbol], changes[tracker.change]);
    } catch {
      log("Failed to connect to CoinGecko API.");
    }
  }
}
// DCP DEX Park
import { UGUI } from "./GUI";
import { ModelBuilders } from "./ModelBuilders";
import { NFTBuilders } from "./NFTBuilders";
import { MarketTickers } from "./marketAPI/marketTickers";
import { updateCoinData } from './marketData';
const _scene = new Entity('_scene');
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

// Build 3D Models
let mB = new ModelBuilders("Models");
mB.buildAllModels(_scene);

// Build NFTs
let nft = new NFTBuilders("NFTs");
//nft.buildDCLPlotNFTs(_scene);

// Build Market Data
//let mkt = new MarketTickers("DEX Markets", _scene);
//mkt.buildAllPriceTickers();
//mkt.buildExtraTickers(_scene);

// Build User GUI
let ugui = new UGUI("UserGUI"); 
ugui.DEXParkGUI();

// Market Data:
//updateCoinData();

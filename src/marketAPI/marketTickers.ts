import { PriceTracker } from "./priceTracker";
import { PriceUpdateSystem } from "./priceUpdateSystem";
export class MarketTickers{ 
    private _name: string;
    private _mT: MarketTickers;
    private _ticker: MarketTickers;
    constructor(name?: string, e?: Entity){ this.setModelBuilder(name, e); }
    setModelBuilder = (name: string, e?: Entity): void =>{
        if(name) this._name = name;
        if(e) this._mT.buildExtraTickers(e);
        this._mT.buildAllPriceTickers();
    }
    buildKNCTicker = (_scene: Entity) =>{
        const knc = new Entity('knc');
        engine.addEntity(knc);
        knc.setParent(_scene);
        const kncTrans = new Transform({
          position: new Vector3(1, 1, 1),
          rotation: new Quaternion(0, 0, 0, 1),
          scale: new Vector3(1, 1, 1)
        });
        knc.addComponentOrReplace(kncTrans);
        const kncShape = new GLTFShape("models/marketTicker/KNCTickerLogo.glb");
        kncShape.withCollisions = true;
        kncShape.isPointerBlocker = true;
        kncShape.visible = true;
        knc.addComponentOrReplace(kncShape);
    }
    buildPOLKATicker = (_scene: Entity) =>{
      const polka = new Entity('polka');
      engine.addEntity(polka);
      polka.setParent(_scene);
      const polkaTrans = new Transform({
        position: new Vector3(1, 2, 1),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      });
      polka.addComponentOrReplace(polkaTrans);
      const polkaShape = new GLTFShape("../models/marketTicker/POLKATickerLogo.glb");
      polkaShape.withCollisions = true;
      polkaShape.isPointerBlocker = true;
      polkaShape.visible = true;
      polka.addComponentOrReplace(polkaShape);
    }
    buildADATicker = (_scene: Entity) =>{
      const ada = new Entity('ada');
      engine.addEntity(ada);
      ada.setParent(_scene);
      const adaTrans = new Transform({
        position: new Vector3(1, 3, 1),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      });
      ada.addComponentOrReplace(adaTrans);
      const adaShape = new GLTFShape("../models/marketTicker/ADATickerLogo.glb");
      adaShape.withCollisions = true;
      adaShape.isPointerBlocker = true;
      adaShape.visible = true;
      ada.addComponentOrReplace(adaShape);
    }
    buildBNBTicker = (_scene: Entity) =>{
      const bnb = new Entity('bnb');
      engine.addEntity(bnb);
      bnb.setParent(_scene);
      const bnbTrans = new Transform({
        position: new Vector3(1, 1, 1),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      });
      bnb.addComponentOrReplace(bnbTrans);
      const bnbShape = new GLTFShape("../models/marketTicker/BNBTickerLogo.glb");
      bnbShape.withCollisions = true;
      bnbShape.isPointerBlocker = true;
      bnbShape.visible = true;
      bnb.addComponentOrReplace(bnbShape);
    }
    buildNEOTicker = (_scene: Entity) =>{
      const neo = new Entity('neo');
      engine.addEntity(neo);
      neo.setParent(_scene);
      const neoTrans = new Transform({
        position: new Vector3(1, 1, 1),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      });
      neo.addComponentOrReplace(neoTrans);
      const neoShape = new GLTFShape("../models/marketTicker/NEOTickerLogo.glb");
      neoShape.withCollisions = true;
      neoShape.isPointerBlocker = true;
      neoShape.visible = true;
      neo.addComponentOrReplace(neoShape);
    }
    build1INCHTicker = (_scene: Entity) =>{
      const inch1 = new Entity('1INCH');
      engine.addEntity(inch1);
      inch1.setParent(_scene);
      const inchTrans = new Transform({
        position: new Vector3(1, 1, 1),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
      });
      inch1.addComponentOrReplace(inchTrans);
      const inch1Shape = new GLTFShape("../models/marketTicker/1INCHTickerLogo.glb");
      inch1Shape.withCollisions = true;
      inch1Shape.isPointerBlocker = true;
      inch1Shape.visible = true;
      inch1.addComponentOrReplace(inch1Shape);
    }
    buildBEMPriceTicker = () =>{
        // Set up price trackers.
        let trackers = [
          new PriceTracker(
            new GLTFShape("../models/marketTicker/btcTickerLogo.glb"),
            "BTCUSD",
            new Transform({ position: new Vector3(-4, 1, -0.01) })),
          new PriceTracker(
            new GLTFShape("../models/marketTicker/ethTickerLogo.glb"),
            "ETHUSD",
            new Transform({ position: new Vector3(-4, 0, -0.01) })),
          new PriceTracker(
            new GLTFShape("../models/marketTicker/dclTickerLogo.glb"),
            "MANAUSD",
            new Transform({ position: new Vector3(-4, -1, -0.01) })),
        ];
        //Create update system to update the trackers and the time.
        engine.addSystem(new PriceUpdateSystem(trackers));
  
        // 3D Asset to attach data to.
        const backboard = new Entity();
        backboard.addComponent(new GLTFShape("../models/marketTicker/backboard.glb"));
        backboard.addComponent(new Transform({ 
          position: new Vector3(8, 0.2, 14),
          rotation: Quaternion.Euler(90, 0, 0),
          scale: new Vector3(.5, .5, .5)
        })); engine.addEntity(backboard);
  
        for(let i = 0; i < trackers.length; i++)
          trackers[i].setParent(backboard);
      }
      buildBAPPriceTicker = () =>{
        // Set up price trackers.
        let trackers_2 = [
          new PriceTracker(
            new GLTFShape("../models/marketTicker/BNBTickerLogo.glb"),
            "BNBUSD",
            new Transform({ position: new Vector3(-4, 1, -0.01) })),
          new PriceTracker(
            new GLTFShape("../models/marketTicker/POLKATickerLogo.glb"),
            "POLKUSD",
            new Transform({ position: new Vector3(-4, 0, -0.01) })),
          new PriceTracker(
            new GLTFShape("../models/marketTicker/ADATickerLogo.glb"),
            "ADAUSD",
            new Transform({ position: new Vector3(-4, -1, -0.01) })),
        ];
        //Create update system to update the trackers and the time.
        engine.addSystem(new PriceUpdateSystem(trackers_2));
  
        // 3D Asset to attach data to.
        const backboard_1 = new Entity();
        backboard_1.addComponent(new GLTFShape("../models/marketTicker/backboard.glb"));
        backboard_1.addComponent(new Transform({ 
          position: new Vector3(1, 4, 9),
          rotation: Quaternion.Euler(0, -90, 0),
          scale: new Vector3(.5, .5, .5)
        })); engine.addEntity(backboard_1);
  
        for(let j = 0; j < trackers_2.length; j++)
          trackers_2[j].setParent(backboard_1);
      }
      buildK1NPriceTicker = () =>{
        // Set up price trackers.
        let trackers_3 = [
          new PriceTracker(
            new GLTFShape("../models/marketTicker/BTCTickerLogo.glb"),
            "KNCUSD",
            new Transform({ position: new Vector3(-4, 1, -0.01) })),
          new PriceTracker(
            new GLTFShape("../models/marketTicker/ETHTickerLogo.glb"),
            "INCHUSD",
            new Transform({ position: new Vector3(-4, 0, -0.01) })),
          new PriceTracker(
            new GLTFShape("../models/marketTicker/DCLTickerLogo.glb"),
            "NEOUSD",
            new Transform({ position: new Vector3(-4, -1, -0.01) })),
        ];
        //Create update system to update the trackers and the time.
        engine.addSystem(new PriceUpdateSystem(trackers_3));
  
        // 3D Asset to attach data to.
        const backboard_3 = new Entity();
        backboard_3.addComponent(new GLTFShape("../models/marketTicker/backboard.glb"));
        backboard_3.addComponent(new Transform({ 
          position: new Vector3(15, 4, 8),
          rotation: Quaternion.Euler(0, 90, 0),
          scale: new Vector3(.5, .5, .5)
        })); engine.addEntity(backboard_3);
  
        for(let k = 0; k < trackers_3.length; k++)
          trackers_3[k].setParent(backboard_3);
      }

      buildExtraTickers = (_scene: Entity)=>{
        this.buildKNCTicker(_scene);
        this.buildNEOTicker(_scene);
        this.buildPOLKATicker(_scene);
        this.build1INCHTicker(_scene);
        this.buildADATicker(_scene);
        this.buildBNBTicker(_scene);
      }

      buildAllPriceTickers = () =>{
        this.buildBAPPriceTicker();
        this.buildBEMPriceTicker();
        this.buildK1NPriceTicker();
      }
}